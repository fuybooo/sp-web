import {Routes} from '@angular/router';
import {environment} from '../environments/environment';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    loadChildren: `app/${environment.project}/login/login.module#LoginModule`,
    data: {
      title: 'login'
    }
  },
  {
    path: 'main',
    loadChildren: `app/${environment.project}/main/main.module#MainModule`
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];
