import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { ScrollColorService } from './services/scroll-color.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
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
    CursorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SantiagoArbelaez';
  currentBackground = '#FFFFFF';
  private sub?: Subscription;

  constructor(private scrollColorService: ScrollColorService) {}

  ngOnInit() {
    this.sub = this.scrollColorService.currentColor$.subscribe(color => {
      this.currentBackground = color;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
