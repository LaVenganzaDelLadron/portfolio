import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Security Audits', value: '15+' },
    { label: 'Open Source', value: '10+' }
  ];
}
