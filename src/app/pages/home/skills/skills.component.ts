import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../../../data/skills';
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
  skillCategories: SkillCategory[] = SKILL_CATEGORIES;

  isStringArray(skills: any[]): skills is string[] {
    return typeof skills[0] === 'string';
  }
}
