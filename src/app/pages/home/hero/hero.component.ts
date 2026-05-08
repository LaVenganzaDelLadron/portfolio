import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TerminalTypingComponent } from '../../../effects/terminal-typing/terminal-typing.component';
import { MatrixRainComponent } from '../../../effects/matrix-rain/matrix-rain.component';
import { ParticleBackgroundComponent } from '../../../effects/particle-background/particle-background.component';
import { CyberGridComponent } from '../../../effects/cyber-grid/cyber-grid.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, TerminalTypingComponent, MatrixRainComponent, ParticleBackgroundComponent, CyberGridComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}

