import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { Skill } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private readonly data: PortfolioDataService) {}

  ngOnInit(): void {
    this.skills = this.data.getSkills();
  }
}

