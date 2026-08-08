import projectOne from '../assets/images/project/codego.png';
import projectTwo from '../assets/images/project/hades.jpeg';
import projectThree from '../assets/images/project/darkglitch.png';
import projectFour from '../assets/images/project/glitch-assistant.png';
import projectFive from '../assets/images/project/glitch-recon.png';
import certificateOne from '../assets/images/certificate/codeliber_python_cert.png';
import certificateTwo from '../assets/images/certificate/aces_cert.png';
import certificateThree from '../assets/images/certificate/data_analysis_cert.png';
import certificateFour from '../assets/images/certificate/python-essentials.png';
import certificateFive from '../assets/images/certificate/introduction-to-cybersecurity.png';
import certificateSix from '../assets/images/certificate/palo_alto.png';
import certificateSeven from '../assets/images/certificate/certificate-731.jpg';
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
  { label: 'Years of Experience', value: '4+' },
  { label: 'Projects', value: '20+' },
  { label: 'Security reports', value: '8+' }
];

export const backgroundItems = [
  {
    title: 'Education',
    date: '2026 — Present',
    description: 'Studying Information and Technology and focusing on cyber security.'
  },
  {
    title: 'Experience',
    date: '2022 — Present',
    description: 'Building full stack products, automation tools, and enhance my cyber security skills.'
  },
  {
    title: 'Tech Stack',
    date: 'Always evolving',
    description: 'FastAPI, Python, Java, C\C++, Lua, Linux, and SQL are the core of my daily workflow.'
  }
];

export const skills = [
  { category: 'Languages', items: [{ name: 'Python' }, { name: 'Java' }, { name: 'C\C++' }, { name: 'Lua' }] },
  { category: 'Cyber Security', items: [{ name: 'Security Researcher' }, { name: 'Bugbounty Hunter' }, { name: 'Penetration Tester' }, { name: 'Ethical Hacker' }] },
  { category: 'Frameworks', items: [{ name: 'FastAPI' }, { name: 'Django' }, { name: 'Flask' }] },
  { category: 'Platform', items: [{ name: 'Linux' }] },
];

export const projects = [
  {
    title: 'CodeGo',
    description: 'A Python-based networking project designed to demonstrate remote command execution concepts, client-server communication, and system interaction in controlled environments.',
    image: projectOne,
    tech: ['Python'],
    github: 'https://github.com/LaVenganzaDelLadron/reverseShell.git',
    demo: 'https://example.com'
  },
  {
    title: 'Hades Eye',
    description: 'An Android security application that analyzes files and URLs for potential threats by integrating malware intelligence services such as VirusTotal and Hybrid Analysis.',
    image: projectTwo,
    tech: ['Python', 'Kotlin', 'Chaquopy', 'VirusTotal API', 'Hybrid Analysis'],
    github: 'https://github.com/LaVenganzaDelLadron/HadesEye.git',
    demo: 'https://example.com'
  },
  {
    title: 'darkglitch',
    description: 'A proof-of-concept remote administration and security research tool built with WebRTC, enabling secure remote communication, command execution, file transfer, and system management for authorized testing environments.',
    image: projectThree,
    tech: ['WebRTC', 'aiortc', 'Python'],
    github: 'https://github.com/LaVenganzaDelLadron/darkglitch.git',
    demo: 'https://example.com'
  },
  {
    title: 'glitch assistant',
    description: "An extensible, AI-powered command-line and web assistant for software engineering and cybersecurity. Built on Groq's LLM API with a modular pipeline architecture, intent routing, tool-calling capabilities, and token-aware context management.",
    image: projectFour,
    tech: ['Python', 'AI Pipeline'],
    github: 'https://github.com/LaVenganzaDelLadron/glitch-assistant.git',
    demo: 'https://example.com'
  },
  {
    title: 'GlitchRecon',
    description: "Evidence-driven web security scanner — automated scanners collect raw evidence, then AI explains, prioritises, and recommends fixes.\n" +
        "\n" +
        "GlitchRecon runs a battery of passive and active security checks (XSS, SQLi, CSRF, SSRF, IDOR, security headers, cookie analysis, TLS fingerprinting, and more) against a target web application. Every finding is backed by scanner-captured evidence. An LLM (Groq or Ollama) is used only to generate human-readable summaries, risk scoring, and remediation guidance — it never hallucinates findings.",
    image: projectFive,
    tech: ['Python', 'AI Pipeline'],
    github: 'https://github.com/LaVenganzaDelLadron/GlitchRecon.git',
    demo: 'https://example.com'
  },
];

