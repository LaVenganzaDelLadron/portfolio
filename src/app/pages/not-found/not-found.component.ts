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
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {}
