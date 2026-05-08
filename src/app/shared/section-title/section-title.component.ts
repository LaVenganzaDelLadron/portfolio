import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-title-container">
      <div class="eyebrow mono"><span class="number">{{ number }}</span> // SYSTEM_READY</div>
      <h2 class="title">
        {{ title }}
        <span class="dot">.</span>
      </h2>
      <div class="title-line"></div>
    </div>
  `,
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() number = '';
  @Input() title = '';
}
