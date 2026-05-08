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
  styles: [`
    @import 'variables';
    .section-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      margin-bottom: 2.5rem;
      white-space: nowrap;
    }
    .number {
      color: $color-neon-green;
      font-family: $font-mono;
      font-size: clamp(1rem, 3vw, 1.5rem);
    }
    .line {
      height: 1px;
      background: $border-color;
      width: 100%;
      max-width: 300px;
    }
  `]
})
export class SectionTitleComponent {
  @Input() number = '';
  @Input() title = '';
}
