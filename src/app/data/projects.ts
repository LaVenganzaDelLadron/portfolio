import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CodeGo - AI Code Review Platform',
    description: 'Intelligent code review and analysis platform powered by machine learning. Integrates with GitHub/GitLab to provide real-time security and quality insights.',
    image: 'assets/images/project/codego.png',
    technologies: ['Angular', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow', 'GitHub API'],
    githubUrl: 'https://github.com/argus/codego',
    liveUrl: 'https://codego.io',
    category: 'web'
  },
  {
    id: 2,
    title: 'Hades - Penetration Testing Suite',
    description: 'Comprehensive penetration testing framework with automated reconnaissance, vulnerability scanning, and exploitation tools for authorized security assessments.',
    image: 'assets/images/project/hades.jpeg',
    technologies: ['Python', 'Go', 'Metasploit', 'Docker', 'Kubernetes', 'PostgreSQL'],
    githubUrl: 'https://github.com/argus/hades',
    liveUrl: 'https://hades.security',
    category: 'security'
  }
];
