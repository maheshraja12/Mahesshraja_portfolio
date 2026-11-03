const CANONICAL_URL = 'https://mahesshraja-portfolio-qcmz.vercel.app/';

async function verifyLive() {
  console.log('Fetching live homepage...');
  const res = await fetch(`${CANONICAL_URL}?t=${Date.now()}`, {
    headers: { 'Cache-Control': 'no-cache' }
  });
  console.log('Homepage status:', res.status);
  const html = await res.text();

  const scriptMatch = html.match(/\/assets\/index-[a-zA-Z0-9_\-]+\.js/);
  if (!scriptMatch) {
    console.error('Could not find JS bundle');
    process.exit(1);
  }

  const jsUrl = `${CANONICAL_URL.replace(/\/$/, '')}${scriptMatch[0]}`;
  console.log('Fetching live bundle:', jsUrl);
  const jsRes = await fetch(jsUrl);
  const js = await jsRes.text();

  const checks = [
    { label: 'Button text "Send Message via Gmail"', pass: js.includes('Send Message via Gmail') },
    { label: 'Redirection note present', pass: js.includes("You'll be redirected to Gmail to review and send your message.") },
    { label: 'Gmail compose endpoint used', pass: js.includes('mail.google.com/mail/') },
    { label: 'Recipient set to maheshrajagaridepalli954@gmail.com', pass: js.includes('maheshrajagaridepalli954@gmail.com') },
    { label: 'Subject input id present', pass: js.includes('contact-subject') },
    { label: 'No "Retry Mail Client" in form', pass: !js.includes('Retry Mail Client') },
    { label: 'No "Your email app is opening" in form', pass: !js.includes('Your email app is opening') },
    { label: 'No "Re-open Gmail Compose" link in form', pass: !js.includes('Re-open Gmail Compose') },
    { label: 'No "Compose another" button in form', pass: !js.includes('Compose another') },
    { label: 'No fetch to /api/contact in bundle', pass: !js.includes('/api/contact') }
  ];

  console.log('\n--- BUNDLE VERIFICATION CHECKS ---');
  let allPass = true;
  for (const c of checks) {
    console.log(`${c.pass ? '✔ PASS' : '✖ FAIL'}: ${c.label}`);
    if (!c.pass) allPass = false;
  }

  // Check /api/contact endpoint is removed
  console.log('\n--- BACKEND REMOVAL CHECK ---');
  const apiRes = await fetch(`${CANONICAL_URL}api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ test: true })
  });
  const contentType = apiRes.headers.get('content-type') || '';
  const isSpaHtml = contentType.includes('text/html');
  console.log(`POST /api/contact returned HTTP ${apiRes.status} (Content-Type: ${contentType})`);
  console.log(`Confirmed no serverless backend API handler: ${isSpaHtml || apiRes.status === 404}`);

  if (!allPass) {
    console.error('Some checks failed.');
    process.exit(1);
  }
  console.log('\nAll live checks passed successfully!');
}

verifyLive().catch((err) => {
  console.error(err);
  process.exit(1);
});

