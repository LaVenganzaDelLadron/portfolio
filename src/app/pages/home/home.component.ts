import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { BugBountyComponent } from './bug-bounty/bug-bounty.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    BugBountyComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
