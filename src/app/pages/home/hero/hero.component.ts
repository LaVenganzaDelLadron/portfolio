import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUpAnimation } from '../../../animations/fade.animation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fadeInUpAnimation]
})
export class HeroComponent implements OnInit {
  displayText = '';
  private fullText = 'Cybersecurity Engineer & Full Stack Developer';
  private typingSpeed = 100;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    let i = 0;
    const type = () => {
      if (i < this.fullText.length) {
        this.displayText += this.fullText.charAt(i);
        i++;
        setTimeout(type, this.typingSpeed);
      }
    };
    type();
  }
}
