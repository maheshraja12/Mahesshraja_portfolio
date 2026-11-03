import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'sv-realestatehyd',
    title: 'SV Real Estate Hyderabad',
    tagline: 'Full-Stack Property Management & Customer Lead Pipeline',
    description: 'Full-stack commercial real estate web application featuring property catalogs, centralized enquiry routing, and an authenticated administrative CRM portal.',
    category: 'web',
    tags: ['Node.js', 'Express.js', 'EJS', 'SQL', 'SQLite (WAL)', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://sv-realestatehyd.vercel.app/',
    githubUrl: 'https://github.com/maheshraja12/sv-realestatehyd',
    featured: true,
    statusBadge: 'Deployed on Vercel',
    badgeType: 'deployed',
    projectType: 'deployed',
    visualType: 'real-estate',
    image: '/projects/realestate.jpg',
    caseStudy: {
      problem: 'Real estate businesses frequently lose high-intent buyers due to scattered enquiry touchpoints, unstandardized contact channels, and lack of immediate administrative lead tracking.',
      solution: 'Built an integrated real estate web platform with responsive dynamic catalog views, automated modal lead binding, an authenticated admin dashboard, and dual-driver persistence supporting SQLite WAL locally and Supabase PostgreSQL for cloud production.',
      whyBuilt: 'Designed to solve real-world property lead leakages by replacing disjointed contact channels with an end-to-end, unified platform that captures buyer intent directly from property views.',
      myContribution: 'Architected the full-stack system end-to-end: designed dynamic EJS view templates, implemented client-side DOM modal auto-binding, created secure Express REST API routes, and built a dual-driver database adapter supporting local SQLite with Write-Ahead Logging and Supabase PostgreSQL for cloud production.',
      technologiesRationale: [
        { tech: 'Node.js & Express', reason: 'Lightweight, asynchronous event loop ideal for concurrent lead processing and low server overhead.' },
        { tech: 'SQLite (WAL mode)', reason: 'Zero-latency ACID transactions with Write-Ahead Logging for ultra-fast local development and testing.' },
        { tech: 'PostgreSQL / Supabase', reason: 'Robust cloud relational persistence required for production deployment on Vercel serverless functions.' },
        { tech: 'EJS Templates', reason: 'Clean server-side rendering for optimal search crawler indexing and rapid page delivery.' }
      ],
      architectureDiagram: {
        title: 'Lead Ingestion & Administrative Management Pipeline',
        steps: [
          { name: 'Public Portal', description: 'Responsive EJS property catalog with category filters (Plots, Villas, Commercial, Apartments).', tag: 'Frontend' },
          { name: 'Enquiry Interception', description: 'Client-side event interceptor auto-binding all view action buttons to a shared 4-field modal.', tag: 'Client' },
          { name: 'API Routing & Sanitization', description: 'Express router (routes/api/leads.js) with strict payload validation and appointment slot checks.', tag: 'Backend' },
          { name: 'Data Persistence Layer', description: 'node:sqlite DatabaseSync with WAL mode locally; modular Supabase PostgreSQL adapter in production.', tag: 'Database' },
          { name: 'Admin CRM Portal', description: 'Session-guarded middleware (middleware/auth.js) providing lead status transitions and tabular inspection.', tag: 'Admin' }
        ]
      },
      architecture: [
        'Public Portal: Responsive views built with EJS templates and vanilla JavaScript DOM auto-binders.',
        'Enquiry Layer: Client-side event interception routing all site visits and consultation buttons to a shared modal (#publicEnquiryForm).',
        'Backend API: Express router (routes/api/leads.js) with strict payload sanitization and appointment slot validation.',
        'Data Persistence: node:sqlite DatabaseSync with Write-Ahead Logging (WAL) for resilient local transactions, coupled with modular Supabase / PostgreSQL adapter hooks.',
        'Admin Portal: Secure session-guarded route middleware (middleware/auth.js) providing tabular lead filtering and status transitions.'
      ],
      keyFeatures: [
        'Dynamic property catalog with category filters (Plots, Villas, Commercial, Apartments)',
        'Universal enquiry modal auto-binding across all view action buttons',
        'Structured lead capture collecting full name, phone number, slot date/time, and property requirement',
        'Protected administrative dashboard with lead detail inspection and status toggling',
        'Configured for Vercel serverless deployment with modular database drivers'
      ],
      challenges: 'Managing seamless client-side modal state transitions across heterogeneous property pages without code duplication, while ensuring reliable database fallbacks across local SQLite file storage and remote PostgreSQL instances.',
      limitations: 'In production serverless deployment on Vercel, SQLite is ephemeral unless backed by a persistent external database connection such as Supabase PostgreSQL.',
      testingDeployment: 'Verified end-to-end form submission with automated test scripts (test_modal_submission.js) and active production endpoints on Vercel.',
      testingNote: 'Verified end-to-end form submission with automated test scripts (test_modal_submission.js) and active production endpoints on Vercel.',
      lessonsLearned: 'Serverless environments necessitate clean decoupling between business logic and database persistence adapters to accommodate ephemeral disk lifecycles.',
      futureImprovements: [
        'Automated WhatsApp / SMS lead notifications for real-time sales agent dispatch',
        'Multi-agent role-based permissions and property image upload management'
      ]
    }
  },
  {
    id: 'clean-sweep',
    title: 'CleanSweep',
    tagline: 'Automated CSV Dataset Cleansing & Quality Reporting Engine',
    description: 'Containerized Python web application for data scientists to process messy datasets, perform missing-value imputation, detect IQR outliers, and download clean data.',
    category: 'data',
    tags: ['Python', 'Data Processing', 'Automation', 'Flask', 'pandas', 'scikit-learn', 'Docker'],
    githubUrl: 'https://github.com/maheshraja12/clean',
    featured: true,
    statusBadge: 'Verified Open Source',
    badgeType: 'verified',
    projectType: 'prototype',
    visualType: 'clean-sweep',
    image: '/projects/cleansweep.jpg',
    caseStudy: {
      problem: 'Data scientists and analysts spend up to 80% of project time wrestling with messy CSV files, missing entries, irregular data types, and duplicate rows prior to exploratory modeling.',
      solution: 'Developed a containerized web application automating data sanitation through vectorized pandas pipelines, statistical IQR outlier clipping, scikit-learn feature scalers, and before-and-after quality audit reports.',
      whyBuilt: 'Created to automate repetitive data wrangling tasks into an accessible, reproducible web tool where users upload messy datasets and immediately receive standardized data.',
      myContribution: 'Developed the complete Python backend using Flask, implemented vectorized pandas data cleaning routines, integrated scikit-learn feature scalers, built pre/post data audit reporting, and created multi-stage Docker container configs.',
      technologiesRationale: [
        { tech: 'Python & pandas', reason: 'Industry-standard high-performance vectorized operations for fast in-memory table manipulation and statistical analysis.' },
        { tech: 'scikit-learn', reason: 'Reliable, well-tested implementations of StandardScaler and MinMaxScaler preprocessing pipelines.' },
        { tech: 'Flask', reason: 'Lightweight WSGI microframework offering minimal memory footprint for file-upload processing.' },
        { tech: 'Docker', reason: 'Ensures reproducible runtime dependencies across different host environments with non-root security.' }
      ],
      architectureDiagram: {
        title: 'Data Ingestion & Cleaning Transformation Flow',
        steps: [
          { name: 'Upload Validation', description: 'Strict 16 MB request envelope with MIME validation and dimension capping (100k rows / 100 columns).', tag: 'Security' },
          { name: 'Core Cleaning Engine', description: 'Vectorized pandas pipeline executing duplicate removal, type inference, and custom null imputation.', tag: 'pandas' },
          { name: 'Outlier Detection', description: 'Interquartile Range (IQR) calculation identifying statistical anomalies across numeric series.', tag: 'Algorithms' },
          { name: 'Quality Delta Report', description: 'Calculates before-and-after audit metrics (missing cell delta, dimensions, removed outlier count).', tag: 'Reporting' },
          { name: 'Secure Export', description: 'Generates clean, sanitized CSV downloads with automated temporary file cleanup.', tag: 'Storage' }
        ]
      },
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
      testingDeployment: 'Continuous integration configured with pytest test suite verifying upload guards, outlier algorithms, and export routines.',
      testingNote: 'Continuous integration configured with pytest test suite verifying upload guards, outlier algorithms, and export routines.',
      lessonsLearned: 'User-uploaded file processing requires defensive validation at the HTTP boundary before allocating pandas DataFrames in RAM.',
      futureImprovements: [
        'Multi-sheet Excel (.xlsx) parsing support',
        'Chunked streaming processing for datasets exceeding worker memory'
      ]
    }
  },
  {
    id: 'lung-cancer-ai',
    title: 'Lung Cancer Classification',
    tagline: 'Deep Learning Histopathological Image Detection Exploration',
    description: 'Convolutional neural network exploration investigating stain-invariant preprocessing and lightweight CNN topologies for histopathological tissue evaluation.',
    category: 'ai-ml',
    tags: ['TensorFlow', 'Keras', 'Flask', 'Python', 'CNN', 'Medical AI'],
    featured: true,
    statusBadge: 'Presented at ICCET 2026',
    badgeType: 'research',
    projectType: 'research',
    visualType: 'cancer-ai',
    image: '/projects/lungcancer.jpg',
    caseStudy: {
      problem: 'Variability in histopathological chemical staining protocols across medical laboratories causes deep learning models to overfit to color artifacts rather than cellular morphological abnormalities.',
      solution: 'Implemented a lightweight deep learning architecture using depthwise separable convolutions, stain-invariant color normalization, and a sandboxed Flask web inference interface for rapid, explainable patch classification.',
      whyBuilt: 'Conducted as an academic research study to explore whether stain-normalization preprocessing combined with parameter-efficient CNN architectures could reduce false positives caused by laboratory dye inconsistencies.',
      myContribution: 'Investigated optical density color deconvolution algorithms, designed a streamlined CNN convolutional layer architecture tuned for high sensitivity, built an exploratory Flask inference prototype, and prepared benchmark evaluation metrics.',
      technologiesRationale: [
        { tech: 'TensorFlow & Keras', reason: 'Flexible tensor modeling and convolutional layer abstractions for medical image analysis.' },
        { tech: 'Python & OpenCV', reason: 'Efficient pixel-level color space transformations, matrix operations, and stain deconvolution.' },
        { tech: 'Flask', reason: 'Minimal prototype web interface enabling patch image upload and activation map inspection.' }
      ],
      architectureDiagram: {
        title: 'Stain-Invariant Histopathological Evaluation Pipeline',
        steps: [
          { name: 'Tissue Patch Ingestion', description: 'Reads high-resolution histological tissue sections partitioned into balanced benign and malignant patches.', tag: 'Input' },
          { name: 'Stain Invariance Normalization', description: 'Optical density matrix transformation standardizing Hematoxylin and Eosin (H&E) color shifts.', tag: 'OpenCV' },
          { name: 'Feature Extraction Core', description: 'Streamlined CNN topology isolating nuclear atypia, chromatin patterns, and cellular morphology.', tag: 'TensorFlow' },
          { name: 'Diagnostic Classification', description: 'Dense classification head computing probability distributions and activation maps.', tag: 'Keras' },
          { name: 'Benchmark Evaluation', description: 'Comprehensive confusion matrix, precision-recall, and ROC-AUC validation.', tag: 'Validation' }
        ]
      },
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
      testingDeployment: 'Research paper presented at the 14th International Conference on Contemporary Engineering and Technology (ICCET 2026) in March 2026.',
      testingNote: 'Paper presented at ICCET 2026 conference in March 2026.',
      lessonsLearned: 'Standardizing color variations in medical images prior to neural network training significantly mitigates model bias toward specific laboratory preparation protocols.',
      futureImprovements: [
        'Explore Vision Transformer (ViT) architectures for global contextual tissue analysis',
        'Integrate Grad-CAM visual explainability overlays directly in the web UI'
      ]
    }
  },
  {
    id: 'aegis-v3',
    title: 'AEGIS V3 — Self-Healing Infrastructure',
    tagline: 'Autonomous AI-Assisted Infrastructure Resilience & Patch Verification',
    description: 'Experimental Python engine exploring automated incident repair orchestration, AST bytecode verification, child-process isolation, and telemetry.',
    category: 'automation',
    tags: ['Python 3.10+', 'FastAPI', 'OpenAI GPT-4o', 'Pydantic v2', 'asyncio', 'pytest'],
    githubUrl: 'https://github.com/maheshraja12/aegis-push',
    featured: false,
    statusBadge: 'Research Prototype',
    badgeType: 'experimental',
    projectType: 'experimental',
    visualType: 'aegis',
    image: '/projects/aegis.jpg',
    caseStudy: {
      problem: 'Cloud microservice outages often require manual on-call triage for deterministic bugs or dependency regressions, slowing Mean Time to Recovery (MTTR).',
      solution: 'Engineered an autonomous system reliability daemon utilizing Python AST bytecode verification, isolated subshell execution, and automatic rollback routines to prevent broken configuration drift.',
      whyBuilt: 'Explored an autonomous orchestration prototype capable of ingesting error stack traces, synthesizing candidate code fixes, and verifying safety constraints before proposing deployments.',
      myContribution: 'Architected the 8-stage repair pipeline in Python 3.10+ async, implemented AST bytecode analysis to reject syntax-invalid candidates, built child-process execution timeout isolation, created deterministic simulation fallbacks, and developed a real-time FastAPI WebSocket HUD.',
      technologiesRationale: [
        { tech: 'Python 3.10+ & asyncio', reason: 'Native asynchronous event loop supporting high-concurrency telemetry streaming and non-blocking sub-tasks.' },
        { tech: 'Python AST Module', reason: 'Static bytecode parsing enabling strict syntax verification before untrusted candidate code touches an interpreter.' },
        { tech: 'FastAPI & Pydantic v2', reason: 'High-speed REST and WebSocket communication with strict JSON schema validation.' },
        { tech: 'Subprocess Isolation', reason: 'Enforces process-level sandboxing with strict wall-clock timeout guards against infinite loops.' }
      ],
      architectureDiagram: {
        title: '8-Stage Automated Resilience & Verification Pipeline',
        steps: [
          { name: 'Stage 1-2: Ingestion & Synthesis', description: 'Ingests failure telemetry stack traces and queries heuristic rules or LLM prompt for candidate patch.', tag: 'AI/Rules' },
          { name: 'Stage 3-4: AST & Sandbox Execution', description: 'Static AST syntax verification followed by child-process execution check with strict timeout.', tag: 'Security' },
          { name: 'Stage 5-6: Correctness & Consensus', description: 'Interval correctness heuristics and simulated multi-agent consensus coordination.', tag: 'Validation' },
          { name: 'Stage 7-8: Guarded Deployment & HUD', description: 'Simulated rollout with live telemetry broadcast via WebSockets to developer dashboard.', tag: 'Telemetry' }
        ]
      },
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
      testingDeployment: 'Extensive pytest test suite covering patch generation failure paths, syntax verification, and pipeline state transitions.',
      testingNote: 'Extensive test suite covering patch generation failure paths, syntax verification, and pipeline state transitions.',
      lessonsLearned: 'Autonomous systems must enforce deterministic safety invariants: static syntax analysis and execution timeouts are mandatory before running generated code.',
      futureImprovements: [
        'Wasm (WebAssembly) based isolated sandbox runtime',
        'Kubernetes pod automated restart and rollback controller hooks'
      ]
    }
  },
  {
    id: 'jarvis-swarm',
    title: 'JARVIS Swarm Personal Assistant',
    tagline: 'Local-First Voice Assistant Architecture with FastAPI HUD',
    description: 'Self-contained Python voice assistant featuring long-term SQLite memory, speech input/output integration, modular agent tools, and a local web HUD.',
    category: 'ai-ml',
    tags: ['Python', 'FastAPI', 'AsyncIO', 'SQLite', 'Speech I/O', 'REST APIs', 'pytest'],
    githubUrl: 'https://github.com/maheshraja12/jarvis-swarm',
    featured: false,
    statusBadge: 'Verified Open Source',
    badgeType: 'verified',
    projectType: 'prototype',
    visualType: 'jarvis',
    image: '/projects/jarvis.jpg',
    caseStudy: {
      problem: 'Commercial voice assistants transmit private ambient conversations to third-party cloud servers, provide rigid toolsets, and lack customizable long-term contextual memory.',
      solution: 'Constructed an offline-capable conversational desktop assistant featuring threaded speech-to-text input, persistent SQLite dialogue logging, and a real-time FastAPI local telemetry dashboard.',
      whyBuilt: 'Architected a local-first conversational system that keeps dialogue history private on localhost, supports persistent memory across sessions, and provides an observable developer HUD.',
      myContribution: 'Built the async FastAPI core server with loopback security tokens, structured SQLite persistent memory indexing, integrated speech capture and text-to-speech drivers, and authored startup automation scripts for Windows and Linux.',
      technologiesRationale: [
        { tech: 'Python & FastAPI', reason: 'High-throughput async request handling and automatic OpenAPI documentation for tool endpoints.' },
        { tech: 'SQLite', reason: 'Embedded relational database requiring zero external server setup, perfect for local-first desktop apps.' },
        { tech: 'Loopback Security Guards', reason: 'Strict loopback interface binding (`127.0.0.1`) with token verification prevents unauthorized network access.' }
      ],
      architectureDiagram: {
        title: 'Local-First Voice Assistant & Context Loop',
        steps: [
          { name: 'Voice Capture', description: 'Platform-adapted microphone audio ingestion with silence threshold detection.', tag: 'Audio' },
          { name: 'Context Retrieval', description: 'SQLite memory schema indexing dialogue history, cross-session user preferences, and facts.', tag: 'SQLite' },
          { name: 'Tool Dispatcher', description: 'Modular tool router executing local system commands, web search, or calculation utilities.', tag: 'FastAPI' },
          { name: 'Voice Synthesis & HUD', description: 'Text-to-speech driver generating audio feedback while pushing live state to web HUD.', tag: 'Output' }
        ]
      },
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
      testingDeployment: 'Tested on Windows and Linux development environments with automated pytest mocks. Repository available on GitHub.',
      testingNote: 'Tested on Windows and Linux development environments with automated pytest mocks.',
      lessonsLearned: 'Maintaining a clean separation between CPU-bound audio rendering and the asynchronous network loop is vital for responsive voice interaction.',
      futureImprovements: [
        'Local quantized SLM integration (Llama 3 / Mistral) via Ollama',
        'Multi-modal desktop vision inspection tool'
      ]
    }
  },
  {
    id: 'fsindhu-app',
    title: 'FSindhu App',
    tagline: 'Custom Personalized Interactive Web Experience',
    description: 'A personalized interactive web application built with React, Vite, and Tailwind CSS featuring smooth visual animations and celebratory micro-interactions.',
    category: 'web',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Canvas Confetti', 'Web Design'],
    liveUrl: 'https://fsindhu-app.vercel.app/',
    featured: true,
    statusBadge: 'Live Deployment',
    badgeType: 'deployed',
    projectType: 'deployed',
    visualType: 'fsindhu',
    image: '/projects/fsindhu.jpg',
    caseStudy: {
      problem: 'Standard digital greetings feel impersonal and static; building a bespoke, responsive web application offers a memorable and interactive experience.',
      solution: 'Architected a responsive single-page web application featuring modular UI component trees, client-side state hydration, and an optimized Vite production bundle deployed on Vercel.',
      whyBuilt: 'Crafted as a custom personalized milestone gift application showcasing responsive layout craftsmanship, keyframe animations, and client-side micro-interactions.',
      myContribution: 'Designed and implemented the React component hierarchy, custom CSS animation timelines, confetti celebration particle emitters, and responsive viewports for mobile and desktop.',
      technologiesRationale: [
        { tech: 'React & Vite', reason: 'Blazing-fast build pipeline with instant Hot Module Replacement and minimal production bundle size.' },
        { tech: 'Tailwind CSS', reason: 'High-performance utility styling with zero runtime CSS-in-JS overhead.' },
        { tech: 'Canvas Confetti', reason: 'Lightweight HTML5 canvas particle rendering maintaining 60fps on mobile browsers.' }
      ],
      architectureDiagram: {
        title: 'Interactive Client-Side Architecture',
        steps: [
          { name: 'Vite Single-Page Root', description: 'Optimized production bundle delivered via global edge CDN.', tag: 'Vite' },
          { name: 'Interactive Story Chapters', description: 'State-driven narrative layout walking visitors through bespoke greetings.', tag: 'React' },
          { name: 'Animation Timers', description: 'Coordinated CSS keyframes and confetti triggers delivering celebratory micro-interactions.', tag: 'CSS' },
          { name: 'Responsive Viewports', description: 'Fluid layout optimized for touch interaction across iOS and Android mobile screens.', tag: 'UI/UX' }
        ]
      },
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
      testingDeployment: 'Cross-browser testing across Chrome, Safari, and mobile viewports on iOS and Android. Active on Vercel at https://fsindhu-app.vercel.app/.',
      testingNote: 'Verified across modern Chrome, Safari, and mobile browsers on iOS and Android.',
      lessonsLearned: 'Micro-interactions deliver the greatest user delight when paired with strict performance budgets and GPU-accelerated CSS properties.',
      futureImprovements: [
        'Dynamic interactive photo gallery carousel',
        'Custom audio player controls with ambient background audio'
      ]
    }
  }
];
