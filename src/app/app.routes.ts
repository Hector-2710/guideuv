import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'guides',
    loadChildren: () =>
      import('./guides/guides.routes').then(m => m.GUIDES_ROUTES)
  }
];
