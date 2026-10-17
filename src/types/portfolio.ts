export type ProjectCategory = 'all' | 'web' | 'ai-ml' | 'data' | 'automation';

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  challenges: string;
  limitations: string;
  testingNote?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'web' | 'ai-ml' | 'data' | 'automation';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  statusBadge: string;
  badgeType: 'verified' | 'deployed' | 'experimental' | 'research';
  caseStudy: ProjectCaseStudy;
  visualType: 'real-estate' | 'clean-sweep' | 'aegis' | 'jarvis' | 'fsindhu' | 'cancer-ai' | 'loan-system' | 'analytics-dash';
  image?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    verifiedIn?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'internship' | 'education';
  grade?: string;
  description: string;
  highlights: string[];
}

export interface ResearchPaper {
  title: string;
  conference: string;
  date: string;
  scope: string;
  overview: string;
  motivation: string;
  methodology: string[];
  disclaimer: string;
}
