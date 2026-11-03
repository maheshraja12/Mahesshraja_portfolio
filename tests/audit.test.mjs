import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const CANONICAL_URL = 'https://mahesshraja-portfolio-qcmz.vercel.app/';

test('1. SEO & Metadata Verification (Synchronized Domain)', () => {
  const indexHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

  // Canonical tag check
  assert.ok(
    indexHtml.includes(`<link rel="canonical" href="${CANONICAL_URL}" />`),
    `index.html must contain canonical link to ${CANONICAL_URL}`
  );

  // Open Graph URL check
  assert.ok(
    indexHtml.includes(`content="${CANONICAL_URL}"`),
    `og:url must point to ${CANONICAL_URL}`
  );

  // Open Graph Image check
  assert.ok(
    indexHtml.includes(`content="${CANONICAL_URL}profile.png"`),
    `og:image must point to absolute production URL of profile image`
  );

  // Twitter Card check
  assert.ok(indexHtml.includes('name="twitter:card" content="summary_large_image"'), 'Twitter card must be summary_large_image');
  assert.ok(indexHtml.includes('name="twitter:title"'), 'Twitter title must be set');
  assert.ok(indexHtml.includes('name="twitter:image"'), 'Twitter image must be set');

  // JSON-LD structured data check
  assert.ok(indexHtml.includes('"@type": "Person"'), 'JSON-LD must define Person schema');
  assert.ok(indexHtml.includes('"@type": "WebSite"'), 'JSON-LD must define WebSite schema');
  assert.ok(indexHtml.includes('"name": "Garidepalli Mahesh Raja"'), 'JSON-LD Person name must be Garidepalli Mahesh Raja');
  assert.ok(indexHtml.includes(`"url": "${CANONICAL_URL}"`), `JSON-LD must reference canonical URL ${CANONICAL_URL}`);

  // robots.txt and sitemap.xml check
  const robotsTxt = fs.readFileSync(path.join(ROOT_DIR, 'public', 'robots.txt'), 'utf8');
  assert.ok(robotsTxt.includes(`Sitemap: ${CANONICAL_URL}sitemap.xml`), 'robots.txt must point to canonical sitemap');

  const sitemapXml = fs.readFileSync(path.join(ROOT_DIR, 'public', 'sitemap.xml'), 'utf8');
  assert.ok(sitemapXml.includes(`<loc>${CANONICAL_URL}</loc>`), 'sitemap.xml must index the root production domain');
  assert.ok(!sitemapXml.includes('#about'), 'sitemap.xml must not include invalid in-page fragment anchors');
});

test('2. Resume Download & File Integrity', () => {
  const resumePath = path.join(ROOT_DIR, 'public', 'Mahesh_Raja_Resume.pdf');
  const resumePathLower = path.join(ROOT_DIR, 'public', 'Mahesh_Raja_resume.pdf');
  assert.ok(fs.existsSync(resumePath) || fs.existsSync(resumePathLower), 'Resume PDF must exist in public directory');

  const buffer = fs.readFileSync(fs.existsSync(resumePath) ? resumePath : resumePathLower);
  assert.ok(buffer.length > 5000, `Resume PDF file must be non-empty (size: ${buffer.length} bytes)`);

  const header = buffer.subarray(0, 5).toString('utf8');
  assert.ok(header.startsWith('%PDF'), 'Resume file must start with valid PDF magic bytes (%PDF)');

  // Verify vercel.json rewrite protects case matching
  const vercelJson = fs.readFileSync(path.join(ROOT_DIR, 'vercel.json'), 'utf8');
  assert.ok(vercelJson.includes('Mahesh_Raja_resume.pdf'), 'vercel.json must route resume requests to static PDF file');
});

