import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-10 md:mb-12">
      <div class="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[2px] text-primary/80">
        <span>{{ number }}</span>
        <span class="h-px w-8 bg-primary/30"></span>
      </div>
      <h2 class="max-w-3xl text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight text-text-primary">
        {{ title }}
      </h2>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class SectionTitleComponent {
  @Input() number = '';
  @Input() title = '';
}
