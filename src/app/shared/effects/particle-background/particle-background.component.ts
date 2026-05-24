import { Component } from '@angular/core';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  template: `
    <div class="ambient-wrapper" aria-hidden="true">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
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

    .ambient-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      filter: blur(60px); /* Seamlessly blends the colors together */
    }

    .orb {
      position: absolute;
      border-radius: 50%;
      mix-blend-mode: screen;
      animation: float 20s infinite ease-in-out;
    }

    .orb-1 {
      top: 10%;
      left: 15%;
      width: 45vw;
      height: 45vw;
      background: radial-gradient(circle, rgba(0, 217, 255, 0.12) 0%, transparent 70%);
    }

    .orb-2 {
      top: 40%;
      right: 10%;
      width: 50vw;
      height: 50vw;
      background: radial-gradient(circle, rgba(122, 92, 255, 0.12) 0%, transparent 70%);
      animation-delay: -5s;
    }

    .orb-3 {
      bottom: -10%;
      left: 30%;
      width: 40vw;
      height: 40vw;
      background: radial-gradient(circle, rgba(0, 255, 153, 0.08) 0%, transparent 70%);
      animation-delay: -10s;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
  `],
})
export class ParticleBackgroundComponent {}
