import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {RatingComponent} from './engagement/pages/rating/rating.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'engagement/ratings/new', component: RatingComponent},
  {path: '**', component: PageNotFoundComponent},
];
