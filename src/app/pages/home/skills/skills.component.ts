import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../../core/models/skill.model';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

import { staggerFadeInAnimation } from '../../../animations/fade.animation';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './skills.component.html',
  animations: [staggerFadeInAnimation]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Cybersecurity',
      icon: 'fas fa-shield-alt',
      skills: ['Web Security Testing', 'API Security Testing', 'Access Control Testing', 'Reconnaissance', 'Vulnerability Researcher', 'Bug Bounty Hunter', 'Responsible Disclosure']
    },
    {
      title: 'Bug Bounty',
      icon: 'fas fa-bug',
      skills: ['Responsible Disclosure', 'Bug Bounty Reporting', 'Authentication Testing', 'Business Logic', 'Vulnerability Research', 'Recon & Endpoint Discovery', 'Authentication & Session Testing', 'Access Control Exploitation']
    },
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: ['Python', 'Php', 'C++', 'C#', 'Kotlin', 'Java', 'Laravel', 'Django', 'MySQL', 'PostgreSQL', 'MVC Architecture', 'RESTful API Development' , 'Android Development']
    }
  ];

  isStringArray(skills: any[]): skills is string[] {
    return typeof skills[0] === 'string';
  }
}
