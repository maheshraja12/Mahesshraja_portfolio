export type ProjectCategory = 'all' | 'web' | 'ai-ml' | 'data' | 'automation';

export interface ArchitectureStep {
  name: string;
  description: string;
  tag?: string;
}

export interface TechRationale {
  tech: string;
  reason: string;
}

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  whyBuilt?: string;
  myContribution?: string;
  architecture: string[];
  architectureDiagram?: {
    title: string;
    steps: ArchitectureStep[];
  };
  technologiesRationale?: TechRationale[];
  keyFeatures: string[];
  challenges: string;
  limitations: string;
  testingNote?: string;
  testingDeployment?: string;
  lessonsLearned?: string;
  futureImprovements?: string[];
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
  projectType: 'deployed' | 'prototype' | 'experimental' | 'research';
  caseStudy: ProjectCaseStudy;
  visualType: 'real-estate' | 'clean-sweep' | 'aegis' | 'jarvis' | 'fsindhu' | 'cancer-ai' | 'loan-system' | 'analytics-dash';
  image?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  context: string;
  usedInProjects?: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
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
