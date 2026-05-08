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
      skills: ['Web Security Testing', 'API Testing', 'Access Control', 'Reconnaissance', 'Vulnerability Research']
    },
    {
      title: 'Bug Bounty',
      icon: 'fas fa-bug',
      skills: ['Responsible Disclosure', 'Report Writing', 'Authentication Testing', 'Business Logic', 'OWASP Top 10']
    },
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: ['Node.js', 'Firebase', 'Authentication Systems', 'Client-Server Architecture', 'Secure APIs']
    },
    {
      title: 'Android Development',
      icon: 'fas fa-mobile-alt',
      skills: ['Kotlin', 'Java', 'Android Studio', 'Firebase Auth', 'MVC Architecture']
    }
  ];

  isStringArray(skills: any[]): skills is string[] {
    return typeof skills[0] === 'string';
  }
}
