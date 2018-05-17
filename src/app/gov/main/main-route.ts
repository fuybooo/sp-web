import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuardService} from '../../shared/guard/auth-guard.service';
import {HomeComponent} from './home/home.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ]
  },
];
