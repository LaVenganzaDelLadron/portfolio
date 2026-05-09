import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CodeGo - Swiss Army Knife',
    description: 'CODEGO is a Python-based tool for authorized network testing and remote system management in controlled environments.',
    image: 'assets/images/project/codego.png',
    technologies: ['Python',],
    githubUrl: 'https://github.com/LaVenganzaDelLadron/reverseShell',
    liveUrl: '',
    category: 'Tooling'
  },
  {
    id: 2,
    title: 'HadesEye - Malware Analyzer',
    description: 'HadesEye is a mobile malware analyzer that can scan a domain, website, IP address or files (apk, exe, pdf, etc).',
    image: 'assets/images/project/hades.jpeg',
    technologies: ['Python', 'Kotlin', 'Firebase', 'VirusTotal', 'HybridAnalysis', 'URLScan'],
    githubUrl: 'https://github.com/LaVenganzaDelLadron/HadesEye',
    liveUrl: 'https://hades.security',
    category: 'Tooling'
  }
];
