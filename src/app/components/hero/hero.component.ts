import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, MagneticDirective],
    template: `
    <section id="hero" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      <div class="container mx-auto px-6 pt-20 pb-28 md:pt-32 md:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <!-- Text Content -->
        <div class="order-2 lg:order-1">
          <div class="overflow-hidden mb-4">
            <h2 class="text-accent-cyan font-sans text-sm tracking-[0.3em] uppercase opacity-0 animate-fade-up" style="animation-delay: 0.8s;">
              {{ data?.title || 'Digital Visionary & Developer' }}
            </h2>
          </div>

          <h1 class="text-5xl sm:text-7xl md:text-9xl font-headline leading-none mb-6 md:mb-8" style="letter-spacing: -0.04em;">
            <span class="block overflow-hidden">
              <span class="block animate-fade-up text-black" style="animation-delay: 1.0s;">{{ data?.subtitle || 'SANTIAGO' }}</span>
            </span>
          </h1>
          
          <p class="text-lg md:text-xl text-black/60 max-w-md animate-fade-up mb-8" style="animation-delay: 1.4s;">
            {{ data?.description }}
          </p>

          <div class="flex gap-4 mt-8 md:mt-12 opacity-0 animate-fade-up" style="animation-delay: 1.8s;">
            <a (click)="scrollTo('#portfolio', $event)" class="cursor-pointer px-8 py-4 rounded-full border border-black/25 text-black hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 flex items-center justify-center no-underline" appMagnetic [appMagnetic]="0.2">
              {{ data?.ctaText || 'View Portfolio' }}
            </a>
          </div>
        </div>

        <!-- Photo -->
        <div class="order-1 lg:order-2 flex justify-center" style="perspective: 1000px;">
          <div
            class="relative w-[240px] h-[320px] sm:w-[300px] sm:h-[400px] md:w-[450px] md:h-[600px] transition-transform duration-200 ease-out"
            [style.transform]="parallaxTransform"
            (mousemove)="onImageMove($event)"
            (mouseleave)="onImageLeave()">

            <div class="absolute -inset-4 rounded-3xl -z-10" style="background: rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.08);"></div>

            <div class="w-full h-full rounded-2xl overflow-hidden border shadow-xl group" style="border-color: rgba(0,0,0,0.10);">
              <img
                [src]="data?.backgroundImage || 'hero-portrait.png'"
                alt="Santiago"
                class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

          </div>
        </div>
      </div>

      <div class="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2" style="opacity: 0.35;">
        <span class="text-[10px] uppercase tracking-[0.3em] text-black">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-black to-transparent"></div>
      </div>
    </section>
  `,
    styles: [`
    .animate-bounce-slow {
      animation: bounce-slow 4s infinite ease-in-out;
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0) rotate(-5deg); }
      50% { transform: translateY(-12px) rotate(-2deg); }
    }
  `]
})
export class HeroComponent {
  @Input() data: any;
  parallaxTransform = '';

  onImageMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -16;
    const rotateY = (x - 0.5) * 16;
    this.parallaxTransform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  onImageLeave() {
    this.parallaxTransform = 'rotateX(0deg) rotateY(0deg)';
  }

  scrollTo(link: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(link.replace('#', ''));
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
