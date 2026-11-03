import type { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  botHoneypot?: string;
}

interface SubmissionRecord {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
  ip: string;
  userAgent?: string;
}

// In-memory rate limiting and deduplication store
const rateLimitMap = new Map<string, number[]>();
const recentSubmissions = new Map<string, number>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;
const DEDUP_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function cleanOldEntries() {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }

  for (const [hash, ts] of recentSubmissions.entries()) {
    if (now - ts > DEDUP_WINDOW_MS) {
      recentSubmissions.delete(hash);
    }
  }
}

function sanitizeInput(text: string): string {
  return text
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/[<>'"&]/g, (char) => {
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case "'": return '&#39;';
        case '"': return '&quot;';
        case '&': return '&amp;';
        default: return char;
      }
    })
    .trim();
}

function validateEmail(email: string): boolean {
  // RFC 5322 compliant regex for practical email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email) && email.length <= 100;
}

function getClientIp(req: IncomingMessage): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  const realIp = req.headers['x-real-ip'];
  if (typeof realIp === 'string') {
    return realIp.trim();
  }
  return req.socket.remoteAddress || '127.0.0.1';
}

async function parseJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 50 * 1024) { // 50KB payload guard
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON format'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, status: number, data: any) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'X-Content-Type-Options': 'nosniff',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    });
    return res.end();
  }

  // Method check
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, error: 'Method Not Allowed. Only POST is supported.' });
  }

  cleanOldEntries();

  const ip = getClientIp(req);
  const now = Date.now();

  // Rate Limiting
  const existingAttempts = rateLimitMap.get(ip) || [];
  const recentAttempts = existingAttempts.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  if (recentAttempts.length >= MAX_REQUESTS_PER_WINDOW) {
    return sendJson(res, 429, {
      ok: false,
      error: 'Too many messages sent. Please wait a few minutes before submitting again.',
      retryAfterMinutes: Math.ceil((RATE_LIMIT_WINDOW_MS - (now - recentAttempts[0])) / 60000),
    });
  }

  // Parse Body
  let body: ContactPayload;
  try {
    body = await parseJsonBody(req);
  } catch (err: any) {
    return sendJson(res, 400, { ok: false, error: err.message || 'Invalid request body.' });
  }

  // Honeypot check
  if (body.botHoneypot && body.botHoneypot.trim().length > 0) {
    // Silently drop bot submissions
    return sendJson(res, 200, { ok: true, message: 'Message received.' });
  }

  // Validation
  const rawName = (body.name || '').trim();
  const rawEmail = (body.email || '').trim().toLowerCase();
  const rawMessage = (body.message || '').trim();

  if (!rawName || rawName.length < 2 || rawName.length > 100) {
    return sendJson(res, 422, { ok: false, error: 'Name must be between 2 and 100 characters.' });
  }

  if (!rawEmail || !validateEmail(rawEmail)) {
    return sendJson(res, 422, { ok: false, error: 'Please enter a valid email address.' });
  }

  if (!rawMessage || rawMessage.length < 10 || rawMessage.length > 3000) {
    return sendJson(res, 422, { ok: false, error: 'Message must be between 10 and 3000 characters.' });
  }

  // Duplicate Submission Prevention
  const dedupKey = `${rawEmail}:${rawMessage.toLowerCase()}`;
  if (recentSubmissions.has(dedupKey)) {
    return sendJson(res, 409, {
      ok: false,
      error: 'This message was already submitted. Thank you for reaching out!',
    });
  }

  // Sanitize
  const cleanName = sanitizeInput(rawName);
  const cleanMessage = sanitizeInput(rawMessage);

  const submissionRecord: SubmissionRecord = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    name: cleanName,
    email: rawEmail,
    message: cleanMessage,
    submittedAt: new Date().toISOString(),
    ip,
    userAgent: typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'] : undefined,
  };

  // Persistent Storage Mechanism
  let storedSuccessfully = false;
  let storageEngine = 'none';

  // 1. Supabase Storage (Preferred production database)
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const response = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          id: submissionRecord.id,
          name: submissionRecord.name,
          email: submissionRecord.email,
          message: submissionRecord.message,
          ip_address: submissionRecord.ip,
          created_at: submissionRecord.submittedAt,
        }),
      });

      if (response.ok || response.status === 201) {
        storedSuccessfully = true;
        storageEngine = 'supabase';
      } else {
        console.error('Supabase error:', response.status, await response.text());
      }
    } catch (dbErr) {
      console.error('Failed to persist to Supabase:', dbErr);
    }
  }

  // 2. Upstash / Vercel KV Storage (Secondary production adapter)
  if (!storedSuccessfully && process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const kvUrl = process.env.KV_REST_API_URL.replace(/\/$/, '');
      const kvResponse = await fetch(`${kvUrl}/lpush/portfolio:contact_submissions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
        body: JSON.stringify(submissionRecord),
      });
      if (kvResponse.ok) {
        storedSuccessfully = true;
        storageEngine = 'vercel-kv';
      }
    } catch (kvErr) {
      console.error('Failed to persist to Vercel KV:', kvErr);
    }
  }

  // 3. Local Filesystem Storage (Local development & test environments)
  const isLocalDev = process.env.NODE_ENV !== 'production' || !process.env.VERCEL;
  if (!storedSuccessfully && isLocalDev) {
    try {
      const dataDir = path.resolve(process.cwd(), '.data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const dataFile = path.join(dataDir, 'contact_submissions.json');
      let records: SubmissionRecord[] = [];
      if (fs.existsSync(dataFile)) {
        try {
          records = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        } catch {
          records = [];
        }
      }
      records.unshift(submissionRecord);
      fs.writeFileSync(dataFile, JSON.stringify(records, null, 2), 'utf8');
      storedSuccessfully = true;
      storageEngine = 'local-file';
    } catch (fsErr) {
      console.error('Failed to save to local file store:', fsErr);
    }
  }

  // 4. Serverless Runtime Log Fallback (Guarantees enquiry capture in Vercel function logs)
  if (!storedSuccessfully) {
    console.info('[PORTFOLIO ENQUIRY CAPTURED]', JSON.stringify(submissionRecord));
    storedSuccessfully = true;
    storageEngine = 'runtime-logged';
  }

  // Register rate limiting and deduplication after confirmed storage
  recentAttempts.push(now);
  rateLimitMap.set(ip, recentAttempts);
  recentSubmissions.set(dedupKey, now);

  // Optional: Send Notification via Resend Email API if configured
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
          to: 'maheshrajagaridepalli954@gmail.com',
          subject: `[Portfolio Inquiry] New message from ${cleanName}`,
          text: `Name: ${cleanName}\nEmail: ${rawEmail}\nDate: ${submissionRecord.submittedAt}\n\nMessage:\n${cleanMessage}`,
        }),
      });
    } catch (emailErr) {
      console.error('Notification email trigger failed:', emailErr);
    }
  }

  return sendJson(res, 200, {
    ok: true,
    message: 'Your message has been securely received! Mahesh will get back to you shortly.',
    submissionId: submissionRecord.id,
    storageEngine,
  });
}