test('3. Project Data & Architecture Case Studies Integrity', () => {
  const projectsTs = fs.readFileSync(path.join(ROOT_DIR, 'src', 'data', 'projects.ts'), 'utf8');

  // Verify removed projects are not present
  assert.ok(!projectsTs.includes("id: 'loan-recommendation'"), 'loan-recommendation project should not be in projectsData');
  assert.ok(!projectsTs.includes("id: 'business-analytics-dash'"), 'business-analytics-dash project should not be in projectsData');

  // Verify 6 featured projects are present
  const requiredProjects = [
    'sv-realestatehyd',
    'clean-sweep',
    'lung-cancer-ai',
    'aegis-v3',
    'jarvis-swarm',
    'fsindhu-app'
  ];

  for (const id of requiredProjects) {
    assert.ok(projectsTs.includes(`id: '${id}'`), `Project ${id} must be present in projectsData`);
  }

  // Verify architecture diagrams and verified results are present for all projects
  const verifiedResultsMatches = (projectsTs.match(/verifiedResults:/g) || []).length;
  assert.equal(verifiedResultsMatches, 6, 'All 6 projects must define verifiedResults');

  const architectureDiagramMatches = (projectsTs.match(/architectureDiagram:/g) || []).length;
  assert.equal(architectureDiagramMatches, 6, 'All 6 projects must define architectureDiagram');

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

test('4. Contact Form — Gmail Compose Only & No Database Storage Verification', () => {
  // Confirm NO backend API or server-side message storage exists
  const apiContactPath = path.join(ROOT_DIR, 'api', 'contact.ts');
  const apiMessagesPath = path.join(ROOT_DIR, 'api', 'messages.ts');
  const supabaseDir = path.join(ROOT_DIR, 'supabase');
  assert.ok(!fs.existsSync(apiContactPath), 'api/contact.ts must NOT exist (no serverless contact storage)');
  assert.ok(!fs.existsSync(apiMessagesPath), 'api/messages.ts must NOT exist (no admin messages API)');
  assert.ok(!fs.existsSync(supabaseDir), 'supabase/ directory must NOT exist (no external database)');

  // Verify ContactSection component implementation
  const contactSectionTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'ContactSection.tsx'), 'utf8');

  // Verification: No database or backend fetch calls in ContactSection
  assert.ok(!contactSectionTsx.includes("fetch('/api/contact'"), 'ContactSection must NOT submit to any backend API');
  assert.ok(!contactSectionTsx.includes('fetch('), 'ContactSection must have NO background network fetch calls');

  // Verification: No mailto redirection or Retry Mail Client in form submission
  assert.ok(!contactSectionTsx.includes('Retry Mail Client'), 'Must NOT have "Retry Mail Client"');
  assert.ok(!contactSectionTsx.includes('Your email app is opening'), 'Must NOT have "Your email app is opening" banner');
  assert.ok(!contactSectionTsx.includes('Message sent successfully'), 'Must NOT display fake "Message sent successfully" banner');

  // Verification: Gmail compose URL formatting
  assert.ok(contactSectionTsx.includes('mail.google.com/mail/'), 'Must compose using mail.google.com/mail/');
  assert.ok(contactSectionTsx.includes("params.set('view', 'cm')") || contactSectionTsx.includes('view=cm'), 'Must use Gmail compose mode (view=cm)');
  assert.ok(contactSectionTsx.includes("params.set('fs', '1')") || contactSectionTsx.includes('fs=1'), 'Must use full-screen compose (fs=1)');
  assert.ok(contactSectionTsx.includes('maheshrajagaridepalli954@gmail.com'), 'Must target maheshrajagaridepalli954@gmail.com');
  assert.ok(contactSectionTsx.includes('URLSearchParams'), 'Must use URLSearchParams for safe URL encoding');
  assert.ok(contactSectionTsx.includes("window.open(gmailUrl, '_blank'"), 'Must open Gmail in a new tab');

  // Verification: Required form fields
  assert.ok(contactSectionTsx.includes('contact-name'), 'Must include Name input');
  assert.ok(contactSectionTsx.includes('contact-email'), 'Must include Email input');
  assert.ok(contactSectionTsx.includes('contact-subject'), 'Must include Subject input');
  assert.ok(contactSectionTsx.includes('contact-message'), 'Must include Message textarea');

  // Verification: UI button and redirection note
  assert.ok(contactSectionTsx.includes('Send Message via Gmail'), 'Button label must be "Send Message via Gmail"');
  assert.ok(
    contactSectionTsx.includes("You'll be redirected to Gmail to review and send your message."),
    'Must display the exact redirection note below the button'
  );

  // Verification: Sidebar direct contact channels preserved
  assert.ok(contactSectionTsx.includes('WhatsApp'), 'Sidebar must preserve direct WhatsApp access');
  assert.ok(contactSectionTsx.includes('Email Me'), 'Sidebar must preserve direct Email Me action');
  assert.ok(contactSectionTsx.includes('Call Me'), 'Sidebar must preserve direct Call Me action');
  assert.ok(contactSectionTsx.includes('linkedin.com'), 'Sidebar must preserve LinkedIn link');
});

test('5. Component Layout & Navigation Integrity', () => {
  const appTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'App.tsx'), 'utf8');
  assert.ok(appTsx.includes('<About />'), 'App.tsx must render the About component');
  assert.ok(appTsx.includes('<Header />'), 'App.tsx must render Header');
  assert.ok(appTsx.includes('<Hero />'), 'App.tsx must render Hero');
  assert.ok(appTsx.includes('<ProfileHighlights />'), 'App.tsx must render ProfileHighlights');
  assert.ok(appTsx.includes('<RecruiterSnapshot />'), 'App.tsx must render RecruiterSnapshot');
  assert.ok(appTsx.includes('<ProjectGrid />'), 'App.tsx must render ProjectGrid');
  assert.ok(appTsx.includes('<Skills />'), 'App.tsx must render Skills');
  assert.ok(appTsx.includes('<ExperienceTimeline />'), 'App.tsx must render ExperienceTimeline');
  assert.ok(appTsx.includes('<GitHubActivity />'), 'App.tsx must render GitHubActivity');
  assert.ok(appTsx.includes('<ContactSection />'), 'App.tsx must render ContactSection');
  assert.ok(appTsx.includes('<Footer />'), 'App.tsx must render Footer');
  assert.ok(appTsx.includes('<FloatingWhatsApp />'), 'App.tsx must render FloatingWhatsApp');

  // Verify WhatsApp & LinkedIn presence
  const heroTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'Hero.tsx'), 'utf8');
  const footerTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'Footer.tsx'), 'utf8');
  const contactTsx = fs.readFileSync(path.join(ROOT_DIR, 'src', 'components', 'ContactSection.tsx'), 'utf8');

  assert.ok(heroTsx.includes('whatsapp') || heroTsx.includes('WhatsApp') || heroTsx.includes('wa.me'), 'Hero.tsx must include WhatsApp action');
  assert.ok(heroTsx.includes('linkedin.com'), 'Hero.tsx must include LinkedIn link');
  assert.ok(footerTsx.includes('linkedin.com'), 'Footer.tsx must include LinkedIn link');
  assert.ok(contactTsx.includes('linkedin.com'), 'ContactSection.tsx must include LinkedIn link');
});
