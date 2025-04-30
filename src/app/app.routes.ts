import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccommodationDetailsComponent } from './pages/accommodation-details/accommodation-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'accommodation/:id', component: AccommodationDetailsComponent },
  { path: '**', redirectTo: '/home' }
];