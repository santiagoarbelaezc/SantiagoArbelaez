import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="skills" class="py-20 bg-obsidian-950 border-y border-white/5 overflow-hidden">
      <!-- Marquee Wrapper -->
      <div class="relative flex overflow-hidden">
        <div class="flex animate-marquee whitespace-nowrap gap-12 py-10">
          <div *ngFor="let tech of techStack.concat(techStack)" 
               class="flex items-center gap-4 px-8 py-4 glass-card group cursor-default hover:border-accent-gold/40">
            <div class="w-10 h-10 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
              <svg *ngIf="tech.icon === 'code'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <svg *ngIf="tech.icon === 'figma'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
              <svg *ngIf="tech.icon === 'layers'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <svg *ngIf="tech.icon === 'zap'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <span class="font-headline text-3xl uppercase tracking-tighter">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Secondary Marquee (Reverse) -->
      <div class="relative flex overflow-hidden mt-4">
        <div class="flex animate-marquee-reverse whitespace-nowrap gap-12 py-10">
          <div *ngFor="let skill of softSkills.concat(softSkills)" 
               class="flex items-center gap-4 px-8 py-4 glass rounded-full group cursor-default hover:bg-accent-cyan/10 transition-colors">
            <span class="text-xs uppercase tracking-[0.4em] text-white/40 group-hover:text-accent-cyan transition-colors">{{ skill }}</span>
            <div class="w-1.5 h-1.5 rounded-full bg-accent-gold"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    .animate-marquee-reverse {
      animation: marquee 30s linear infinite reverse;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `]
})
export class SkillsComponent {
  techStack = [
    { name: 'Angular 18', icon: 'code' },
    { name: 'TypeScript', icon: 'zap' },
    { name: 'Tailwind CSS', icon: 'layers' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Next.js', icon: 'code' },
    { name: 'PostgreSQL', icon: 'layers' },
    { name: 'Node.js', icon: 'zap' },
    { name: 'Three.js', icon: 'code' }
  ];

  softSkills = [
    'Creative Direction', 'Brand Strategy', 'Product Design', 'User Experience', 
    'Agile Leadership', 'System Architecture', 'Visual Design', 'Motion Graphics'
  ];
}
