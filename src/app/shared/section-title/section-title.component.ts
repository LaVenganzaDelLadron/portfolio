import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-14 relative">
      <div class="text-primary text-[0.85rem] tracking-[2px] mb-3 flex items-center gap-2 opacity-80 font-mono">
        <span class="font-extrabold">{{ number }}</span> // SYSTEM_READY
      </div>
      <h2 class="text-[clamp(2rem,5vw,2.75rem)] font-extrabold text-text-primary tracking-tight flex items-baseline gap-1">
        {{ title }}
        <span class="text-primary text-5xl leading-none">.</span>
      </h2>
      <div class="h-1 w-[60px] bg-gradient-to-r from-primary to-transparent mt-4 rounded-full"></div>
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
