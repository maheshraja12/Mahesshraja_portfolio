# Garidepalli Mahesh Raja — Engineering Portfolio

A modern, production-grade software engineer portfolio website built with React, TypeScript, and Tailwind CSS. Built to showcase real projects, engineering case studies, verified technical skills, and research presentations.

## 🚀 Overview

- **Engineer:** Garidepalli Mahesh Raja
- **Focus:** AI Software Engineering, Python, AI/ML, Full-Stack Web Development, Data Automation
- **Location:** Hyderabad, Telangana, India
- **Email:** [maheshrajagaridepalli954@gmail.com](mailto:maheshrajagaridepalli954@gmail.com)
- **GitHub:** [https://github.com/maheshraja12](https://github.com/maheshraja12)
- **Vercel Projects:** [https://vercel.com/maheshraja12](https://vercel.com/maheshraja12)

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS (modern CSS-in-JS design tokens, light & dark theme)
- **Icons:** Lucide React
- **Micro-Animations:** Canvas Confetti, CSS Transitions, Accessible Reduced-Motion Support
- **Hosting / Deployment Target:** GitHub Pages / Vercel

---

## 📂 Project Structure

```
d:/MAHESHRAJA PORTFOLIO/
├── public/
│   ├── favicon.svg             # Custom MR monogram SVG favicon
│   ├── Mahesh_Raja_Resume.pdf  # Verified resume PDF document
│   ├── robots.txt              # Search engine crawling directives
│   └── sitemap.xml             # Search engine URL indexing map
├── src/
│   ├── components/
│   │   ├── Header.tsx                 # Sticky navigation with MR monogram & scrollspy
│   │   ├── MobileNavigation.tsx       # Slide-out responsive drawer
│   │   ├── ThemeToggle.tsx            # Light/Dark mode switcher
│   │   ├── Hero.tsx                   # Hero section with code editor visual & CTAs
│   │   ├── ProfileHighlights.tsx      # Verified profile facts & metrics
│   │   ├── About.tsx                  # Narrative intro with Build/Solve/Learn cards
│   │   ├── ProjectGrid.tsx            # Category filtering (All, Web, AI/ML, Data, Automation)
│   │   ├── ProjectCard.tsx            # Visual project card with links & modal trigger
│   │   ├── ProjectCaseStudyModal.tsx  # In-depth architectural case study dialog
│   │   ├── ProjectVisuals.tsx         # Bespoke vector visual interfaces for each project
│   │   ├── Skills.tsx                 # Categorized skills without artificial percentages
│   │   ├── ExperienceTimeline.tsx     # Internship & Education milestones
│   │   ├── Research.tsx               # ICCET 2026 conference presentation card
│   │   ├── ContactSection.tsx         # Validated form with transparent email integration
│   │   └── Footer.tsx                 # Monogram, quick links, and back-to-top button
│   ├── data/
│   │   ├── projects.ts                # 8 detailed project definitions & case studies
│   │   ├── skills.ts                  # Categorized skill sets & usage context
│   │   ├── timeline.ts                # Internship & education timeline data
│   │   └── research.ts                # ICCET 2026 conference presentation data
│   ├── types/
│   │   └── portfolio.ts               # Strict TypeScript interface contracts
│   ├── App.tsx                        # Root layout orchestrator
│   ├── index.css                      # Design tokens, variables & typography rules
│   └── main.tsx                       # React application mount
├── index.html                         # SEO metadata, Open Graph & typography fonts
├── vercel.json                        # Vercel deployment & SPA routing rewrite rules
└── package.json
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js 18+ (tested on Node v22.14.0)
- npm or pnpm

### 2. Installation
```bash
# Clone or navigate to the repository directory
cd "d:/MAHESHRAJA PORTFOLIO"

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled output will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment to Vercel

This repository is pre-configured with `vercel.json` for zero-configuration deployment to Vercel:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-grade AI software engineer portfolio"
   git remote add origin https://github.com/maheshraja12/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. In your Vercel Dashboard, click **Add New > Project** and import the repository.
3. Vercel will automatically detect Vite and run `npm run build` with the `dist` output directory.

---

## 📄 Updating the Resume File

The header and hero "Download Resume" buttons point directly to `/Mahesh_Raja_Resume.pdf`.
To replace this with your latest formatted PDF, simply overwrite:
`public/Mahesh_Raja_Resume.pdf`
