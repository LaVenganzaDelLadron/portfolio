import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CodeGo - Swissmiss Army Knife',
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
    description: 'HadesEye is a mobile spyware malware that secretly collects sensitive user and device data in the background and may transmit it to remote servers without the user’s consent.',
    image: 'assets/images/project/hades.jpeg',
    technologies: ['Python', 'Kotlin', 'Firebase', 'VirusTotal', 'HybridAnalysis', 'URLScan'],
    githubUrl: 'https://github.com/LaVenganzaDelLadron/HadesEye',
    liveUrl: 'https://hades.security',
    category: 'Tooling'
  }
];
