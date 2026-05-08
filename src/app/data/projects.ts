import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CodeGo - Swissmiss Army Knife',
    description: 'Intelligent code review and analysis platform powered by machine learning. Integrates with GitHub/GitLab to provide real-time security and quality insights.',
    image: 'assets/images/project/codego.png',
    technologies: ['Python',],
    githubUrl: 'https://github.com/argus/codego',
    liveUrl: 'https://codego.io',
    category: 'Tooling'
  },
  {
    id: 2,
    title: 'Hades - Malware Analyzer',
    description: 'Comprehensive penetration testing framework with automated reconnaissance, vulnerability scanning, and exploitation tools for authorized security assessments.',
    image: 'assets/images/project/hades.jpeg',
    technologies: ['Python', 'Kotlin', 'Firebase', 'VirusTotal', 'HybridAnalysis', 'URLScan'],
    githubUrl: 'https://github.com/argus/hades',
    liveUrl: 'https://hades.security',
    category: 'security'
  }
];
