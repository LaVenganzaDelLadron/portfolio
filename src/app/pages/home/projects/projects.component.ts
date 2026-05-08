import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { Project } from '../../../core/models/project.model';
import { ProjectCardComponent } from '../../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitleComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private readonly data: PortfolioDataService) {}

  ngOnInit(): void {
    this.projects = this.data.getProjects();
  }
}

