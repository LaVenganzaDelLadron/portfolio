import { Component, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Simple starter typing simulation (replace with a more advanced animation later).

@Component({
  selector: 'app-terminal-typing',
  standalone: true,
  templateUrl: './terminal-typing.component.html',
  styleUrl: './terminal-typing.component.scss',
})
export class TerminalTypingComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  private readonly lines = [
    'init --theme cyber-dark',
    'scan --projects:list',
    'handshake --security:ready',
    'status --all systems neon',
  ];

  text = '';
  lineIndex = 0;
  charIndex = 0;

  constructor() {
    interval(55)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const current = this.lines[this.lineIndex];

        this.charIndex++;
        this.text = current.slice(0, this.charIndex);

        if (this.charIndex >= current.length) {
          this.charIndex = 0;
          this.lineIndex = (this.lineIndex + 1) % this.lines.length;
          this.text = '';
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

