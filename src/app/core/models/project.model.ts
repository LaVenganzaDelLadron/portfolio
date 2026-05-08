export interface Project {
  id: string;
  name: string;
  type: 'CTF' | 'Web App' | 'Security Research' | 'Tooling';
  summary: string;
  tech: string[];
  image: string;
  repoUrl: string;
  links: { label: string; url: string }[];
}

