import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
  },
  {
    path: 'landing',
    loadChildren: `app/landing/landing.module#LandingModule`,
    data: {
      title: 'landing'
    }
  },
  {
    path: 'login',
    loadChildren: `app/login/login.module#LoginModule`,
    data: {
      title: 'login'
    }
  },
  {
    path: 'gov/main',
    loadChildren: `app/gov/main/main.module#MainModule`
  },
  {
    path: 'com/main',
    loadChildren: `app/com/main/main.module#MainModule`
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
