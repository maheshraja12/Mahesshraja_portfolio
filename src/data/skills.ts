export interface SkillItem {
  name: string;
  category: string;
  context: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages used for backend logic, algorithms, scripting, and data analysis.',
    iconName: 'Code2',
    skills: [
      { name: 'Python', category: 'Backend & AI', context: 'FastAPI, Flask, pandas, numpy, asyncio' },
      { name: 'JavaScript (ES6+)', category: 'Full-Stack', context: 'React, Node.js, Express, DOM' },
      { name: 'Java', category: 'Software Eng', context: 'Object-Oriented Programming, Data Structures' },
      { name: 'SQL', category: 'Databases', context: 'Complex Queries, Aggregations, Joins' }
    ]
  },
  {
    category: 'Web Development',
    description: 'Modern frontend and backend frameworks for creating responsive, full-stack web applications.',
    iconName: 'Globe',
    skills: [
      { name: 'React', category: 'Frontend', context: 'Hooks, Component Architecture, Vite' },
      { name: 'Node.js', category: 'Backend', context: 'Server runtimes, REST APIs, asynchronous I/O' },
      { name: 'Express.js', category: 'Backend', context: 'Routing, Middleware, Auth Guards' },
      { name: 'Flask', category: 'Python Web', context: 'REST services, ML model inference endpoints' },
      { name: 'HTML5 & CSS3', category: 'Frontend', context: 'Semantic markup, Flexbox, Grid, Responsive UI' },
      { name: 'REST APIs', category: 'Architecture', context: 'Payload validation, HTTP methods, Status codes' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    description: 'Hands-on practical modeling, neural networks, LLM agent integration, and image processing.',
    iconName: 'Brain',
    skills: [
      { name: 'TensorFlow & Keras', category: 'Deep Learning', context: 'CNN model architectures, training pipelines' },
      { name: 'CNN Image Classification', category: 'Computer Vision', context: 'Histopathological & medical image research' },
      { name: 'LLM & Agent Workflows', category: 'Applied AI', context: 'OpenAI GPT-4o, automated patch generation' },
      { name: 'Data Preprocessing', category: 'Data Science', context: 'scikit-learn, imputation, outlier handling' },
      { name: 'Model Evaluation', category: 'Metrics', context: 'Confusion matrices, precision-recall, loss graphs' }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'Relational data modeling, ACID transactions, and modern cloud backend-as-a-service.',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', category: 'Relational DB', context: 'Production database hosting & query tuning' },
      { name: 'SQLite', category: 'Embedded DB', context: 'DatabaseSync with WAL mode in Node and Python' },
      { name: 'MySQL', category: 'Relational DB', context: 'Schema design, relational indexing' },
      { name: 'Supabase', category: 'Cloud DB', context: 'PostgreSQL cloud instances, JS client integration' }
    ]
  },
  {
    category: 'Data Analytics & BI',
    description: 'Enterprise data manipulation, spreadsheet modeling, and statistical exploration.',
    iconName: 'BarChart3',
    skills: [
      { name: 'Microsoft Excel', category: 'Analytics', context: 'Financial modeling, amortization schedules' },
      { name: 'Pivot Tables & Slicers', category: 'Reporting', context: 'Multi-dimensional data summarization' },
      { name: 'XLOOKUP & Formulas', category: 'Functions', context: 'Complex conditional lookups and indexing' },
      { name: 'Power Query (ETL)', category: 'Data Prep', context: 'Automated data transformation pipelines' },
      { name: 'IBM SPSS', category: 'Statistics', context: 'Hypothesis testing, regression modeling' }
    ]
  },
  {
    category: 'Tools & DevOps',
    description: 'Version control, automated testing, container packaging, and continuous deployment.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', category: 'Version Control', context: 'Branch workflows, pull requests, release tagging' },
      { name: 'Docker', category: 'Containers', context: 'Multi-stage Dockerfiles, non-root user security' },
      { name: 'Vercel', category: 'Deployment', context: 'Frontend edge hosting, serverless functions' },
      { name: 'pytest', category: 'Testing', context: 'Unit testing, API route mocks, fixture assertions' },
      { name: 'GitHub Actions', category: 'CI/CD', context: 'Automated test runners, build verifications' }
    ]
  }
];
