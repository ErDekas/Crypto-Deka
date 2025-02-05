import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/landing/landing.component')
      .then(m => m.LandingComponent)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio.component')
      .then(m => m.PortfolioComponent)
  },
  {
    path: 'coin/:id',
    loadComponent: () => import('./components/coin-detail/coin-detail.component')
      .then(m => m.CoinDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];