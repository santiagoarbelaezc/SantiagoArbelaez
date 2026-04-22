import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-dot" [ngStyle]="dotStyle"></div>
    <div class="cursor-outline" [ngStyle]="outlineStyle"></div>
  `,
  styles: [`
    .cursor-dot {
      position: fixed;
      width: 8px;
      height: 8px;
      background-color: var(--accent-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transition: transform 0.1s ease-out;
      transform: translate(-50%, -50%);
    }

    .cursor-outline {
      position: fixed;
      width: 40px;
      height: 40px;
      border: 1px solid var(--accent-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.3s ease-out;
      transform: translate(-50%, -50%);
      opacity: 0.5;
    }
  `]
})
export class CursorComponent implements OnInit {
  dotStyle = { left: '0px', top: '0px' };
  outlineStyle = { left: '0px', top: '0px' };

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.dotStyle = {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    };

    // Outline follows with a slight lag
    setTimeout(() => {
      this.outlineStyle = {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      };
    }, 50);
  }

  @HostListener('window:mousedown')
  onMouseDown() {
    this.outlineStyle = { ...this.outlineStyle, transform: 'translate(-50%, -50%) scale(1.5)' } as any;
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.outlineStyle = { ...this.outlineStyle, transform: 'translate(-50%, -50%) scale(1)' } as any;
  }

  ngOnInit() {}
}
