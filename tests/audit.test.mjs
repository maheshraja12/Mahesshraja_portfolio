import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();

test('1. SEO & Metadata Verification', () => {
  const indexHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

  // Canonical tag check
  assert.ok(
    indexHtml.includes('<link rel="canonical" href="https://mahesshraja-portfolio.vercel.app/" />'),
    'index.html must contain canonical link to https://mahesshraja-portfolio.vercel.app/'
  );

  // Open Graph URL check
  assert.ok(
    indexHtml.includes('content="https://mahesshraja-portfolio.vercel.app/"'),
    'og:url must point to https://mahesshraja-portfolio.vercel.app/'
  );

  // Open Graph Image check
  assert.ok(
    indexHtml.includes('content="https://mahesshraja-portfolio.vercel.app/profile.png"'),
    'og:image must point to absolute production URL of profile image'
  );

  // Twitter Card check
  assert.ok(indexHtml.includes('name="twitter:card" content="summary_large_image"'), 'Twitter card must be summary_large_image');
  assert.ok(indexHtml.includes('name="twitter:title"'), 'Twitter title must be set');
  assert.ok(indexHtml.includes('name="twitter:image"'), 'Twitter image must be set');

  // JSON-LD structured data check
  assert.ok(indexHtml.includes('"@type": "Person"'), 'JSON-LD must define Person schema');
  assert.ok(indexHtml.includes('"@type": "WebSite"'), 'JSON-LD must define WebSite schema');
  assert.ok(indexHtml.includes('"name": "Garidepalli Mahesh Raja"'), 'JSON-LD Person name must be Garidepalli Mahesh Raja');

  // robots.txt and sitemap.xml check
  const robotsTxt = fs.readFileSync(path.join(ROOT_DIR, 'public', 'robots.txt'), 'utf8');
  assert.ok(robotsTxt.includes('Sitemap: https://mahesshraja-portfolio.vercel.app/sitemap.xml'), 'robots.txt must point to canonical sitemap');

  const sitemapXml = fs.readFileSync(path.join(ROOT_DIR, 'public', 'sitemap.xml'), 'utf8');
  assert.ok(sitemapXml.includes('<loc>https://mahesshraja-portfolio.vercel.app/</loc>'), 'sitemap.xml must index the root production domain');
  assert.ok(!sitemapXml.includes('#about'), 'sitemap.xml must not include invalid in-page fragment anchors');
});

test('2. Resume Download & File Integrity', () => {
  const resumePath = path.join(ROOT_DIR, 'public', 'Mahesh_Raja_Resume.pdf');
  assert.ok(fs.existsSync(resumePath), 'public/Mahesh_Raja_Resume.pdf must exist');

  const buffer = fs.readFileSync(resumePath);
  assert.ok(buffer.length > 5000, `Resume PDF file must be non-empty (size: ${buffer.length} bytes)`);

  const header = buffer.subarray(0, 5).toString('utf8');
  assert.ok(header.startsWith('%PDF'), 'Resume file must start with valid PDF magic bytes (%PDF)');

  // Check code references
  const headerTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'Header.tsx'), 'utf8');
  const heroTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'Hero.tsx'), 'utf8');
  const mobileNavTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'MobileNavigation.tsx'), 'utf8');

  assert.ok(headerTsx.includes('href="/Mahesh_Raja_Resume.pdf"'), 'Header.tsx must link to /Mahesh_Raja_Resume.pdf');
  assert.ok(heroTsx.includes('href="/Mahesh_Raja_Resume.pdf"'), 'Hero.tsx must link to /Mahesh_Raja_Resume.pdf');
  assert.ok(mobileNavTsx.includes('href="/Mahesh_Raja_Resume.pdf"'), 'MobileNavigation.tsx must link to /Mahesh_Raja_Resume.pdf');
});

