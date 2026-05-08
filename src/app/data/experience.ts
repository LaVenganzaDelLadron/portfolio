import { Experience } from '../core/models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    company: 'Nexus Security Corp',
    position: 'Senior Security Architect',
    period: '2021 - Present',
    description: [
      'Leading the architecture and implementation of enterprise-grade security solutions.',
      'Developing automated threat response systems using Angular and Node.js.',
      'Performing regular security audits and penetration testing on cloud infrastructure.'
    ],
    technologies: ['Angular', 'AWS', 'Python', 'Go', 'Kubernetes']
  },
  {
    company: 'TechFlow Solutions',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: [
      'Built and maintained complex web applications for fintech clients.',
      'Optimized application performance reducing load times by 40%.',
      'Mentored junior developers and implemented CI/CD pipelines.'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']
  }
];
