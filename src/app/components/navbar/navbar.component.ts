import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { ScrollColorService } from '../../services/scroll-color.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MagneticDirective],
  template: `
    <nav class="fixed top-0 left-0 w-full z-[9000] px-6 py-5 transition-all duration-500">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500"
           [style.background]="isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'"
           [style.border]="isDark ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(0,0,0,0.10)'"
           style="backdrop-filter: blur(16px);">

        <!-- Logo -->
        <div class="flex items-center gap-2 group cursor-pointer" appMagnetic [appMagnetic]="0.2">
          <svg width="36" height="36" viewBox="0 0 40 40">
            <path d="M10 30V10H20C25 10 25 15 20 15H10"
                  [attr.stroke]="isDark ? 'var(--accent-cyan)' : '#000000'"
                  stroke-width="2" fill="none" />
            <path d="M25 30V10"
                  [attr.stroke]="isDark ? 'var(--accent-gold)' : '#000000'"
                  stroke-width="2" fill="none" />
          </svg>
          <span class="font-headline text-xl tracking-tighter hidden md:block transition-colors duration-500"
                [style.color]="isDark ? '#ffffff' : '#000000'">SANTIAGO.</span>
        </div>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let item of navItems"
             [href]="item.link"
             class="nav-link text-sm font-medium tracking-widest uppercase transition-colors duration-500 hover:text-accent-cyan"
             [style.color]="isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.65)'"
             appMagnetic [appMagnetic]="0.3">
            {{ item.name }}
          </a>
        </div>

        <!-- CTA Button -->
        <button class="flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-500 hover:border-accent-cyan"
                [style.border]="isDark ? '1px solid rgba(255,255,255,0.20)' : '1px solid rgba(0,0,0,0.20)'"
                [style.color]="isDark ? '#ffffff' : '#000000'"
                appMagnetic [appMagnetic]="0.1">
          <span class="text-xs font-bold tracking-widest uppercase">Contact</span>
          <div class="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></div>
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
export class NavbarComponent implements OnInit, OnDestroy {
  isDark = false;
  private sub?: Subscription;

  navItems = [
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#portfolio' },
    { name: 'About',    link: '#about' },
    { name: 'Tech',     link: '#skills' }
  ];

  constructor(private scrollColorService: ScrollColorService) {}

  ngOnInit() {
    this.sub = this.scrollColorService.isDark$.subscribe(dark => {
      this.isDark = dark;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
