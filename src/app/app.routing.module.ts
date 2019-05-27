import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import {UsersComponent} from "./users/users.component";
import {CitiesComponent} from "./cities/cities.component";
import {AdsComponent} from "./ads/ads.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'cities', component: CitiesComponent, canActivate: [AuthGuard]},
  { path: 'ads', component: AdsComponent, canActivate: [AuthGuard]},
  { path: 'logout', redirectTo: 'login'},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
