import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  template: '<canvas class="matrix" aria-hidden="true"></canvas>',
  styles: [
    `.matrix{position:absolute;inset:0;width:100%;height:100%;opacity:.14;pointer-events:none;filter:drop-shadow(0 0 14px rgba(0,255,153,.35));}`,
  ],
})
export class MatrixRainComponent {}

