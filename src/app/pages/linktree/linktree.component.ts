import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MagneticDirective } from '../../shared/directives/magnetic.directive';

declare var AOS: any;

@Component({
  selector: 'app-linktree',
  standalone: true,
  imports: [CommonModule, RouterModule, MagneticDirective],
  template: `
    <div class="lt-wrapper">
      <div class="lt-container">
        
        <!-- HEADER / PROFILE -->
        <header class="lt-header" data-aos="fade-down" data-aos-duration="1200">
           <div class="lt-header-content">
             <div class="lt-main-photo" appMagnetic [appMagnetic]="0.2">
                <img src="about-portrait.png" alt="Santiago Arbelaez" class="rounded-3xl shadow-2xl" />
                <div class="lt-photo-decoration" style="border-color: #8B5E3C;"></div>
             </div>
             <div class="lt-header-info">
               <h1 class="font-headline text-6xl md:text-8xl text-black leading-none">SANTIAGO<br/><span style="color: #8B5E3C;">ARBELAEZ</span></h1>
               <p class="text-sm uppercase tracking-[0.3em] text-black/40 mt-4">Full Stack Developer & Digital Architect</p>
             </div>
           </div>
        </header>

        <!-- GRID ARCHITECTURE -->
        <main class="lt-grid">
          
          <!-- LEFT COLUMN: Secondary Photos & Bio -->
          <div class="lt-col-1">
            <div class="lt-bio-box" data-aos="fade-right" data-aos-delay="200">
              <p class="text-base md:text-lg font-light leading-relaxed text-black/70">
                Diseñando el futuro a través de interfaces elegantes y sistemas robustos. El equilibrio perfecto entre estética y funcionalidad.
              </p>
            </div>
            
            <div class="lt-dual-photos">
              <div class="lt-small-photo rounded-3xl" data-aos="zoom-in" data-aos-delay="400">
                <img src="hero-portrait.png" alt="Work" />
                <div class="lt-photo-label rounded-lg">DEV</div>
              </div>
              <div class="lt-small-photo rounded-3xl coffee-bg" data-aos="zoom-in" data-aos-delay="600">
                <img src="about-portrait.png" alt="Design" />
                <div class="lt-photo-label rounded-lg">UIX</div>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Links -->
          <div class="lt-col-2">
            <div class="lt-links-container">
              
              <a routerLink="/portfolio" class="lt-card-link black-card rounded-2xl" data-aos="fade-left" data-aos-delay="300" appMagnetic [appMagnetic]="0.1">
                <span class="lt-card-tag rounded-bl-xl">MAIN</span>
                <div class="lt-card-body">
                  <h3 class="text-3xl font-bold">PORTFOLIO</h3>
                  <p class="text-[12px] text-white/40 tracking-[0.2em] uppercase">Full Brand Experience</p>
                </div>
                <div class="lt-card-btn text-3xl">→</div>
              </a>


              <a href="https://www.instagram.com/santiagoarbelaezc/" target="_blank" class="lt-card-link white-card rounded-2xl" data-aos="fade-left" data-aos-delay="400" appMagnetic [appMagnetic]="0.1">
                <div class="lt-card-body">
                  <h3 class="text-2xl font-bold">INSTAGRAM</h3>
                  <p class="text-[11px] text-black/30 tracking-[0.2em] uppercase">&#64;santiagoarbelaezc</p>
                </div>
                <div class="lt-card-btn coffee-text text-3xl">↗</div>
              </a>

              <a href="https://www.tiktok.com/@santiagoarbelaezc" target="_blank" class="lt-card-link white-card rounded-2xl" data-aos="fade-left" data-aos-delay="500" appMagnetic [appMagnetic]="0.1">
                <div class="lt-card-body">
                  <h3 class="text-2xl font-bold">TIKTOK</h3>
                  <p class="text-[11px] text-black/30 tracking-[0.2em] uppercase">Content Creator</p>
                </div>
                <div class="lt-card-btn coffee-text text-3xl">↗</div>
              </a>

              <a href="https://wa.me/573000000000" target="_blank" class="lt-card-link coffee-card rounded-2xl" data-aos="fade-left" data-aos-delay="600" appMagnetic [appMagnetic]="0.1">
                <div class="lt-card-body">
                  <h3 class="text-2xl font-bold text-white">WHATSAPP</h3>
                  <p class="text-[11px] text-white/40 tracking-[0.2em] uppercase">Direct Inquiry</p>
                </div>
                <div class="lt-card-btn text-white text-3xl">↗</div>
              </a>

              <div class="lt-social-footer" data-aos="fade-up" data-aos-delay="800">
                 <a href="https://www.linkedin.com/in/santiago-arbelaez-contreras-9830b5290/" target="_blank" class="lt-social-mini">LINKEDIN</a>
                 <div class="lt-mini-line"></div>
                 <span class="text-[9px] text-black/20">EST. 2025</span>
              </div>

            </div>
          </div>

        </main>

        <footer class="lt-footer-simple" data-aos="fade-in" data-aos-delay="1000">
           <div class="lt-footer-line"></div>
           <p>© {{ currentYear }} SANTIAGO ARBELAEZ. ALL RIGHTS RESERVED.</p>
        </footer>

      </div>
    </div>
  `,
  styles: [`
    :host {
      --coffee: #8B5E3C;
      --black: #0a0a0a;
      --white: #ffffff;
    }

    .lt-wrapper {
      min-height: 100vh;
      background: var(--white);
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto', sans-serif;
    }

    .lt-container {
      width: 100%;
      max-width: 1000px;
    }

    /* HEADER */
    .lt-header {
      margin-bottom: 40px;
    }
    .lt-header-content {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .lt-main-photo {
      position: relative;
      width: 180px;
      height: 180px;
    }
    .lt-main-photo img {
      width: 100%; height: 100%;
      object-fit: cover;
      filter: grayscale(100%);
      transition: filter 0.8s ease, transform 0.8s ease;
      border: 1px solid rgba(0,0,0,0.1);
    }
    .lt-main-photo:hover img {
      filter: grayscale(0%);
    }
    .lt-photo-decoration {
      position: absolute;
      top: -8px; right: -8px;
      width: 40px; height: 40px;
      border-right: 2px solid;
      border-top: 2px solid;
    }

    /* GRID */
    .lt-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 32px;
    }

    .lt-col-1 {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .lt-bio-box {
      border-left: 1px solid var(--coffee);
      padding-left: 20px;
    }

    .lt-dual-photos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .lt-small-photo {
      position: relative;
      aspect-ratio: 1/1;
      border-radius: 4px;
      overflow: hidden;
      background: #f5f5f5;
    }
    .lt-small-photo img {
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0.8;
      transition: all 0.5s ease;
    }
    .lt-small-photo:hover img {
      opacity: 1;
      transform: scale(1.1);
    }
    .lt-photo-label {
      position: absolute;
      bottom: 8px; left: 8px;
      font-size: 8px;
      font-weight: 900;
      background: var(--white);
      color: var(--black);
      padding: 2px 6px;
      letter-spacing: 0.1em;
    }

    /* LINKS */
    .lt-col-2 {
      display: flex;
      flex-direction: column;
    }
    .lt-links-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .lt-card-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      padding: 32px 40px;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.08);
    }

    .lt-card-tag {
      position: absolute;
      top: 0; right: 0;
      font-size: 7px;
      font-weight: 900;
      color: var(--white);
      background: var(--coffee);
      padding: 2px 8px;
    }

    .black-card {
      background: var(--black);
      color: var(--white);
    }
    .white-card {
      background: var(--white);
      color: var(--black);
      border: 1px solid rgba(0,0,0,0.08);
    }
    .coffee-card {
      background: var(--coffee);
      color: var(--white);
    }

    .lt-card-link:hover {
      transform: translateX(6px);
      box-shadow: 10px 10px 0px rgba(139, 94, 60, 0.1);
    }

    .lt-card-btn {
      font-size: 18px;
      font-weight: 300;
    }
    .coffee-text { color: var(--coffee); }

    .lt-social-footer {
      margin-top: 12px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .lt-social-mini {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--black);
      text-decoration: none;
      border-bottom: 1px solid var(--black);
    }
    .lt-mini-line {
      flex: 1;
      height: 1px;
      background: rgba(0,0,0,0.05);
    }

    /* FOOTER */
    .lt-footer-simple {
      margin-top: 40px;
    }
    .lt-footer-line {
      width: 100%;
      height: 1px;
      background: rgba(0,0,0,0.05);
      margin-bottom: 20px;
    }
    .lt-footer-simple p {
      font-size: 9px;
      font-weight: 400;
      color: rgba(0,0,0,0.2);
      letter-spacing: 0.3em;
    }

    /* MOBILE */
    @media (max-width: 640px) {
      .lt-wrapper { padding: 40px 20px; align-items: flex-start; }
      .lt-grid { grid-template-columns: 1fr; gap: 40px; }
      .lt-header-content { flex-direction: column; align-items: flex-start; text-align: left; }
      .lt-main-photo { width: 80px; height: 80px; }
      .lt-main-photo img { filter: grayscale(0%); } /* Always color on mobile for impact */
    }
  `]
})
export class LinktreeComponent implements OnInit, AfterViewInit {
  currentYear = new Date().getFullYear();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.isBrowser) {
      // Small timeout to ensure script is loaded and DOM is ready
      setTimeout(() => {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            once: true,
            offset: 50
          });
        }
      }, 500);
    }
  }
}
