import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  // Avoid template interpolation placeholders; plain string inputs.
  title = input.required<string>();
  subtitle = input<string>('');
}


