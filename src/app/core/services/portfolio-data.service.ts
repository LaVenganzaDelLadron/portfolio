import { Injectable } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { SKILL_CATEGORIES } from '../../data/skills';
import { CERTIFICATES } from '../../data/certificates';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  getProjects(): Project[] {
    return PROJECTS;
  }

  getProjectById(id: number | string): Project | undefined {
    return PROJECTS.find((p) => p.id.toString() === id.toString());
  }

  getSkills(): SkillCategory[] {
    return SKILL_CATEGORIES;
  }

  getCertificates(): Certificate[] {
    return CERTIFICATES;
  }
}
