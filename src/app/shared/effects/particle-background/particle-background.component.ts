import { Component } from '@angular/core';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  template: '<div class="particles" aria-hidden="true"></div>',
  styles: [
    `.particles{position:absolute;inset:-40px;background:
      radial-gradient(circle at 20% 30%, rgba(0,217,255,.15), transparent 50%),
      radial-gradient(circle at 70% 10%, rgba(122,92,255,.16), transparent 55%),
      radial-gradient(circle at 60% 70%, rgba(0,255,153,.12), transparent 60%);
      opacity:.9;pointer-events:none;}`,
  ],
})
export class ParticleBackgroundComponent {}

