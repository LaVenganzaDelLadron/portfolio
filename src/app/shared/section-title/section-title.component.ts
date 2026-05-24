import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-10 md:mb-12">
      <div class="mb-3 flex flex-wrap items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
        <span class="text-secondary">&gt; SYS</span>
        <span class="h-px flex-1 bg-gradient-to-r from-primary/70 via-transparent to-secondary/70"></span>
        <span>{{ number }}</span>
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
