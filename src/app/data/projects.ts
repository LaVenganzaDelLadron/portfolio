import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'codego',
    name: 'CodeGo Dashboard',
    type: 'Web App',
    summary: 'Cyber-safe project dashboard UI with neon theming and smooth routing.',
    tech: ['Angular', 'SCSS', 'SSR', 'Routing'],
    image: 'assets/images/project/codego.png',
    repoUrl: 'https://github.com/',
    links: [
      { label: 'Live Demo', url: 'https://example.com' },
      { label: 'Report', url: 'https://example.com/report' },
    ],
  },
  {
    id: 'hades',
    name: 'Hades Security Toolkit',
    type: 'Tooling',
    summary: 'Security automation toolkit layout: scans, summaries, and incident workflows.',
    tech: ['TypeScript', 'Security', 'CLI UX'],
    image: 'assets/images/project/hades.jpeg',
    repoUrl: 'https://github.com/',
    links: [{ label: 'Docs', url: 'https://example.com' }],
  },
];

