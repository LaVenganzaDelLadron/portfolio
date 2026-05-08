import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUpAnimation } from '../../../animations/fade.animation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
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
    const currentText = this.identityTexts[this.phraseIndex];
    const nextCharacterIndex = this.isDeleting
      ? this.characterIndex - 1
      : this.characterIndex + 1;

    this.characterIndex = nextCharacterIndex;
    this.displayText = currentText.slice(0, this.characterIndex);

    let delay = this.isDeleting ? 52 : 88;

    if (!this.isDeleting && this.displayText === currentText) {
      delay = 1650;
      this.isDeleting = true;
    }

    if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.identityTexts.length;
      delay = 280;
    }

    this.timeoutId = setTimeout(() => this.animateIdentityText(), delay);
  }
}