test('3. Project Data & Assets Integrity', () => {
  const projectsTs = fs.readFileSync(path.join(ROOT_DIR, 'src', 'data', 'projects.ts'), 'utf8');

  // Verify removed projects are not present
  assert.ok(!projectsTs.includes("id: 'loan-recommendation'"), 'loan-recommendation project should not be in projectsData');
  assert.ok(!projectsTs.includes("id: 'business-analytics-dash'"), 'business-analytics-dash project should not be in projectsData');

  // Verify featured projects are present
  assert.ok(projectsTs.includes("id: 'sv-realestatehyd'"), 'SV Real Estate project must be present');
  assert.ok(projectsTs.includes("id: 'clean-sweep'"), 'CleanSweep project must be present');
  assert.ok(projectsTs.includes("id: 'lung-cancer-ai'"), 'Lung cancer classification project must be present');
  assert.ok(projectsTs.includes("id: 'aegis-v3'"), 'AEGIS V3 project must be present');
  assert.ok(projectsTs.includes("id: 'jarvis-swarm'"), 'JARVIS Swarm project must be present');
  assert.ok(projectsTs.includes("id: 'fsindhu-app'"), 'FSindhu App project must be present');

  // Check project image assets exist in public
  const expectedImages = [
    'realestate.jpg',
    'cleansweep.jpg',
    'lungcancer.jpg',
    'aegis.jpg',
    'jarvis.jpg',
    'fsindhu.jpg'
  ];

  for (const img of expectedImages) {
    const imgPath = path.join(ROOT_DIR, 'public', 'projects', img);
    assert.ok(fs.existsSync(imgPath), `Project image public/projects/${img} must exist`);
    const stats = fs.statSync(imgPath);
    assert.ok(stats.size > 1000, `Project image ${img} must have content`);
  }
});

test('4. Contact Form & Backend API Security Checks', () => {
  const contactApiTs = fs.readFileSync(path.join(ROOT_DIR, 'api', 'contact.ts'), 'utf8');
  assert.ok(contactApiTs.includes("req.method !== 'POST'"), 'api/contact.ts must enforce POST method only');
  assert.ok(contactApiTs.includes('botHoneypot'), 'api/contact.ts must check honeypot spam protection');
  assert.ok(contactApiTs.includes('RATE_LIMIT_WINDOW_MS'), 'api/contact.ts must enforce rate limiting');
  assert.ok(contactApiTs.includes('sanitizeInput'), 'api/contact.ts must sanitize inputs against XSS');
  assert.ok(contactApiTs.includes('dedupKey'), 'api/contact.ts must prevent duplicate submissions');
  assert.ok(contactApiTs.includes('storedSuccessfully'), 'api/contact.ts must verify persistent storage before returning 200');

  const contactSectionTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'ContactSection.tsx'), 'utf8');
  assert.ok(!contactSectionTsx.includes('window.location.href = mailtoUrl;'), 'ContactSection must not blindly redirect to mailto on submit');
  assert.ok(contactSectionTsx.includes("fetch('/api/contact'"), 'ContactSection must post to /api/contact');
  assert.ok(contactSectionTsx.includes("submissionState === 'submitting'"), 'ContactSection must show loading state');
  assert.ok(contactSectionTsx.includes('getDirectMailtoUrl'), 'ContactSection must provide direct email fallback');

  // Verify Vercel SPA routing excludes API
  const vercelJson = fs.readFileSync(path.join(ROOT_DIR, 'vercel.json'), 'utf8');
  assert.ok(vercelJson.includes('(?!api/)'), 'vercel.json must exclude /api/ routes from SPA fallback rewrite');
});

test('5. Component Layout & Navigation Integrity', () => {
  const appTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'App.tsx'), 'utf8');
  assert.ok(appTsx.includes('<About />'), 'App.tsx must render the About component');
  assert.ok(appTsx.includes('<Header />'), 'App.tsx must render Header');
  assert.ok(appTsx.includes('<Hero />'), 'App.tsx must render Hero');
  assert.ok(appTsx.includes('<ProfileHighlights />'), 'App.tsx must render ProfileHighlights');
  assert.ok(appTsx.includes('<ProjectGrid />'), 'App.tsx must render ProjectGrid');
  assert.ok(appTsx.includes('<Skills />'), 'App.tsx must render Skills');
  assert.ok(appTsx.includes('<ExperienceTimeline />'), 'App.tsx must render ExperienceTimeline');
  assert.ok(appTsx.includes('<ContactSection />'), 'App.tsx must render ContactSection');
  assert.ok(appTsx.includes('<Footer />'), 'App.tsx must render Footer');

  // Verify duplicate id="about" is eliminated
  const timelineTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'ExperienceTimeline.tsx'), 'utf8');
  assert.ok(!timelineTsx.includes('id="about"'), 'ExperienceTimeline.tsx must not contain duplicate id="about"');

  // Verify LinkedIn presence
  const heroTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'Hero.tsx'), 'utf8');
  const footerTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'Footer.tsx'), 'utf8');
  const contactTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'ContactSection.tsx'), 'utf8');

  assert.ok(heroTsx.includes('linkedin.com'), 'Hero.tsx must include LinkedIn link');
  assert.ok(footerTsx.includes('linkedin.com'), 'Footer.tsx must include LinkedIn link');
  assert.ok(contactTsx.includes('linkedin.com'), 'ContactSection.tsx must include LinkedIn link');
});
