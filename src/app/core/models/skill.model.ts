export interface Skill {
  name: string;
  icon: string;
  level: number | string; // 0 to 100 or "Advanced", etc.
  category: 'frontend' | 'backend' | 'security' | 'tools';
}
