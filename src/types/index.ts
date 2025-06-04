// Experience types
export interface IExperience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

// Project types
export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

// Skill types
export interface ISkill {
  id: string;
  name: string;
  level: number;
  category: 'dataScience' | 'bi' | 'ml' | 'cloud' | 'tools';
}

// Education types
export interface IDegree {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
}

// Certification types
export interface ICertification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  url?: string;
}

// User types
export interface IUser {
  email: string;
  isAdmin: boolean;
}

// Profile types
export interface IProfile {
  name: string;
  title: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}