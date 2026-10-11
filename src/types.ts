export interface PipelineStage {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  metrics: string;
  iconName: string;
  sampleSnippet?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  impact: string;
  architectureDetails: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    usage: string;
    highlight?: boolean;
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'services' | 'collaboration';
  followUps?: string[];
  keywords: string[];
}
