import { Component, ElementRef, AfterViewInit, OnDestroy, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  standalone: true,
  template: `<canvas #matrixCanvas aria-hidden="true"></canvas>`,
  styles: [`
    :host {
      position: absolute;
      inset: 0;
      pointer-events: none;
      display: block;
      overflow: hidden;
    }
    canvas {
      width: 100%;
      height: 100%;
      opacity: 0.12;
      filter: drop-shadow(0 0 8px rgba(0, 255, 153, 0.5));
    }
  `],
})
export class MatrixRainComponent implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;
  private columns = 0;
  private drops: number[] = [];
  private fontSize = 14;
  private chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZコンニチハ';

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

    this.columns = Math.floor(canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);
  }

  private animate = () => {
    // Slight opacity background create the trailing "fade" effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    this.ctx.fillStyle = '#00ff99';
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      this.ctx.fillText(text, x, y);

      if (y > this.canvasRef.nativeElement.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
