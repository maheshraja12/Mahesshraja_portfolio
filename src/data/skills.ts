import { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    description: 'Core languages used for backend logic, algorithms, scripting, and system engineering.',
    iconName: 'Code2',
    skills: [
      { name: 'Python', category: 'Backend & AI', context: 'FastAPI, Flask, pandas, numpy, asyncio, pytest', usedInProjects: ['CleanSweep', 'AEGIS V3', 'JARVIS Swarm', 'Lung Cancer AI'] },
      { name: 'Java', category: 'Software Eng', context: 'Object-Oriented Programming, Data Structures, Algorithms', usedInProjects: ['Core CS Lab Projects', 'System Engineering'] },
      { name: 'JavaScript', category: 'Full-Stack', context: 'Modern ES6+, DOM manipulation, asynchronous programming', usedInProjects: ['SV Real Estate', 'FSindhu App', 'Portfolio'] },
      { name: 'SQL', category: 'Databases', context: 'Complex queries, schema design, table joins, aggregations', usedInProjects: ['SV Real Estate', 'JARVIS Swarm', 'CleanSweep'] }
    ]
  },
  {
    category: 'Frontend',
    description: 'Modern component libraries and styling frameworks for responsive user interfaces.',
    iconName: 'Globe',
    skills: [
      { name: 'React', category: 'UI Framework', context: 'Functional components, hooks, state orchestration, Vite', usedInProjects: ['FSindhu App', 'Engineering Portfolio'] },
      { name: 'HTML & Semantic Web', category: 'Markup', context: 'Semantic HTML5 structure, accessible ARIA roles, SEO', usedInProjects: ['SV Real Estate (EJS)', 'FSindhu App', 'Portfolio'] },
      { name: 'CSS & Tailwind CSS', category: 'Styling', context: 'Responsive design tokens, dark/light themes, keyframes', usedInProjects: ['FSindhu App', 'Portfolio', 'Web Apps'] },
      { name: 'JavaScript (Client)', category: 'Interactivity', context: 'Client event auto-binding, modal lifecycle management', usedInProjects: ['SV Real Estate Modal', 'FSindhu App'] }
    ]
  },
  {
    category: 'Backend',
    description: 'Server architectures, microservices, and asynchronous API frameworks.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', category: 'Runtime', context: 'Asynchronous event-driven backend runtimes and file I/O', usedInProjects: ['SV Real Estate Hyderabad'] },
      { name: 'Express.js', category: 'Web Framework', context: 'REST routers, authentication guards, session middleware', usedInProjects: ['SV Real Estate Hyderabad'] },
      { name: 'Flask', category: 'Python Web', context: 'Lightweight WSGI endpoints, dataset upload controllers', usedInProjects: ['CleanSweep', 'Lung Cancer AI Inference'] },
      { name: 'FastAPI', category: 'Async Python', context: 'High-speed async endpoints, WebSocket streams, Pydantic', usedInProjects: ['AEGIS V3', 'JARVIS Swarm HUD'] }
    ]
  },
  {
    category: 'AI / ML',
    description: 'Hands-on neural networks, image classification research, and LLM integrations.',
    iconName: 'Brain',
    skills: [
      { name: 'TensorFlow', category: 'Deep Learning', context: 'Tensor graph calculations, model compilation and training', usedInProjects: ['Lung Cancer Classification'] },
      { name: 'Keras', category: 'Neural Networks', context: 'Sequential & functional CNN layer architectures', usedInProjects: ['Lung Cancer Classification'] },
      { name: 'CNN (Computer Vision)', category: 'Vision Models', context: 'Histopathological patch analysis, stain invariance', usedInProjects: ['Lung Cancer Classification (ICCET 2026)'] },
      { name: 'OpenAI Integrations', category: 'Applied AI', context: 'Prompt engineering, structured JSON output, triage', usedInProjects: ['AEGIS V3 Resilience Engine'] }
    ]
  },
  {
    category: 'Databases',
    description: 'Relational data modeling, transactions, and cloud database persistence.',
    iconName: 'Database',
    skills: [
      { name: 'SQL Relational Modeling', category: 'Data Modeling', context: 'Foreign keys, ACID constraints, indexed queries', usedInProjects: ['SV Real Estate', 'JARVIS Swarm'] },
      { name: 'SQLite', category: 'Embedded DB', context: 'node:sqlite DatabaseSync with Write-Ahead Logging (WAL)', usedInProjects: ['SV Real Estate (Local)', 'JARVIS Swarm (Memory)'] },
      { name: 'Supabase (PostgreSQL)', category: 'Cloud Postgres', context: 'Remote relational storage, serverless connection adapters', usedInProjects: ['SV Real Estate (Production)'] }
    ]
  },
  {
    category: 'Tools & Infrastructure',
    description: 'Version control, automated pipelines, containerization, and edge deployment.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git', category: 'Version Control', context: 'Branching strategies, atomic commits, conflict resolution', usedInProjects: ['All Repositories'] },
      { name: 'GitHub', category: 'Collaboration', context: 'Issue tracking, pull requests, releases, public profile', usedInProjects: ['GitHub @maheshraja12'] },
      { name: 'Docker', category: 'Containers', context: 'Multi-stage Docker builds, container isolation, non-root users', usedInProjects: ['CleanSweep Containerization'] },
      { name: 'Vercel', category: 'Edge Deployment', context: 'Serverless functions, edge rewrites, automated CI/CD builds', usedInProjects: ['SV Real Estate', 'FSindhu', 'Portfolio'] }
    ]
  }
];
