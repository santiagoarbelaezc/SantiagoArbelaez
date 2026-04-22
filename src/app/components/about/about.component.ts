import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="about" class="py-32 px-6 bg-obsidian-900 overflow-hidden">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <!-- Image with Clip-path -->
          <div class="relative" appReveal>
            <div class="aspect-[4/5] overflow-hidden rounded-3xl" style="clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);">
              <img src="about-portrait.png" alt="Creative Profile" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -top-10 -right-10 w-40 h-40 border border-accent-gold/20 rounded-full animate-spin-slow"></div>
            <div class="absolute -bottom-6 left-1/4 glass px-6 py-3 rounded-full flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-accent-cyan animate-ping"></div>
              <span class="text-[10px] uppercase tracking-widest">Open for collaboration</span>
            </div>
          </div>

          <!-- Bio Content -->
          <div class="space-y-8">
            <div appReveal>
              <div class="flex items-center gap-4 mb-4">
                <div class="h-px w-12 bg-accent-cyan"></div>
                <span class="text-accent-cyan text-xs uppercase tracking-[0.4em]">Philosophy</span>
              </div>
              <h2 class="text-5xl md:text-7xl mb-8">Designing the Future, <br/><span class="font-editorial italic font-normal text-accent-gold">One Pixel at a Time.</span></h2>
            </div>
            
            <p class="text-xl text-white/70 leading-relaxed font-editorial italic" appReveal [delay]="200">
              "Para mí, el diseño no es solo cómo se ve, sino cómo funciona y cómo hace sentir a las personas. Busco el equilibrio perfecto entre la elegancia editorial y la potencia tecnológica."
            </p>

            <div class="space-y-6 text-white/50 leading-relaxed" appReveal [delay]="400">
              <p>
                As a multi-disciplinary creator based in the digital space, I blend clean frontend architecture with high-end aesthetic vision. My work is defined by a commitment to perfection and a obsession with micro-interactions.
              </p>
              <p>
                From premium e-commerce experiences to complex SaaS dashboards, my goal is always the same: to create digital products that are unforgettable.
              </p>
            </div>

            <!-- Stats/Skills pills -->
            <div class="flex flex-wrap gap-3 pt-8" appReveal [delay]="600">
              <div *ngFor="let skill of highlightSkills" class="glass px-5 py-2 rounded-full border border-white/5 hover:border-accent-cyan/30 transition-colors cursor-default">
                <span class="text-xs uppercase tracking-widest">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-spin-slow { animation: spin 15s linear infinite; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  `]
})
export class AboutComponent {
  highlightSkills = ['Creative Direction', 'Senior Frontend', 'UI/UX Design', 'Visual Storytelling'];
}
