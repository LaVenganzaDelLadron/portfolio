export interface Skill {
  name: string;
  icon?: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: string[] | Skill[];
  icon?: string;
}