export const certificates = [
  {
    title: 'Python Programming',
    issuer: 'CodeLiber',
    image: certificateOne,
    description: 'Completed a structured Python course focused on core programming and practical problem solving.'
  },
  {
    title: 'Programmer of the Year',
    issuer: 'Aces Tagum College Inc.',
    image: certificateTwo,
    description: 'I got a certification of Programmer of the Year of my College University.'
  },
  {
    title: 'Data Analysis Essentials',
    issuer: 'Cisco Networking Academy',
    image: certificateThree,
    description: 'Built a foundation in analysis techniques, reports, and interpreting datasets with clarity.'
  },
  {
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    image: certificateFour,
    description: 'Validated core Python skills with practical exercises and script-based problem solving.'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    image: certificateFive,
    description: 'Demonstrated understanding of threat analysis, secure practices, and system hardening fundamentals.'
  },
  {
    title: 'Security Operations Fundamentals',
    issuer: 'Palo Alto Networks',
    image: certificateSix,
    description: 'Demonstrated understanding of security operations, incident response, and threat management principles in a cybersecurity context.'
  },
  {
    title: 'Linux Course',
    issuer: 'Technology Channel PVT. LTD.',
    image: certificateSeven,
    description: 'Conducted a Linux Course to understand the basic commands of the operating system.'
  },
];

export const bugBountyReports = [
  {
    platform: 'Ad Astra',
    severity: 'Medium',
    description: 'Identified an authorization weakness within an administrative workflow that could allow access to student records beyond intended permission levels. Reported the issue through responsible disclosure, enabling corrective access-control improvements.',
    reward: '$600',
    image: adAstraImage
  },
  {
    platform: 'JP Connect',
    severity: 'Medium',
    description: 'Discovered improper access controls affecting academic and administrative information, including student disciplinary records and scheduling data. Provided remediation recommendations to strengthen data protection measures.',
    reward: '$250',
    image: jpConnectImage
  },
  {
    platform: 'Wemis',
    severity: 'Critical',
    description: 'Reported multiple security concerns related to session management and API security that could impact the confidentiality and integrity of user information. Collaborated through responsible disclosure to support remediation efforts.',
    reward: '$120',
    image: wemisImage
  },
  {
    platform: 'DOLE Job Fair',
    severity: 'High',
    description: 'Identified information disclosure issues within authentication-related processes that exposed internal application details through error responses. Submitted findings and recommendations to reduce potential attack surface and improve secure error handling.',
    reward: '$500',
    image: doleImage
  },
  {
    platform: 'EMIS',
    severity: 'High',
    description: 'Discovered API security weaknesses that could expose sensitive user information to unauthorized parties. Reported the findings and provided recommendations to enhance access controls and data protection.',
    reward: '$350',
    image: emisImage
  },
  {
    platform: 'HRIS',
    severity: 'High',
    description: 'Identified unauthorized access risks affecting employee-related API endpoints. Responsible disclosure helped strengthen security controls protecting personnel and operational data.',
    reward: '$750',
    image: hrisImage
  },
  {
    platform: 'Job Portal',
    severity: 'Critical',
    description: 'Conducted security testing that revealed multiple vulnerabilities affecting authentication, authorization, and API security. Submitted a comprehensive report with risk assessments and remediation guidance.',
    reward: '$300',
    image: jobportalImage
  },
  {
    platform: 'SAPA',
    severity: 'Critical',
    description: 'Reported security weaknesses involving session management and API access controls that could impact account security. Provided recommendations to improve authentication resilience and system security posture.',
    reward: '$200',
    image: sapaImage
  }
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/LaVenganzaDelLadron', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elton-justaga-71373b342/', icon: 'in' },
  { label: 'Email', href: 'mailto:eltonofficial@gmail.com', icon: '@' },
  { label: 'phone', text: '+639972977654', icon: 'phone' }
];
