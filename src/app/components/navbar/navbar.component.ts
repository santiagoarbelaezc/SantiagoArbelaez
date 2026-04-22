import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MagneticDirective],
  template: `
    <nav class="fixed top-0 left-0 w-full z-[9000] px-6 py-6 transition-all duration-500" [class.py-4]="scrolled">
      <div class="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full border border-white/10 shadow-2xl">
        <!-- Logo (Initials) -->
        <div class="flex items-center gap-2 group cursor-pointer" appMagnetic [appMagnetic]="0.2">
          <svg width="40" height="40" viewBox="0 0 40 40" class="group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)] transition-all">
            <path d="M10 30V10H20C25 10 25 15 20 15H10" stroke="var(--accent-cyan)" stroke-width="2" fill="none" class="animate-draw-svg" />
            <path d="M25 30V10" stroke="var(--accent-gold)" stroke-width="2" fill="none" class="animate-draw-svg" style="animation-delay: 0.5s;" />
          </svg>
          <span class="font-headline text-2xl tracking-tighter hidden md:block">SANTIAGO.</span>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let item of navItems" [href]="item.link" 
             class="nav-link text-sm font-medium tracking-widest uppercase hover:text-accent-cyan transition-colors"
             appMagnetic [appMagnetic]="0.3">
            {{ item.name }}
          </a>
        </div>

        <!-- CTA Button -->
        <button class="btn-primary flex items-center gap-2 group" appMagnetic [appMagnetic]="0.1">
          <span class="text-sm font-bold tracking-widest uppercase">Contact</span>
          <div class="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></div>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      position: relative;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--accent-cyan);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after {
      width: 100%;
    }
  `]
})
export class NavbarComponent {
  scrolled = false;
  navItems = [
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#portfolio' },
    { name: 'About', link: '#about' },
    { name: 'Tech', link: '#skills' }
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 50;
      });
    }
  }
}
