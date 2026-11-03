import type { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';

function sendJson(res: ServerResponse, status: number, data: any) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(JSON.stringify(data));
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return sendJson(res, 405, { ok: false, error: 'Method Not Allowed' });
  }

  // Admin authentication check
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey) {
    return sendJson(res, 503, {
      ok: false,
      error: 'ADMIN_API_KEY environment variable is not configured.',
    });
  }

  const providedKey = req.headers['x-admin-key'] || (req.headers['authorization'] || '').replace(/^Bearer\s+/i, '');

  if (!providedKey || providedKey !== adminKey) {
    return sendJson(res, 401, {
      ok: false,
      error: 'Unauthorized: Invalid or missing administrator access key.',
    });
  }

  // 1. Try Supabase
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const response = await fetch(
        `${supabaseUrl.replace(/\/$/, '')}/rest/v1/contact_submissions?select=*&order=created_at.desc&limit=50`,
        {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        return sendJson(res, 200, { ok: true, source: 'supabase', count: data.length, messages: data });
      }
    } catch (err: any) {
      console.error('Supabase query failed:', err.message);
    }
  }

  // 2. Try Upstash / Vercel KV
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const kvUrl = process.env.KV_REST_API_URL.replace(/\/$/, '');
      const response = await fetch(`${kvUrl}/lrange/portfolio:contact_submissions/0/49`, {
        headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
      });
      if (response.ok) {
        const { result } = await response.json();
        const parsed = (result || []).map((item: string) => {
          try { return JSON.parse(item); } catch { return item; }
        });
        return sendJson(res, 200, { ok: true, source: 'vercel-kv', count: parsed.length, messages: parsed });
      }
    } catch (err: any) {
      console.error('KV query failed:', err.message);
    }
  }

  // 3. Try Local JSON file
  const dataFile = path.resolve(process.cwd(), '.data', 'contact_submissions.json');
  if (fs.existsSync(dataFile)) {
    try {
      const content = fs.readFileSync(dataFile, 'utf8');
      const messages = JSON.parse(content);
      return sendJson(res, 200, { ok: true, source: 'local-file', count: messages.length, messages });
    } catch (err: any) {
      return sendJson(res, 500, { ok: false, error: 'Failed to read local messages data' });
    }
  }

  return sendJson(res, 200, { ok: true, source: 'none', count: 0, messages: [] });
}
