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
import {CompanyDetailComponent} from './roster/company-detail/company-detail.component';
import {ProjectDetailComponent} from './project/project-detail/project-detail.component';
import {ProjectEconomicComponent} from './project-economic/project-economic.component';
import {QuestionDetailComponent} from './question/question-detail/question-detail.component';
import {WorkComponent} from './information/work/work.component';
import {SuperviseProgressComponent} from './information/supervise-progress/supervise-progress.component';
import {ProgressComponent} from './information/progress/progress.component';
import {NotifyComponent} from './information/notify/notify.component';
import {SupportComponent} from './information/support/support.component';

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
        path: 'rosDetail',
        component: CompanyDetailComponent
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
        path: 'projCreate',
        component: ProjectDetailComponent
      },
      {
        path: 'economic',
        component: EconomicComponent
      },
      {
        path: 'projEconomic',
        component: ProjectEconomicComponent
      },
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: 'quesDetail',
        component: QuestionDetailComponent
      },
      {
        path: 'information',
        component: InformationComponent,
        children: [
          {
            path: '',
            component: WorkComponent
          },
          {
            path: 'support',
            component: SupportComponent
          },
          {
            path: 'notify',
            component: NotifyComponent
          },
          {
            path: 'progress',
            component: ProgressComponent
          },
          {
            path: 'superviseProgress',
            component: SuperviseProgressComponent
          },
        ],
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
