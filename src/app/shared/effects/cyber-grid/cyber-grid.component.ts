import { Component } from '@angular/core';

@Component({
  selector: 'app-cyber-grid',
  standalone: true,
  template: '<div class="grid" aria-hidden="true"></div>',
  styles: [
    `.grid{position:absolute;inset:0;pointer-events:none;opacity:.35;
      background:
        linear-gradient(to right, rgba(0,217,255,.12) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,255,153,.10) 1px, transparent 1px);
      background-size: 42px 42px;}
    `,
  ],
})
export class CyberGridComponent {}

