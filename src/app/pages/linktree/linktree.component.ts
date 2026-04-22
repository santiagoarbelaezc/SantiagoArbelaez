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
        
        <main class="lt-main-grid">
          
          <!-- COLUMN 1: PROTEIN / LARGE PHOTO -->
          <aside class="lt-col-photo" data-aos="fade-right" data-aos-duration="1200">
            <div class="lt-portrait-wrapper" appMagnetic [appMagnetic]="0.15">
              <img src="about-portrait.png" alt="Santiago Arbelaez" class="lt-main-img shadow-2xl" />
              <div class="lt-photo-decoration" style="border-color: #8B5E3C;"></div>
              <div class="lt-photo-tag">S.A. 2025</div>
            </div>
          </aside>

          <!-- COLUMN 2: INFO & PRIMARY CTA -->
          <section class="lt-col-info">
            <header class="lt-info-header" data-aos="fade-down" data-aos-delay="200">
              <h1 class="font-headline text-6xl md:text-8xl text-black leading-[0.85] tracking-tighter">
                SANTIAGO<br/><span style="color: #8B5E3C;">ARBELAEZ</span>
              </h1>
              <p class="text-sm uppercase tracking-[0.4em] text-black/40 mt-6 font-medium">Digital Creator & Full Stack Architect</p>
            </header>

            <div class="lt-bio-section" data-aos="fade-up" data-aos-delay="400">
              <p class="text-xl md:text-2xl font-light leading-relaxed text-black/70 italic border-l-2 border-coffee pl-8 py-2 my-10">
                "Fusionando la estética editorial con la potencia tecnológica para crear experiencias digitales inolvidables."
              </p>
            </div>

            <div class="lt-primary-cta" data-aos="fade-up" data-aos-delay="600">
              <a routerLink="/portfolio" class="lt-btn-full black-card rounded-2xl mb-6" appMagnetic [appMagnetic]="0.1">
                <span class="lt-btn-tag uppercase">Featured</span>
                <div class="lt-btn-content">
                  <h3 class="text-4xl font-bold">PORTFOLIO</h3>
                  <p class="text-[13px] text-white/40 tracking-[0.2em] uppercase mt-2">Full Brand Experience</p>
                </div>
                <div class="lt-btn-arrow text-5xl">→</div>
              </a>

              <a href="https://www.instagram.com/santiagoarbelaezc/" target="_blank" class="lt-social-card rounded-2xl mb-4" data-aos="fade-up" data-aos-delay="700" appMagnetic [appMagnetic]="0.05">
                <div class="lt-social-body">
                  <span class="text-[10px] text-black/30 tracking-widest uppercase block mb-1">Social</span>
                  <h3 class="text-2xl font-bold">INSTAGRAM</h3>
                </div>
                <div class="coffee-text text-3xl">↗</div>
              </a>

              <a href="https://www.tiktok.com/@santiagoarbelaezc" target="_blank" class="lt-social-card rounded-2xl" data-aos="fade-up" data-aos-delay="800" appMagnetic [appMagnetic]="0.05">
                <div class="lt-social-body">
                  <span class="text-[10px] text-black/30 tracking-widest uppercase block mb-1">Video</span>
                  <h3 class="text-2xl font-bold">TIKTOK</h3>
                </div>
                <div class="coffee-text text-3xl">↗</div>
              </a>
            </div>
          </section>

          <!-- COLUMN 3: SECONDARY PHOTOS & SOCIALS -->
          <aside class="lt-col-social">
            
            <!-- Secondary Photo 1 -->
            <div class="lt-photo-box" data-aos="zoom-in" data-aos-delay="500">
              <div class="lt-img-wrap rounded-3xl overflow-hidden" appMagnetic [appMagnetic]="0.1">
                <img src="hero-portrait.png" alt="Process" class="grayscale hover:grayscale-0 transition-all duration-700" />
                <span class="lt-img-label">UIX</span>
              </div>
            </div>

            <!-- Social Links Stack -->
            <div class="lt-social-stack">
              <a href="https://wa.me/573000000000" target="_blank" class="lt-social-card coffee-card rounded-2xl" data-aos="fade-left" data-aos-delay="600" appMagnetic [appMagnetic]="0.05">
                <div class="lt-social-body">
                  <span class="text-[10px] text-white/40 tracking-widest uppercase block mb-1">Chat</span>
                  <h3 class="text-xl font-bold text-white">WHATSAPP</h3>
                </div>
                <div class="text-white text-2xl">↗</div>
              </a>

              <a href="https://facebook.com" target="_blank" class="lt-social-card rounded-2xl" data-aos="fade-left" data-aos-delay="900" appMagnetic [appMagnetic]="0.05">
                <div class="lt-social-body flex items-center gap-4">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div>
                    <span class="text-[10px] text-black/30 tracking-widest uppercase block">Connect</span>
                    <h3 class="text-xl font-bold">FACEBOOK</h3>
                  </div>
                </div>
                <div class="coffee-text text-2xl">↗</div>
              </a>

              <a href="https://x.com" target="_blank" class="lt-social-card rounded-2xl" data-aos="fade-left" data-aos-delay="950" appMagnetic [appMagnetic]="0.05">
                <div class="lt-social-body flex items-center gap-4">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <div>
                    <span class="text-[10px] text-black/30 tracking-widest uppercase block">Trends</span>
                    <h3 class="text-xl font-bold">X / TWITTER</h3>
                  </div>
                </div>
                <div class="coffee-text text-2xl">↗</div>
              </a>
            </div>

            <!-- Secondary Photo 2 -->
            <div class="lt-photo-box mt-4" data-aos="zoom-in" data-aos-delay="1000">
              <div class="lt-img-wrap rounded-3xl overflow-hidden" appMagnetic [appMagnetic]="0.1">
                <img src="about-portrait.png" alt="Development" class="grayscale hover:grayscale-0 transition-all duration-700" />
                <span class="lt-img-label">DEV</span>
              </div>
            </div>

          </aside>

        </main>

        <footer class="lt-footer-minimal" data-aos="fade-in" data-aos-delay="1200">
           <div class="lt-footer-sep"></div>
           <div class="lt-footer-flex">
             <p class="lt-copy">© {{ currentYear }} SANTIAGO ARBELAEZ. ALL RIGHTS RESERVED.</p>
             <a href="https://www.linkedin.com/in/santiago-arbelaez-contreras-9830b5290/" target="_blank" class="lt-footer-link">LINKEDIN ↗</a>
           </div>
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
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto', sans-serif;
      overflow-x: hidden;
    }

    .lt-container {
      width: 100%;
      max-width: 1400px; /* Increased for wider PC experience */
    }

    /* MAIN GRID */
    .lt-main-grid {
      display: grid;
      grid-template-columns: 1.6fr 2fr 1fr;
      gap: 60px;
      align-items: start;
    }

    /* COLUMN 1: LARGE PHOTO */
    .lt-col-photo {
      position: sticky;
      top: 60px;
    }
    .lt-portrait-wrapper {
      position: relative;
    }
    .lt-main-img {
      width: 100%;
      aspect-ratio: 3/5.2; /* Taller and Larger */
      object-fit: cover;
      border-radius: 40px;
      filter: grayscale(100%);
      transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
      border: 1px solid rgba(0,0,0,0.08);
    }
    .lt-portrait-wrapper:hover .lt-main-img {
      filter: grayscale(0%);
      transform: scale(1.02);
    }
    .lt-photo-decoration {
      position: absolute;
      top: -12px; right: -12px;
      width: 60px; height: 60px;
      border-right: 3px solid;
      border-top: 3px solid;
      pointer-events: none;
    }
    .lt-photo-tag {
      position: absolute;
      bottom: 24px; left: -12px;
      background: var(--coffee);
      color: var(--white);
      font-size: 10px;
      font-weight: 800;
      padding: 6px 12px;
      letter-spacing: 0.2em;
      transform: rotate(-90deg);
      transform-origin: left bottom;
    }

    /* COLUMN 2: INFO */
    .lt-col-info {
      padding-top: 20px;
    }
    .lt-primary-cta {
      margin-top: 20px;
    }
    .lt-btn-full {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      padding: 40px;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.08);
    }
    .lt-btn-tag {
      position: absolute;
      top: 0; right: 0;
      font-size: 9px;
      font-weight: 900;
      color: var(--white);
      background: var(--coffee);
      padding: 4px 12px;
    }
    .black-card { background: var(--black); color: var(--white); }
    .lt-btn-full:hover {
      transform: translateY(-8px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.15);
    }

    /* COLUMN 3: SOCIAL & SMALL PHOTOS */
    .lt-col-social {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .lt-img-wrap {
      position: relative;
      aspect-ratio: 1/1;
      border: 1px solid rgba(0,0,0,0.08);
      background: #f8f8f8;
    }
    .lt-img-wrap img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
    .lt-img-label {
      position: absolute;
      top: 12px; right: 12px;
      background: var(--white);
      color: var(--black);
      font-size: 8px;
      font-weight: 900;
      padding: 3px 8px;
      letter-spacing: 0.15em;
    }

    .lt-social-stack {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .lt-social-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      text-decoration: none;
      color: var(--black);
      background: var(--white);
      border: 1px solid rgba(0,0,0,0.08);
      transition: all 0.3s ease;
    }
    .lt-social-card:hover {
      background: #fafafa;
      transform: translateX(4px);
    }
    .coffee-card { background: var(--coffee); border: none; }
    .coffee-card:hover { background: #9c6c4a; }
    .coffee-text { color: var(--coffee); }

    /* FOOTER */
    .lt-footer-minimal {
      margin-top: 80px;
    }
    .lt-footer-sep {
      width: 100%; height: 1px;
      background: rgba(0,0,0,0.06);
      margin-bottom: 24px;
    }
    .lt-footer-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lt-copy {
      font-size: 10px;
      font-weight: 400;
      color: rgba(0,0,0,0.3);
      letter-spacing: 0.2em;
    }
    .lt-footer-link {
      font-size: 10px;
      font-weight: 700;
      color: var(--black);
      text-decoration: none;
      letter-spacing: 0.1em;
    }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
      .lt-main-grid {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }
      .lt-col-social {
        grid-column: span 2;
        flex-direction: row;
        align-items: start;
        flex-wrap: wrap;
      }
      .lt-photo-box { width: calc(50% - 10px); }
      .lt-social-stack { width: 100%; }
    }

    @media (max-width: 768px) {
      .lt-wrapper { padding: 40px 20px; align-items: start; }
      .lt-main-grid { grid-template-columns: 1fr; }
      .lt-col-photo { position: relative; top: 0; }
      .lt-col-social { grid-column: span 1; }
      .lt-photo-box { width: 100%; }
      .lt-btn-full { padding: 30px 24px; }
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
