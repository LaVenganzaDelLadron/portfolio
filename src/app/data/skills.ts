import { Skill } from '../core/models/skill.model';

export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'angular', level: 95, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 90, category: 'frontend' },
  { name: 'Node.js', icon: 'nodejs', level: 85, category: 'backend' },
  { name: 'Python', icon: 'python', level: 80, category: 'backend' },
  { name: 'Ethical Hacking', icon: 'security', level: 75, category: 'security' },
  { name: 'Penetration Testing', icon: 'shield', level: 70, category: 'security' },
  { name: 'Docker', icon: 'docker', level: 85, category: 'tools' },
  { name: 'Kubernetes', icon: 'kubernetes', level: 75, category: 'tools' },
  { name: 'AWS', icon: 'aws', level: 80, category: 'tools' }
];
