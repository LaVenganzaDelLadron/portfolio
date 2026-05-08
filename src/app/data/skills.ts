import { SkillCategory } from '../core/models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'fas fa-code',
    skills: ['Java', 'Kotlin', 'Python', 'C++', 'TypeScript', 'JavaScript', 'HTML', 'SCSS/CSS']
  },
  {
    title: 'Frameworks & Technologies',
    icon: 'fas fa-layer-group',
    skills: ['Angular', 'Android Studio', 'Firebase', 'KivyMD', 'Socket Programming', 'Ant (Java Build Tool)']
  },
  {
    title: 'Mobile Development',
    icon: 'fas fa-mobile-alt',
    skills: [
      'Android App Development',
      'Firebase Authentication',
      'Appointment Systems',
      'MVC Architecture',
      'Kotlin Android Development',
      'Java Android Development'
    ]
  },
  {
    title: 'Web Development',
    icon: 'fas fa-globe',
    skills: [
      'Angular Frontend Development',
      'Responsive UI/UX',
      'SCSS Styling',
      'Portfolio Websites',
      'Modern Dashboard UI',
      'Firebase Hosting'
    ]
  },
  {
    title: 'Cybersecurity & Networking',
    icon: 'fas fa-shield-alt',
    skills: [
      'Bug Bounty Hunting',
      'Web Security Testing',
      'API Testing',
      'Reverse Shell Development',
      'TCP Proxies',
      'Port Scanning',
      'Network Monitoring',
      'Remote Access Tools',
      'Security Research'
    ]
  },
  {
    title: 'Security Knowledge',
    icon: 'fas fa-user-secret',
    skills: [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'CSRF',
      'SSRF',
      'XXE',
      'HTTP Request Smuggling',
      'Path Traversal',
      'Access Control Vulnerabilities'
    ]
  },
  {
    title: 'Backend & Database',
    icon: 'fas fa-database',
    skills: [
      'Firebase Realtime Database',
      'Authentication Systems',
      'Client-Server Architecture',
      'Multi-Client Socket Systems'
    ]
  },
  {
    title: 'Development Environment',
    icon: 'fas fa-terminal',
    skills: ['Kali Linux', 'Docker', 'VS Codium', 'Node.js Ecosystem', 'Angular CLI']
  }
];
