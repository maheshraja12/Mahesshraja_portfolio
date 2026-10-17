import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'sv-realestatehyd',
    title: 'SV Real Estate Hyderabad',
    tagline: 'Full-Stack Property Management & Customer Lead Pipeline',
    description: 'Full-stack real estate web application with property listings, enquiry management and admin panel.',
    category: 'web',
    tags: ['Node.js', 'Express.js', 'EJS', 'SQL', 'SQLite (WAL)', 'PostgreSQL'],
    liveUrl: 'https://sv-realestatehyd.vercel.app/',
    githubUrl: 'https://github.com/maheshraja12/sv-realestatehyd',
    featured: true,
    statusBadge: 'Deployed on Vercel',
    badgeType: 'deployed',
    visualType: 'real-estate',
    image: '/projects/realestate.jpg',
    caseStudy: {
      problem: 'Real estate businesses frequently lose high-intent buyers due to scattered enquiry touchpoints, unstandardized contact channels, and lack of immediate admin notification or organized database management.',
      solution: 'Engineered a unified full-stack web application featuring dynamic property catalogs, a centralized 4-field enquiry modal auto-bound across all property CTAs, and a password-protected admin portal with direct lead status controls.',
      architecture: [
        'Public Portal: Responsive views built with EJS templates and vanilla JavaScript DOM auto-binders.',
        'Enquiry Layer: Client-side event interception routing all site visits and consultation buttons to a shared modal (#publicEnquiryForm).',
        'Backend API: Express router (routes/api/leads.js) with strict payload sanitation and appointment slot validation.',
        'Data Persistence: node:sqlite DatabaseSync with Write-Ahead Logging (WAL) for resilient local transactions, coupled with modular Supabase / PostgreSQL adapter hooks.',
        'Admin Portal: Secure session-guarded route middleware (middleware/auth.js) providing tabular lead filtering and status transitions.'
      ],
      keyFeatures: [
        'Dynamic property catalog with category filters (Plots, Villas, Commercial, Apartments)',
        'Universal enquiry modal auto-binding across all view action buttons',
        'Structured lead capture collecting full name, phone number, slot date/time, and property requirement',
        'Protected administrative dashboard with lead detail inspection',
        'Configured for Vercel serverless deployment with modular database drivers'
      ],
      challenges: 'Managing seamless client-side modal state transitions across heterogeneous property pages without code duplication, while ensuring reliable database fallbacks across local SQLite file storage and remote PostgreSQL instances.',
      limitations: 'In production serverless deployment on Vercel, SQLite is ephemeral unless backed by a persistent external database connection such as Supabase PostgreSQL.',
      testingNote: 'Verified end-to-end form submission with automated test scripts (test_modal_submission.js) and active production endpoints on Vercel.'
    }
  },
  {
    id: 'fsindhu-app',
    title: 'FSindhu App',
    tagline: 'Custom Personalized Interactive Web Experience',
    description: 'A personalized web application built as a birthday gift with custom design and animations.',
    category: 'web',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
    liveUrl: 'https://fsindhu-app.vercel.app/',
    featured: true,
    statusBadge: 'Live Deployment',
    badgeType: 'deployed',
    visualType: 'fsindhu',
    image: '/projects/fsindhu.jpg',
    caseStudy: {
      problem: 'Standard digital greetings feel impersonal and static; building a bespoke, responsive web application offers a memorable and interactive experience.',
      solution: 'Crafted a custom React application featuring smooth CSS transitions, interactive celebration triggers, playful visual reveals, and responsive layout across mobile and desktop viewports.',
      architecture: [
        'Vite + React single-page structure for rapid asset loading and instant transitions.',
        'Component-driven layout organizing celebration chapters and interactive wishes.',
        'Tailwind CSS custom keyframe animations and confetti particle effects.',
        'Continuous automated deployment pipeline via Vercel.'
      ],
      keyFeatures: [
        'Tailored, elegant visual aesthetic with festive micro-interactions',
        'Fluid responsive layout tested across mobile viewports',
        'Client-side stateful interactive elements and animation sequences',
        'Zero-latency client performance hosted on edge CDN'
      ],
      challenges: 'Ensuring rich visual effects and animations remain silky smooth at 60fps on lower-powered mobile devices.',
      limitations: 'Personal gift application designed with specific personalized content rather than a generalized public SaaS architecture.',
      testingNote: 'Verified across modern Chrome, Safari, and mobile browsers on iOS and Android.'
    }
  },
  {
    id: 'clean-sweep',
    title: 'CleanSweep',
    tagline: 'Automated CSV Dataset Cleansing & Quality Reporting Engine',
    description: 'Data cleaning application to process and prepare datasets for analysis.',
    category: 'data',
    tags: ['Python', 'Data Processing', 'Automation', 'Flask', 'pandas'],
    githubUrl: 'https://github.com/maheshraja12/clean',
    featured: true,
    statusBadge: 'Verified Open Source',
    badgeType: 'verified',
    visualType: 'clean-sweep',
    image: '/projects/cleansweep.jpg',
    caseStudy: {
      problem: 'Data scientists and analysts spend up to 80% of project time wrestling with messy CSV files, missing entries, irregular data types, and duplicate rows prior to exploratory modeling.',
      solution: 'Created an intuitive, containerized web tool where users upload messy datasets, select specific cleaning pipelines (mean/mode imputation, IQR trimming, scaling), and immediately receive clean datasets alongside a structured quality report.',
      architecture: [
        'Upload Validation: Strict 16 MB request envelope with file header inspection and dimension capping (100k rows / 100 columns).',
        'Data Processor (pandas & numpy): Matrix cleaning pipeline executing null handling, duplicate deduplication, and outlier filtering.',
        'ML Prep (scikit-learn): Optional feature normalization via StandardScaler or MinMaxScaler.',
        'Reporting Module: Computes pre- and post-cleaning metrics (missing cell delta, dimensions, removed anomaly count).',
        'Containerization: Multi-stage non-root Docker image with Render blueprint and persistent disk storage.'
      ],
      keyFeatures: [
        'Duplicate row detection and selective elimination',
        'Custom null imputation (drop, numeric mean, categorical mode, or forward/backward fill)',
        'Interquartile Range (IQR) outlier trimming and numeric scaling',
        'Detailed dataset quality audit dashboard with before/after comparisons',
        'Guarded download routes and automated CI/CD pipeline via GitHub Actions'
      ],
      challenges: 'Preventing memory spikes and Denial-of-Service when processing wide and large CSV files within lightweight web worker processes.',
      limitations: 'Currently limited to CSV file format; multi-sheet Excel (.xlsx) and JSON streaming are slated for upcoming releases.',
      testingNote: 'Continuous integration configured with pytest test suite verifying upload guards, outlier algorithms, and export routines.'
    }
  },
  {
    id: 'lung-cancer-ai',
    title: 'Lung Cancer Classification',
    tagline: 'Deep Learning Histopathological & CT Image Detection Exploration',
    description: 'CNN-based classification of histopathological images with web interface and report generation.',
    category: 'ai-ml',
    tags: ['TensorFlow', 'Keras', 'Flask', 'Python', 'CNN'],
    featured: true,
    statusBadge: 'Presented at ICCET 2026',
    badgeType: 'research',
    visualType: 'cancer-ai',
    image: '/projects/lungcancer.jpg',
    caseStudy: {
      problem: 'Variability in histopathological staining protocols across medical laboratories can cause deep learning models to overfit to color artifacts rather than cellular morphological abnormalities.',
      solution: 'Investigated a computationally efficient Convolutional Neural Network (CNN) pipeline incorporating stain normalization and color-space invariance to evaluate early-stage neoplastic tissue features.',
      architecture: [
        'Preprocessing Pipeline: Macenko stain normalization and adaptive contrast enhancement.',
        'Deep Learning Core: TensorFlow/Keras CNN architecture optimized for computational efficiency.',
        'Inference Interface: Lightweight Flask prototype allowing image upload and activation map inspection.',
        'Evaluation Framework: Confusion matrices and precision-recall curves across balanced test partitions.'
      ],
      keyFeatures: [
        'Stain-invariant preprocessing isolating tissue morphology from dye variations',
        'Convolutional feature extraction tuned for high sensitivity in early-stage detection',
        'Flask web interface prototype for exploratory model inference',
        'Clear educational documentation of model limitations and diagnostic boundaries'
      ],
      challenges: 'Handling high-resolution tissue images and minimizing false-negative rates without requiring high-end industrial GPU clusters.',
      limitations: 'Educational and academic research prototype only. NOT validated for clinical use or real-world patient diagnosis; must never substitute for professional pathology examination.',
      testingNote: 'Paper presented at ICCET 2026 conference in March 2026.'
    }
  },
  {
    id: 'aegis-v3',
    title: 'AEGIS V3 — Self-Healing Infrastructure',
    tagline: 'Autonomous AI-Assisted Infrastructure Resilience & Patch Verification',
    description: 'An experimental Python engine exploring automated incident repair orchestration, AST bytecode verification, child-process isolation, and telemetry.',
    category: 'automation',
    tags: ['Python 3.10+', 'FastAPI', 'OpenAI GPT-4o', 'Pydantic v2', 'asyncio', 'pytest'],
    githubUrl: 'https://github.com/maheshraja12/aegis-push',
    featured: false,
    statusBadge: 'Research Prototype',
    badgeType: 'experimental',
    visualType: 'aegis',
    image: '/projects/aegis.jpg',
    caseStudy: {
      problem: 'Cloud microservice outages often require manual on-call triage for deterministic bugs or dependency regressions, slowing Mean Time to Recovery (MTTR).',
      solution: 'Engineered an 8-stage automated repair pipeline that ingests failure telemetry, synthesizes candidate patches via LLM prompts or heuristic rules, inspects syntax and runtime behavior in an isolated child process, and enforces safety guards before any deployment.',
      architecture: [
        'Stage 1-2: Incident Ingestion & Heuristic / AI Patch Proposal (using GPT-4o with context-aware stack trace).',
        'Stage 3-4: Static AST Syntax Verification followed by child-process execution check with strict wall-clock timeout.',
        'Stage 5-6: Interval correctness heuristics and simulated multi-agent consensus coordination.',
        'Stage 7-8: Guarded deployment simulation and real-time telemetry streaming via WebSockets to a local HUD.'
      ],
      keyFeatures: [
        '8-stage automated incident diagnosis and remediation pipeline',
        'Simulation mode with deterministic fallbacks when API keys are absent',
        'Python AST parsing and subprocess timeout protection against runaway loops',
        'Memory allocation tracking via Python tracemalloc',
        'FastAPI dashboard with real-time WebSocket state streaming'
      ],
      challenges: 'Safely evaluating untrusted candidate code generated by LLMs without exposing the host operating system to unintended side effects.',
      limitations: 'Demonstration and research prototype only. Subprocess checks do not constitute a hardened WebAssembly or kernel-level sandbox; not intended for unattended production environments.',
      testingNote: 'Extensive test suite covering patch generation failure paths, syntax verification, and pipeline state transitions.'
    }
  },
  {
    id: 'jarvis-swarm',
    title: 'JARVIS Swarm Personal Assistant',
    tagline: 'Local-First Voice Assistant Architecture with FastAPI HUD',
    description: 'A self-contained Python voice assistant featuring long-term SQLite memory, speech input/output integration, modular agent tools, and a local web HUD.',
    category: 'ai-ml',
    tags: ['Python', 'FastAPI', 'AsyncIO', 'SQLite', 'Speech I/O', 'REST APIs', 'pytest'],
    githubUrl: 'https://github.com/maheshraja12/jarvis-swarm',
    featured: false,
    statusBadge: 'Verified Open Source',
    badgeType: 'verified',
    visualType: 'jarvis',
    image: '/projects/jarvis.jpg',
    caseStudy: {
      problem: 'Commercial voice assistants send private ambient conversations to third-party cloud servers, provide rigid toolsets, and lack customizable long-term contextual memory.',
      solution: 'Architected a local-first conversational agent that runs on loopback localhost, maintains persistent conversational memory in a local SQLite store, and provides a web dashboard for tool visualization.',
      architecture: [
        'FastAPI Core: Async REST and WebSocket server binding to loopback by default.',
        'Audio Subsystem: Platform-adapted audio capture and Text-to-Speech drivers.',
        'Memory Store: SQLite persistent memory schema indexing dialogue history and user preferences.',
        'Security Guard: Loopback isolation with X-JARVIS-Token authentication for any remote client requests.'
      ],
      keyFeatures: [
        'Local-first voice interaction loop with minimal latency',
        'Persistent SQLite memory schema for cross-session context recall',
        'FastAPI web HUD for monitoring agent actions and memory inspection',
        'Loopback-restricted API endpoints with strict authentication guards',
        'Cross-platform startup scripts (Windows .bat and Linux .sh)'
      ],
      challenges: 'Balancing real-time speech processing responsiveness with asynchronous API routing on personal developer hardware.',
      limitations: 'External audio drivers (such as PortAudio on Linux) require host system libraries; dynamic custom code execution is disabled by default for host process safety.',
      testingNote: 'Tested on Windows and Linux development environments with automated pytest mocks.'
    }
  },
  {
    id: 'loan-recommendation',
    title: 'Intelligent Loan Recommendation & EMI Engine',
    tagline: 'Financial Decision Support & Tenure Calculation Concept',
    description: 'A financial engineering project concept calculating multi-tier loan eligibility, amortization schedules, and comparative repayment cost optimizations.',
    category: 'data',
    tags: ['Python', 'Financial Modeling', 'Amortization', 'Algorithms', 'Validation'],
    featured: false,
    statusBadge: 'Project Concept',
    badgeType: 'verified',
    visualType: 'loan-system',
    image: '/projects/loan.jpg',
    caseStudy: {
      problem: 'Borrowers often struggle to compare true lifetime borrowing costs across differing interest compounding intervals, tenure options, and pre-payment penalty structures.',
      solution: 'Developed an algorithmic engine that calculates precise EMI breakdowns, generates complete month-by-month amortization schedules, and recommends repayment strategies to minimize net interest outflow.',
      architecture: [
        'Calculation Engine: Pure mathematical modeling of reducing-balance interest formulas and flexible tenure permutations.',
        'Eligibility Scorer: Heuristic rule engine factoring income-to-debt ratios and threshold liquidity margins.',
        'Input Validation: Comprehensive sanitization preventing negative principal or edge-case numerical overflows.',
        'Reporting Layer: Structured tabular summary showing total repayment vs. principal ratio.'
      ],
      keyFeatures: [
        'Month-by-month reducing balance EMI computation',
        'Multi-scenario tenure and interest rate comparisons',
        'Conservative borrowing capacity recommendation heuristics',
        'Clean tabular presentation of amortization trajectories'
      ],
      challenges: 'Accurately modeling floating versus fixed-rate compounding variations across distinct regulatory calculation standards.',
      limitations: 'Academic concept; not integrated with live banking APIs, credit score bureaus, or licensed financial institutions.',
      testingNote: 'Validated against standard financial industry benchmark loan tables.'
    }
  },
  {
    id: 'business-analytics-dash',
    title: 'Forecasting & Business Analytics Modeling',
    tagline: 'Multi-Source KPI Analytics & Statistical Forecasting',
    description: 'A business intelligence project applying SQL queries, Excel Power Query, Pivot Table data models, XLOOKUP, and IBM SPSS to forecast commercial performance trends.',
    category: 'data',
    tags: ['SQL', 'Excel', 'Pivot Tables', 'Power Query', 'XLOOKUP', 'IBM SPSS'],
    featured: false,
    statusBadge: 'Analytical Portfolio',
    badgeType: 'verified',
    visualType: 'analytics-dash',
    image: '/projects/analytics.jpg',
    caseStudy: {
      problem: 'Raw operational logs across retail and services lack automated consolidation, resulting in delayed managerial insight and inaccurate seasonal demand forecasting.',
      solution: 'Built an end-to-end analytical pipeline transforming raw transactional tables into cohesive KPI dashboards utilizing SQL aggregations, Power Query ETL, and SPSS statistical regression models.',
      architecture: [
        'Data Ingestion & SQL ETL: Cleaned transactional tables with multi-table JOINs and window aggregation functions.',
        'Transformation: Excel Power Query pipelines automating date parsing, duplicate filtering, and dimensional modeling.',
        'Statistical Modeling: IBM SPSS correlation analysis and time-series moving averages to capture seasonal trends.',
        'Executive Visualization: Interactive Excel Pivot Dashboards featuring slicers, dynamic KPIs, and scenario models.'
      ],
      keyFeatures: [
        'SQL queries calculating moving averages, cohort retention, and margin contributions',
        'Power Query workflows automating repetitive weekly data imports',
        'Statistical distribution analysis and hypothesis testing via IBM SPSS',
        'Dynamic Excel KPI scorecard powered by XLOOKUP and multi-variable Pivot Tables'
      ],
      challenges: 'Normalizing disparate schema standards and resolving data quality discrepancies before aggregating cross-quarter metrics.',
      limitations: 'Demonstration and analytical models based on representative historical datasets rather than real-time live database connections.',
      testingNote: 'Queries verified for syntax correctness and consistent output reconciliation across SQL and spreadsheet engines.'
    }
  }
];
