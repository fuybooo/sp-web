import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuardService} from '../../shared/guard/auth-guard.service';
import {HomeComponent} from './home/home.component';
import {QuestionComponent} from './question/question.component';
import {InformationComponent} from './information/information.component';
import {EconomicComponent} from './economic/economic.component';

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
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: 'information',
        component: InformationComponent
      },
      {
        path: 'economic',
        component: EconomicComponent
      },
    ]
  },
];
