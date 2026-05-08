export interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'security' | 'web' | 'cloud' | 'CTF' | 'Security Research' | 'Tooling';
}
