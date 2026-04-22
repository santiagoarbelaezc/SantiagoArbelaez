import { Routes } from '@angular/router';
import { LinktreeComponent } from './pages/linktree/linktree.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

export const routes: Routes = [
  { 
    path: '', 
    component: LinktreeComponent, 
    data: { animation: 'LinktreePage' } 
  },
  { 
    path: 'portfolio', 
    component: PortfolioPageComponent, 
    data: { animation: 'PortfolioPage' } 
  },
  { path: '**', redirectTo: '' }
];
