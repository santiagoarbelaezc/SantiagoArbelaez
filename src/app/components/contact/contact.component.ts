import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective, MagneticDirective],
  template: `
    <section id="contact" class="py-32 px-6">
      <div class="container mx-auto">
        <div class="max-w-5xl mx-auto glass-card p-12 md:p-20 relative overflow-hidden border border-white/10" appReveal>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <!-- Left Side: Text -->
            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="h-px w-12 bg-accent-gold"></div>
                <span class="text-accent-gold text-xs uppercase tracking-[0.4em]">Connect</span>
              </div>
              <h2 class="text-5xl md:text-7xl mb-12">Let's build <br/><span class="text-accent-cyan">something great.</span></h2>
              
              <div class="space-y-8">
                <div>
                  <span class="text-[10px] uppercase tracking-widest text-white/30 block mb-2">Email me</span>
                  <a href="mailto:hola@santiago.dev" class="text-2xl hover:text-accent-cyan transition-colors">hola&#64;santiago.dev</a>
                </div>
                
                <div class="flex gap-6 pt-8">
                  <a *ngFor="let social of socials" [href]="social.link" 
                     class="w-12 h-12 rounded-full glass flex items-center justify-center group hover:border-accent-cyan/50 transition-all"
                     appMagnetic [appMagnetic]="0.2">
                    <span class="text-xs font-bold group-hover:text-accent-cyan transition-colors">{{ social.name }}</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Right Side: Form -->
            <form class="space-y-10">
              <div class="relative group">
                <input type="text" placeholder=" " class="peer w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent-cyan transition-colors placeholder-transparent" />
                <label class="absolute left-0 top-4 text-white/30 uppercase tracking-widest text-xs pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Name</label>
              </div>

              <div class="relative group">
                <input type="email" placeholder=" " class="peer w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent-cyan transition-colors placeholder-transparent" />
                <label class="absolute left-0 top-4 text-white/30 uppercase tracking-widest text-xs pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Email</label>
              </div>

              <div class="relative group">
                <textarea rows="4" placeholder=" " class="peer w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent-cyan transition-colors placeholder-transparent resize-none"></textarea>
                <label class="absolute left-0 top-4 text-white/30 uppercase tracking-widest text-xs pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Message</label>
              </div>

              <button class="btn-primary w-full group" appMagnetic [appMagnetic]="0.1">
                <span class="uppercase tracking-[0.3em] font-bold text-xs">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  socials = [
    { name: 'LI', link: '#' },
    { name: 'TW', link: '#' },
    { name: 'GH', link: '#' },
    { name: 'IG', link: '#' }
  ];
}
