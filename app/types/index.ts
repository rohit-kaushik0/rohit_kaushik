export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  imageUrl: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  languages: Skill[];
}

export interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
};

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
};

