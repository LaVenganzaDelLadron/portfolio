import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found">
      <h1 class="text-gradient">404</h1>
      <h2>Access Denied</h2>
      <p>The requested resource was not found on this server.</p>
      <button routerLink="/" class="btn-neon">Return to Base</button>
    </div>
  `,
  styles: [`
    @import 'variables';
    @import 'mixins';
    .not-found {
      height: 100vh;
      @include flex-center;
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    h1 { font-size: 8rem; margin: 0; }
    h2 { font-size: 2rem; color: $color-neon-green; }
    p { color: $text-secondary; margin-bottom: 2rem; }
  `]
})
export class NotFoundComponent {}
