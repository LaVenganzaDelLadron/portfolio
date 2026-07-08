import projectOne from '../assets/images/project/codego.png';
import projectTwo from '../assets/images/project/hades.jpeg';
import projectThree from '../assets/images/project/darkglitch.png';
import certificateOne from '../assets/images/certificate/codeliber_python_cert.png';
import certificateTwo from '../assets/images/certificate/aces_cert.png';
import certificateThree from '../assets/images/certificate/data_analysis_cert.png';
import certificateFour from '../assets/images/certificate/python-essentials.png';
import certificateFive from '../assets/images/certificate/introduction-to-cybersecurity.png';
import adAstraImage from '../assets/images/bugbounty/adastra.png';
import jpConnectImage from '../assets/images/bugbounty/jpconnect.png';
import wemisImage from '../assets/images/bugbounty/wemis.png';
import doleImage from '../assets/images/bugbounty/dole.png';
import emisImage from '../assets/images/bugbounty/emis.png';
import hrisImage from '../assets/images/bugbounty/hris.png';
import jobportalImage from '../assets/images/bugbounty/jobportal.png';
import sapaImage from '../assets/images/bugbounty/sapa.png';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Bug Bounty', href: '#bug-bounty' },
  { label: 'Contact', href: '#contact' }
];

export const heroStats = [
  { label: 'Years building', value: '3+' },
  { label: 'Projects shipped', value: '20+' },
  { label: 'Security reports', value: '15+' }
];

export const backgroundItems = [
  {
    title: 'Education',
    date: '2021 — Present',
    description: 'Studying computer science and software engineering with a focus on web systems, cybersecurity, and embedded applications.'
  },
  {
    title: 'Experience',
    date: '2022 — Present',
    description: 'Building full-stack products, automation tools, and security-conscious APIs for personal and freelance work.'
  },
  {
    title: 'Tech Stack',
    date: 'Always evolving',
    description: 'React, TypeScript, Tailwind, FastAPI, Python, Java, Docker, Linux, and SQL are the core of my daily workflow.'
  }
];

export const skills = [
  { category: 'Frontend', items: [{ name: 'React', level: 92 }, { name: 'TypeScript', level: 88 }, { name: 'Tailwind CSS', level: 90 }] },
  { category: 'Backend', items: [{ name: 'Node.js', level: 84 }, { name: 'FastAPI', level: 86 }, { name: 'SQL', level: 80 }] },
  { category: 'Mobile', items: [{ name: 'Flutter', level: 76 }, { name: 'React Native', level: 72 }] },
  { category: 'Languages', items: [{ name: 'Python', level: 90 }, { name: 'Java', level: 82 }, { name: 'C++', level: 78 }] },
  { category: 'Platform', items: [{ name: 'Docker', level: 84 }, { name: 'Linux', level: 90 }, { name: 'Git', level: 92 }] },
  { category: 'Security', items: [{ name: 'Cybersecurity', level: 88 }, { name: 'IoT', level: 74 }] }
];

export const projects = [
  {
    title: 'CodeGo',
    description: 'A type of script of python to understand the command execution through network and the system.',
    image: projectOne,
    tech: ['Python'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Hades Eye',
    description: 'A polished portfolio and content platform designed with a minimal visual language and fast interactions.',
    image: projectTwo,
    tech: ['Python', 'Kotlin', 'Chaquopy'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'darkglitch',
    description: 'A kind of custom personal malware project that can spy on a system, exfiltrate data, and perform remote commands. Built for educational purposes.',
    image: projectThree,
    tech: ['webrtc', 'aiortc', 'Python'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export const certificates = [
  {
    title: 'Python Programming',
    issuer: 'CodeLibrarian',
    image: certificateOne,
    description: 'Completed a structured Python course focused on core programming and practical problem solving.'
  },
  {
    title: 'Advanced Cybersecurity',
    issuer: 'ACES',
    image: certificateTwo,
    description: 'Explored secure systems, network defense basics, and threat analysis workflows.'
  },
  {
    title: 'Data Analysis Essentials',
    issuer: 'Data Academy',
    image: certificateThree,
    description: 'Built a foundation in analysis techniques, reports, and interpreting datasets with clarity.'
  },
  {
    title: 'Python Essentials',
    issuer: 'CodeLibrarian',
    image: certificateFour,
    description: 'Validated core Python skills with practical exercises and script-based problem solving.'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Security Academy',
    image: certificateFive,
    description: 'Demonstrated understanding of threat analysis, secure practices, and system hardening fundamentals.'
  }
];

export const bugBountyReports = [
  {
    platform: 'Ad Astra',
    severity: 'High',
    date: '2024-03',
    description: 'Reported a privilege escalation gap in an internal administration flow and helped harden the access control path.',
    reward: '$600',
    image: adAstraImage
  },
  {
    platform: 'JP Connect',
    severity: 'Medium',
    date: '2024-01',
    description: 'Identified a client-side validation bypass that could overwrite account settings under specific conditions.',
    reward: '$250',
    image: jpConnectImage
  },
  {
    platform: 'Wemis',
    severity: 'Low',
    date: '2023-11',
    description: 'Shared a security improvement suggestion around session handling and endpoint exposure.',
    reward: '$120',
    image: wemisImage
  },
  {
    platform: 'DOLE',
    severity: 'High',
    date: '2024-02',
    description: 'Found an authentication bypass in the user account recovery mechanism that could lead to unauthorized access.',
    reward: '$500',
    image: doleImage
  },
  {
    platform: 'EMIS',
    severity: 'Medium',
    date: '2023-12',
    description: 'Discovered a stored XSS vulnerability in the reporting module that could execute arbitrary scripts.',
    reward: '$350',
    image: emisImage
  },
  {
    platform: 'HRIS',
    severity: 'High',
    date: '2023-10',
    description: 'Identified SQL injection in employee data search functionality that could expose sensitive HR information.',
    reward: '$750',
    image: hrisImage
  },
  {
    platform: 'Job Portal',
    severity: 'Medium',
    date: '2023-09',
    description: 'Found insecure file upload that allowed arbitrary file upload without proper validation.',
    reward: '$300',
    image: jobportalImage
  },
  {
    platform: 'SAPA',
    severity: 'Low',
    date: '2023-08',
    description: 'Reported sensitive data exposure in error messages and API responses.',
    reward: '$200',
    image: sapaImage
  }
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/LaVenganzaDelLadron', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elton-justaga-71373b342/', icon: 'in' },
  { label: 'Email', href: 'mailto:eltonofficial@gmail.com', icon: '@' }
];
