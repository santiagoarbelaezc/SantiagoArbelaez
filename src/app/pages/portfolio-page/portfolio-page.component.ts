import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollColorService } from '../../services/scroll-color.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="dynamic-bg" [style.background]="currentBackground"></div>
    <main class="relative">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </main>
  `,
  styles: [`
    .dynamic-bg {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: -2;
      background: #ffffff;
      transition: background 0.7s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
    }
  `]
})
export class PortfolioPageComponent {
  currentBackground = '#FFFFFF';
  private sub?: Subscription;

  constructor(private scrollColorService: ScrollColorService) {}

  ngOnInit() {
    this.sub = this.scrollColorService.currentColor$.subscribe(c => this.currentBackground = c);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
