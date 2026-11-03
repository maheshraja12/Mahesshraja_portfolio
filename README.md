# Garidepalli Mahesh Raja — Engineering Portfolio

A production-grade, full-stack AI Software Engineer portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS. Showcases verified software projects, architectural case studies, technical skills, academic research presentations, and a secure backend contact API.

---

## 🚀 Overview

- **Engineer:** Garidepalli Mahesh Raja
- **Positioning:** AI Software Engineer / Full-Stack Developer
- **Degree:** B.Tech in Computer Science and Engineering, Institute of Aeronautical Engineering (IARE)
- **CGPA:** 7.38 / 10
- **Location:** Hyderabad, Telangana, India
- **Production URL:** [https://mahesshraja-portfolio.vercel.app](https://mahesshraja-portfolio.vercel.app)
- **GitHub:** [https://github.com/maheshraja12](https://github.com/maheshraja12)
- **LinkedIn:** [https://linkedin.com/in/garidepalli-mahesh-raja](https://linkedin.com/in/garidepalli-mahesh-raja)
- **Email:** [maheshrajagaridepalli954@gmail.com](mailto:maheshrajagaridepalli954@gmail.com)

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** React 19 + TypeScript (Strict typing enabled)
- **Build Tool:** Vite 6 + Rolldown bundler
- **Styling:** Tailwind CSS (responsive design tokens, light & dark mode)
- **Backend / Serverless:** Vercel Serverless Functions (`/api/contact.ts`, `/api/messages.ts`)
- **Storage Adapters:** Supabase (PostgreSQL), Vercel KV / Upstash Redis, Local file fallback
- **Icons:** Lucide React + Bespoke SVGs (GitHub, LinkedIn, Tech Stack icons)
- **SEO & Social:** Open Graph, Twitter Summary Large Image Cards, JSON-LD Person & WebSite Schema, XML Sitemap, robots.txt
- **Testing:** Node.js native test runner (`node:test`, `node:assert/strict`)

---

## 📂 Project Structure

```
d:/MAHESHRAJA PORTFOLIO/
├── api/
│   ├── contact.ts              # Secure serverless contact form handler (POST /api/contact)
│   └── messages.ts             # Admin review endpoint with token auth (GET /api/messages)
├── public/
│   ├── favicon.svg             # Custom MR monogram SVG favicon
│   ├── Mahesh_Raja_Resume.pdf  # Verified resume PDF document
│   ├── profile.png             # Professional profile image
│   ├── projects/               # High-resolution screenshots for verified projects
│   ├── robots.txt              # Search engine crawling directives pointing to canonical domain
│   └── sitemap.xml             # Canonical XML sitemap without in-page fragment anchors
├── src/
│   ├── components/
│   │   ├── Header.tsx                 # Sticky navigation with MR monogram, theme toggle & scrollspy
│   │   ├── MobileNavigation.tsx       # Accessible slide-out responsive drawer
│   │   ├── ThemeToggle.tsx            # Dark / light mode switcher with persistent preference
│   │   ├── Hero.tsx                   # Hero section with neon portrait ring, code card & social CTAs
│   │   ├── ProfileHighlights.tsx      # 4-metric glassmorphism highlights bar
│   │   ├── About.tsx                  # Narrative intro with Build/Solve/Learn pillars & focus areas
│   │   ├── ProjectGrid.tsx            # Filterable projects grid (All, Web, AI/ML, Data, Automation)
│   │   ├── ProjectCard.tsx            # Project card with dual-theme styling & case study trigger
│   │   ├── ProjectCaseStudyModal.tsx  # In-depth architectural case study dialog
│   │   ├── ProjectVisuals.tsx         # Bespoke visual interfaces for projects
│   │   ├── Skills.tsx                 # Categorized technical skills shelf & detailed breakdown
│   │   ├── ExperienceTimeline.tsx     # Internship, Education & interactive Research modal
│   │   ├── ContactSection.tsx         # Backend-powered contact form with real validation & fallback
│   │   ├── Footer.tsx                 # Monogram, quick links, social profiles & back-to-top
│   │   ├── GithubIcon.tsx             # Optimized SVG GitHub icon
│   │   ├── LinkedinIcon.tsx           # Optimized SVG LinkedIn icon
│   │   └── TechIcons.tsx              # Comprehensive library of clean SVG technology badges
│   ├── data/
│   │   ├── projects.ts                # Verified project definitions and architectural breakdowns
│   │   ├── skills.ts                  # Categorized skill sets and practical engineering contexts
│   │   ├── timeline.ts                # Real internship & education milestones
│   │   └── research.ts                # ICCET 2026 conference presentation data & academic disclaimer
│   ├── types/
│   │   └── portfolio.ts               # Strict TypeScript interface contracts
│   ├── App.tsx                        # Layout orchestrator
│   ├── index.css                      # Design tokens, variables & typography rules
│   └── main.tsx                       # React application mount
├── tests/
│   └── audit.test.mjs                 # Comprehensive automated verification & audit test suite
├── index.html                         # Canonical SEO tags, Open Graph, Twitter Cards, JSON-LD Schema
├── vercel.json                        # Vercel deployment & API-preserving SPA rewrite configuration
└── package.json
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js:** v18+ (tested on Node v22.14.0)
- **Package Manager:** npm (or pnpm / yarn)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/maheshraja12/Mahesshraja_portfolio.git
cd Mahesshraja_portfolio

# Install project dependencies
npm install
```

### 3. Environment Variables (Optional)
Copy `.env.example` to `.env.local` to configure backend storage or email alerts:
```bash
cp .env.example .env.local
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Run Automated Tests
```bash
npm test
```
Executes the native test runner covering SEO metadata, PDF integrity, project assets, backend API security, and component hierarchy.

### 6. Build for Production
```bash
npm run build
```
Generates type-checked, optimized bundles into `dist/`.

---

## 📬 Contact Backend Architecture

The contact submission system replaces unverified `mailto:` client redirects with a secure, multi-tier serverless API:

1. **Endpoint:** `POST /api/contact`
2. **Security & Validation:**
   - **Method Guard:** Only HTTP `POST` requests are accepted (returns `405 Method Not Allowed` otherwise).
   - **Anti-Spam Honeypot:** Invisible field `botHoneypot` silently intercepts automated bot submissions.
   - **Sliding-Window Rate Limiting:** Enforces a maximum of 3 submissions per 10-minute window per IP.
   - **Duplicate Submission Cache:** Prevents identical submissions from the same email within 15 minutes.
   - **Input Sanitization:** Strips HTML tags and escapes malicious characters to neutralize XSS attacks.
   - **Field Validation:**
     - `name`: 2 to 100 characters.
     - `email`: RFC 5322 regex validation, normalized to lowercase.
     - `message`: 10 to 3000 characters.
3. **Storage Engine Priority:**
   - **Supabase (PostgreSQL):** If `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided, inserts into the `contact_submissions` table via REST API.
   - **Vercel KV / Upstash Redis:** If `KV_REST_API_URL` and `KV_REST_API_TOKEN` are set, pushes to `portfolio:contact_submissions`.
   - **Local Filesystem:** In development mode (`NODE_ENV !== 'production'`), persists to `.data/contact_submissions.json`.
   - **Safe Fallback:** If database storage is unconfigured in production, the API returns a transparent `503 Service Unavailable` with a direct `mailto:` fallback button so messages are never silently lost.
4. **Admin Review Endpoint:**
   - **Endpoint:** `GET /api/messages`
   - **Protection:** Requires header `x-admin-key: <ADMIN_API_KEY>` or `Authorization: Bearer <ADMIN_API_KEY>`.
   - Returns paginated recent submissions formatted with timestamps.

### Environment Variable Reference

| Variable Name | Required | Purpose |
| :--- | :---: | :--- |
| `SUPABASE_URL` | Optional | Supabase project URL for PostgreSQL contact message persistence |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | Supabase service key for server-side inserts |
| `KV_REST_API_URL` | Optional | Upstash / Vercel KV REST URL (alternative storage) |
| `KV_REST_API_TOKEN` | Optional | Upstash / Vercel KV REST Token |
| `RESEND_API_KEY` | Optional | Resend API key for instant email notifications to Mahesh |
| `RESEND_FROM_EMAIL` | Optional | Verified sender email for Resend notifications |
| `ADMIN_API_KEY` | Optional | Secret key required to read submissions via `/api/messages` |

---

## 🌟 Featured Engineering Projects

All projects listed in the portfolio represent real, verifiable software systems:

1. **SV Real Estate Hyderabad**
   - **Stack:** Node.js, Express.js, EJS, SQL, SQLite (WAL mode), PostgreSQL / Supabase
   - **Live Application:** [https://sv-realestatehyd.vercel.app/](https://sv-realestatehyd.vercel.app/)
   - **Source Code:** [https://github.com/maheshraja12/sv-realestatehyd](https://github.com/maheshraja12/sv-realestatehyd)
   - **Description:** Full-stack property management platform featuring modular lead capture modals, dynamic filtering, session-guarded admin portal, and dual database adapters.

2. **CleanSweep**
   - **Stack:** Python, Flask, pandas, numpy, scikit-learn, Docker
   - **Source Code:** [https://github.com/maheshraja12/clean](https://github.com/maheshraja12/clean)
   - **Description:** Automated CSV cleansing engine providing missing value imputation, IQR outlier detection, feature scaling, and quality audit reports.

3. **Lung Cancer Classification**
   - **Stack:** TensorFlow, Keras, CNN, Flask, Python
   - **Status:** Presented at ICCET 2026 (March 2026)
   - **Description:** Academic research exploration investigating stain-invariant preprocessing and computationally efficient CNN architectures for histopathological tissue evaluation. (Explicitly noted as an educational research prototype, not for clinical diagnostic use).

4. **AEGIS V3 — Self-Healing Infrastructure**
   - **Stack:** Python 3.10+, FastAPI, OpenAI GPT-4o, Pydantic v2, asyncio, pytest
   - **Source Code:** [https://github.com/maheshraja12/aegis-push](https://github.com/maheshraja12/aegis-push)
   - **Description:** Experimental autonomous incident repair engine featuring 8-stage repair orchestration, static AST bytecode checks, isolated subprocess verification, and WebSocket telemetry.

5. **JARVIS Swarm Personal Assistant**
   - **Stack:** Python, FastAPI, AsyncIO, SQLite, Speech I/O, REST APIs
   - **Source Code:** [https://github.com/maheshraja12/jarvis-swarm](https://github.com/maheshraja12/jarvis-swarm)
   - **Description:** Local-first voice assistant architecture featuring loopback security isolation, persistent SQLite memory schema, and a FastAPI web dashboard.

6. **FSindhu App**
   - **Stack:** React, Vite, Tailwind CSS, Canvas Confetti
   - **Live Application:** [https://fsindhu-app.vercel.app/](https://fsindhu-app.vercel.app/)
   - **Description:** Bespoke interactive web application featuring fluid responsive animations and celebratory micro-interactions.

---

## 🚢 Vercel Deployment & Cleanup Analysis

### Active Vercel Projects Analysis

During audit, two Vercel projects were identified linking to this repository:
1. `mahesshraja-portfolio` (Production domain: `https://mahesshraja-portfolio.vercel.app`)
2. `mahesshraja-portfolio-qcmz` (Domain: `https://mahesshraja-portfolio-qcmz.vercel.app`)

**Technical Findings:**
- Both deployments build the identical commit and produce the exact same entity tag (`ETag: "6e1c7e20a24c4c8d18f9e656c627fae1"`).
- `mahesshraja-portfolio` represents the canonical project name matching the owner's branding.
- `mahesshraja-portfolio-qcmz` is an auto-generated duplicate created by a secondary import with a random suffix.

**Recommendation:**
- **Retain as Canonical Production:** `mahesshraja-portfolio`.
- **Safe Cleanup (Pending User Approval):** The duplicate project `mahesshraja-portfolio-qcmz` can be safely archived or unlinked in the Vercel dashboard once you confirm all traffic and custom domains point exclusively to `mahesshraja-portfolio`. No production settings or projects were deleted or modified without explicit user authorization.

---

## 📄 License & Attribution

© 2026 Garidepalli Mahesh Raja. All rights reserved.
Developed with React, TypeScript, and Tailwind CSS.
