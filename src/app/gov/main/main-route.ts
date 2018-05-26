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
import {ReportComponent} from './report/report.component';
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
import {OnTimeComponent} from './report/on-time/on-time.component';
import {QuestionCollectionComponent} from './report/question-collection/question-collection.component';
import {QuestionResolveComponent} from './report/question-resolve/question-resolve.component';
import {QuestionSatisfyComponent} from './report/question-satisfy/question-satisfy.component';
import {DeptOnTimeComponent} from './report/dept-on-time/dept-on-time.component';
import {ProvinceQuestionResolveComponent} from './report/province-question-resolve/province-question-resolve.component';
import {ProvinceQuestionSatisfyComponent} from './report/province-question-satisfy/province-question-satisfy.component';
import {ThreeClassThreeStatisticalComponent} from './classify/three-class-three-statistical/three-class-three-statistical.component';
import {ClassifyClsComponent} from './classify/cls/cls.component';
import {SecondaryOpenRateComponent} from './classify/secondary-open-rate/secondary-open-rate.component';
import {ProvinceQuestionClassifyComponent} from './classify/province-question-classify/province-question-classify.component';
import {ClassAndQuestionDemandComponent} from './classify/class-and-question-demand/class-and-question-demand.component';
import {ThreeClassThreeStatisticalClassifyComponent} from './classify/three-class-three-statistical-classify/three-class-three-statistical-classify.component';
import {QuestionTimeoutComponent} from './classify/question-timeout/question-timeout.component';
import {InvestigationComponent} from './classify/investigation/investigation.component';
import {QuestionListComponent} from './question/question-list/question-list.component';
import {QuestionHandleComponent} from './question/question-handle/question-handle.component';
import {OrgComponent} from './org/org.component';
import {AccountComponent} from './account/account.component';
import {SettingsComponent} from './settings/settings.component';
import {SuperviseSettingsComponent} from './settings/supervise-settings/supervise-settings.component';
import {QuestionHandleSettingsComponent} from './settings/question-handle-settings/question-handle-settings.component';
import {OrgDetailComponent} from './org/org-detail/org-detail.component';
import {DetailComponent as SuperviseSettingsDetailComponent} from './settings/supervise-settings/detail/detail.component';
import {UserComponent} from './settings/user/user.component';
import {AuthComponent} from './settings/auth/auth.component';
import {UserDetailComponent} from './settings/user/user-detail/user-detail.component';

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
        component: QuestionComponent,
        children: [
          {
            path: 'list',
            component: QuestionListComponent,
          },
          {
            path: 'handle',
            component: QuestionHandleComponent,
          },
          {
            path: 'quesDetail',
            component: QuestionDetailComponent
          },
        ]
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
        path: 'report',
        component: ReportComponent,
        children: [
          {
            path: 'onTime',
            component: OnTimeComponent
          },
          {
            path: 'questionCollection',
            component: QuestionCollectionComponent
          },
          {
            path: 'questionResolve',
            component: QuestionResolveComponent
          },
          {
            path: 'questionSatisfy',
            component: QuestionSatisfyComponent
          },
          {
            path: 'deptOnTime',
            component: DeptOnTimeComponent
          },
          {
            path: 'provinceQuestionResolve',
            component: ProvinceQuestionResolveComponent
          },
          {
            path: 'provinceQuestionSatisfy',
            component: ProvinceQuestionSatisfyComponent
          },
        ]
      },
      {
        path: 'classify',
        component: ClassifyComponent,
        children: [
          {
            path: 'threeClassThreeStatistical',
            component: ThreeClassThreeStatisticalComponent
          },
          {
            path: 'classify',
            component: ClassifyClsComponent
          },
          {
            path: 'secondaryOpenRate',
            component: SecondaryOpenRateComponent
          },
          {
            path: 'provinceQuestionClassify',
            component: ProvinceQuestionClassifyComponent
          },
          {
            path: 'classAndQuestionDemand',
            component: ClassAndQuestionDemandComponent
          },
          {
            path: 'threeClassThreeStatisticalClassify',
            component: ThreeClassThreeStatisticalClassifyComponent
          },
          {
            path: 'questionTimeout',
            component: QuestionTimeoutComponent
          },
          {
            path: 'investigation',
            component: InvestigationComponent
          },
        ]
      },
      {
        path: 'org',
        component: OrgComponent
      },
      {
        path: 'org/orgDetail',
        component: OrgDetailComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: 'user',
            component: UserComponent
          },
          {
            path: 'user/detail',
            component: UserDetailComponent
          },
          {
            path: 'auth',
            component: AuthComponent
          },
          {
            path: 'superviseSettings',
            component: SuperviseSettingsComponent
          },
          {
            path: 'superviseSettings/detail',
            component: SuperviseSettingsDetailComponent
          },
          {
            path: 'questionHandleSettings',
            component: QuestionHandleSettingsComponent
          },
        ]
      },
    ]
  },
];
