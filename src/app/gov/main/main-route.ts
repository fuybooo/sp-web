import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuardService} from '../../shared/guard/auth-guard.service';
import {HomeComponent} from './home/home.component';
import {RosterComponent} from './roster/roster.component';
import {SituationComponent} from './situation/situation.component';
import {ProjectComponent} from './project/project.component';
import {EconomicComponent} from './economic/economic.component';
import {QuestionComponent} from './question/question.component';
import {InformationComponent} from './information/information.component';
import {SummaryComponent} from './summary/summary.component';
import {AssessmentComponent} from './assessment/assessment.component';
import {ClassifyComponent} from './classify/classify.component';

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
        path: 'roster',
        component: RosterComponent
      },
      {
        path: 'situation',
        component: SituationComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'economic',
        component: EconomicComponent
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
        path: 'summary',
        component: SummaryComponent
      },
      {
        path: 'assessment',
        component: AssessmentComponent
      },
      {
        path: 'classify',
        component: ClassifyComponent
      },
    ]
  },
];
