import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { BugBountyComponent } from './bug-bounty/bug-bounty.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    BugBountyComponent,
    ExperienceComponent,
    CertificationsComponent,
    ContactComponent
  ],
  template: `
    <main>
      <app-hero id="home"></app-hero>
      <app-about id="about"></app-about>
      <app-skills id="skills"></app-skills>
      <app-projects id="projects"></app-projects>
      <app-bug-bounty id="bug-bounty"></app-bug-bounty>
      <app-experience id="experience"></app-experience>
      <app-certifications id="certifications"></app-certifications>
      <app-contact id="contact"></app-contact>
    </main>
  `,
  styles: [`
    main {
      width: 100%;
    }
  `]
})
export class HomeComponent {}
