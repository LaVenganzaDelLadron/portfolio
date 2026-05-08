import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="container flex min-h-[70vh] items-center justify-center pt-32 pb-20">
      <div class="max-w-xl rounded-[20px] border border-white/5 bg-surface/50 p-8 text-center backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] md:p-12">
        <p class="mb-3 font-mono text-sm uppercase tracking-[2px] text-primary">ACCESS_DENIED</p>
        <h1 class="text-gradient mb-4 text-[clamp(4rem,16vw,8rem)] font-extrabold leading-none">404</h1>
        <h2 class="mb-4 text-2xl font-bold text-text-primary">Resource Not Found</h2>
        <p class="mb-8 text-text-secondary">The requested resource was not found on this server.</p>
        <button routerLink="/" class="btn-primary">Return to Base</button>
      </div>
    </section>
  `
})
export class NotFoundComponent {}
