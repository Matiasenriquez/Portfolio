export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';

export type GoogleColor = 'blue' | 'red' | 'yellow' | 'green';

export type ProjectStatus = 'completed' | 'upcoming';

export interface ProjectCaseStudy {
  problem: string;
  architectureOverview: string;
  frontendDetails: string;
  backendDetails: string;
  databaseDetails: string;
  securityHighlights: string;
  challenges: string[];
  solutions: string[];
  keyFeatures: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  shortDescription: string;
  technologies: string[];
  accentColor: GoogleColor;
  featured: boolean;
  demoUrl?: string;
  repoUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  caseStudy: ProjectCaseStudy;
}

export interface SkillItem {
  name: string;
  level: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  color: GoogleColor;
  iconName: 'layout' | 'server' | 'database' | 'shield';
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  color: GoogleColor;
  iconName: 'code' | 'cpu' | 'shieldCheck' | 'database';
}

export interface TrajectoryItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: 'product' | 'education' | 'certification';
  badgeText: string;
  color: GoogleColor;
  description: string;
  highlights: string[];
  tags: string[];
}
