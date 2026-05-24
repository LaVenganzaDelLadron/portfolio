import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeInUpAnimation } from '../../../animations/fade.animation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  animations: [fadeInUpAnimation]
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  private readonly identityTexts = [
    'I am a Cyber Security Enthusiast',
    'I am a Security Researcher',
    'I am a Bug Bounty Hunter',
    'I am a Backend Developer',
    'I am an Android Developer'
  ];

  private phraseIndex = 0;
  private characterIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit() {
    this.animateIdentityText();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private animateIdentityText() {
    const current = this.identityTexts[this.phraseIndex];

    if (!this.isDeleting) {
      this.displayText = current.substring(0, this.characterIndex + 1);
      this.characterIndex++;

      if (this.characterIndex === current.length) {
        this.isDeleting = true;

        this.timeoutId = setTimeout(() => {
          this.animateIdentityText();
        }, 1800);

        return;
      }
    } else {
      this.displayText = current.substring(0, this.characterIndex - 1);
      this.characterIndex--;

      if (this.characterIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex =
          (this.phraseIndex + 1) % this.identityTexts.length;
      }
    }

    this.timeoutId = setTimeout(
      () => this.animateIdentityText(),
      this.isDeleting ? 40 : 85
    );
  }
}
