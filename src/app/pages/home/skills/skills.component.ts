import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../../data/skills';
import { Skill } from '../../../core/models/skill.model';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;

  categories: ('frontend' | 'backend' | 'security' | 'tools')[] = ['frontend', 'backend', 'security', 'tools'];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(s => s.category === category);
  }

  formatCategory(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
}
