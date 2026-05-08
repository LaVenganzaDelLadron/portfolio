import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SentinX: Network Intrusion System',
    description: 'A professional-grade real-time network monitoring and threat detection system using machine learning.',
    image: 'assets/images/projects/project1.jpg',
    technologies: ['Python', 'Angular', 'Go', 'TensorFlow', 'PostgreSQL'],
    githubUrl: 'https://github.com/argus/sentinx',
    liveUrl: 'https://sentinx.demo',
    category: 'security'
  },
  {
    id: 2,
    title: 'CloudArmor Firewall',
    description: 'Next-generation cloud native firewall with automated rule generation and WAF capabilities.',
    image: 'assets/images/projects/project2.jpg',
    technologies: ['Angular', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/argus/cloudarmor',
    liveUrl: 'https://cloudarmor.io',
    category: 'cloud'
  },
  {
    id: 3,
    title: 'ZeroTrust Auth Engine',
    description: 'Implementation of Zero Trust Architecture using identity-based access control and micro-segmentation.',
    image: 'assets/images/projects/project3.jpg',
    technologies: ['TypeScript', 'NestJS', 'Redis', 'WebAuthn', 'OAuth2'],
    githubUrl: 'https://github.com/argus/zerotrust',
    liveUrl: 'https://zerotrust.auth',
    category: 'security'
  }
];
