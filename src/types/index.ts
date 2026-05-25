export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface ProjectMetric {
  value: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  metrics: string[];
  type: string;
  featured: boolean;
  github: string;
  live: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  availableForFreelance: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  cgpa: string;
}

