import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS, Project } from '../../../data/projects';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
