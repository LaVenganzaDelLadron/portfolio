import { Injectable } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { SKILLS } from '../../data/skills';
import { CERTIFICATES } from '../../data/certificates';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  getProjects(): Project[] {
    return PROJECTS;
  }

  getProjectById(id: string): Project | undefined {
    return PROJECTS.find((p) => p.id === id);
  }

  getSkills(): Skill[] {
    return SKILLS;
  }

  getCertificates(): Certificate[] {
    return CERTIFICATES;
  }
}

