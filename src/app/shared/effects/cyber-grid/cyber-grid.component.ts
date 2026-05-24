import { Component } from '@angular/core';

@Component({
  selector: 'app-cyber-grid',
  standalone: true,
  template: `
    <div class="cyber-grid-container" aria-hidden="true">
      <div class="grid-lines"></div>
      <div class="grid-scan"></div>
    </div>
  `,
  styles: [`
    :host {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      display: block;
    }

    .cyber-grid-container {
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0.25;
      /* Smoothly fades the grid at the screen edges for a premium UI feel */
      mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
      -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
    }

    .grid-lines {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(to right, rgba(0, 217, 255, 0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 255, 153, 0.1) 1px, transparent 1px);
      background-size: 48px 48px;
    }

    .grid-scan {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent, rgba(0, 217, 255, 0.08), transparent);
      background-size: 100% 200%;
      animation: scan 6s linear infinite;
    }

    @keyframes scan {
      0% { background-position: 0 -100%; }
      100% { background-position: 0 100%; }
    }
  `],
})
export class CyberGridComponent {}
