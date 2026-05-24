import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsPageComponent {
  projectId: string | null;

  constructor(private readonly route: ActivatedRoute) {
    this.projectId = this.route.snapshot.paramMap.get('id');
  }
}
