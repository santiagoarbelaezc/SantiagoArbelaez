import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="portfolio" class="py-32 px-6 bg-obsidian-950">
      <div class="container mx-auto">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8" appReveal>
          <div>
            <div class="flex items-center gap-4 mb-4">
              <div class="h-px w-12 bg-accent-gold"></div>
              <span class="text-accent-gold text-xs uppercase tracking-[0.4em]">Curation</span>
            </div>
            <h2 class="text-5xl md:text-7xl">Selected Works</h2>
          </div>
          
          <!-- Filters -->
          <div class="flex gap-4 border-b border-white/10 pb-2">
            <button *ngFor="let tab of tabs" 
                    (click)="currentTab = tab"
                    class="text-[10px] uppercase tracking-widest px-4 py-2 transition-all duration-300"
                    [class.text-accent-cyan]="currentTab === tab"
                    [class.opacity-40]="currentTab !== tab">
              {{ tab }}
            </button>
          </div>
        </div>

        <!-- Asymmetric Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div *ngFor="let project of filteredProjects; let i = index" 
               [class]="project.cols"
               class="relative group rounded-3xl overflow-hidden glass border border-white/10 aspect-[4/5] md:aspect-auto"
               appReveal [delay]="i * 100">
            
            <!-- Image -->
            <img [src]="project.image" [alt]="project.title" 
                 class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-obsidian-950/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-between p-10">
              <div class="flex justify-between items-start">
                <span class="text-xs uppercase tracking-widest text-accent-cyan">{{ project.category }}</span>
                <span class="text-white/30 text-xs">{{ project.year }}</span>
              </div>
              
              <div>
                <h3 class="text-4xl mb-4 font-headline uppercase leading-none">{{ project.title }}</h3>
                <p class="text-white/60 mb-8 text-sm leading-relaxed max-w-xs">
                  {{ project.description }}
                </p>
                <button class="flex items-center gap-3 group/btn">
                  <span class="text-xs uppercase tracking-widest font-bold">Ver proyecto</span>
                  <div class="w-8 h-px bg-white group-hover/btn:w-12 transition-all group-hover/btn:bg-accent-cyan"></div>
                </button>
              </div>
            </div>

            <!-- Perspective Warp on Hover (Simulated with transform inside overlay) -->
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Custom Responsive Grid Spans */
    @media (min-width: 1024px) {
      .span-7 { grid-column: span 7 / span 7; height: 600px; }
      .span-5 { grid-column: span 5 / span 5; height: 600px; }
      .span-4 { grid-column: span 4 / span 4; height: 500px; }
      .span-8 { grid-column: span 8 / span 8; height: 500px; }
    }
  `]
})
export class PortfolioComponent {
  currentTab = 'All';
  tabs = ['All', 'Web Apps', 'Branding', 'UI/UX'];

  projects = [
    {
      title: 'Neon Nexus',
      category: 'Web Apps',
      year: '2025',
      image: 'project-1.png',
      description: 'A revolutionary fintech platform focused on ultra-fast transactions and cyberpunk aesthetics.',
      cols: 'span-7'
    },
    {
      title: 'Vogue Editorial',
      category: 'UI/UX',
      year: '2024',
      image: 'project-2.png',
      description: 'High-end fashion gallery with complex grid layouts and cinematic transitions.',
      cols: 'span-5'
    },
    {
      title: 'Luxe Branding',
      category: 'Branding',
      year: '2024',
      image: 'project-1.png', // Reusing for demo
      description: 'Brand identity and design system for a boutique architectural firm.',
      cols: 'span-5'
    },
    {
      title: 'Zenit Shop',
      category: 'E-commerce',
      year: '2025',
      image: 'project-2.png', // Reusing for demo
      description: 'Minimalist e-commerce experience with seamless checkout and micro-interactions.',
      cols: 'span-7'
    }
  ];

  get filteredProjects() {
    if (this.currentTab === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.currentTab);
  }
}
