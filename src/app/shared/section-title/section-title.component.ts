import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="section-title">
      <span class="number">{{ number }}.</span>
      <span class="text-gradient">{{ title }}</span>
      <div class="line"></div>
    </h2>
  `,
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() number = '';
  @Input() title = '';
}
