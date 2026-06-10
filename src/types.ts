export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  vaTransferableSkills: string[];
  achievements: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'email' | 'data' | 'calendar' | 'admin' | 'all';
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  previewType: 'sheet' | 'inbox' | 'calendar' | 'report';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}
