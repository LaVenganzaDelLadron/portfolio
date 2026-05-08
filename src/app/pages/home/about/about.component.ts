import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  roles = [
    'Cyber Security Enthusiast',
    'Security Researcher',
    'Bug Bounty Hunter',
    'Backend Developer',
    'Android Developer'
  ];

  highlights = [
    'Bug bounty research experience',
    'Web security testing',
    'Backend development skills',
    'Android development experience',
    'Focus on secure system design'
  ];
}
