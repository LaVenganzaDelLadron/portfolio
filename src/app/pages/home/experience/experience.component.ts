import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../../data/experience';
import { Experience } from '../../../core/models/experience.model';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
