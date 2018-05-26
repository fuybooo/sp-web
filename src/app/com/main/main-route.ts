import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuardService} from '../../shared/guard/auth-guard.service';
import {HomeComponent} from './home/home.component';
import {QuestionComponent} from './question/question.component';
import {InformationComponent} from './information/information.component';
import {EconomicComponent} from './economic/economic.component';
import {AskComponent} from './question/ask/ask.component';
import {DetailComponent} from './question/detail/detail.component';
import {DetailComponent as EconomicDetailComponent} from './economic/detail/detail.component';

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
        path: 'question/detail',
        component: DetailComponent
      },
      {
        path: 'question/ask',
        component: AskComponent
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
      {
        path: 'economic/detail',
        component: EconomicDetailComponent
      },
    ]
  },
];
