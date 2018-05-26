import { NgModule } from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {mainRoutes} from './main-route';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { SituationComponent } from './situation/situation.component';
import { ProjectComponent } from './project/project.component';
import { EconomicComponent } from './economic/economic.component';
import { QuestionComponent } from './question/question.component';
import { InformationComponent } from './information/information.component';
import { SummaryComponent } from './summary/summary.component';
import { ClassifyComponent } from './classify/classify.component';
import { RosterTableComponent } from './roster/roster-table/roster-table.component';
import { CompanyDetailComponent } from './roster/company-detail/company-detail.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { EconomicTableComponent } from './economic/economic-table/economic-table.component';
import { ProjectEconomicComponent } from './project-economic/project-economic.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { WorkComponent } from './information/work/work.component';
import { SupportComponent } from './information/support/support.component';
import { NotifyComponent } from './information/notify/notify.component';
import { ProgressComponent } from './information/progress/progress.component';
import { SuperviseProgressComponent } from './information/supervise-progress/supervise-progress.component';
import { ReportComponent } from './report/report.component';
import { OnTimeComponent } from './report/on-time/on-time.component';
import { QuestionCollectionComponent } from './report/question-collection/question-collection.component';
import { QuestionResolveComponent } from './report/question-resolve/question-resolve.component';
import { QuestionSatisfyComponent } from './report/question-satisfy/question-satisfy.component';
import { DeptOnTimeComponent } from './report/dept-on-time/dept-on-time.component';
import { ProvinceQuestionResolveComponent } from './report/province-question-resolve/province-question-resolve.component';
import { ProvinceQuestionSatisfyComponent } from './report/province-question-satisfy/province-question-satisfy.component';
import { ThreeClassThreeStatisticalComponent } from './classify/three-class-three-statistical/three-class-three-statistical.component';
import { SecondaryOpenRateComponent } from './classify/secondary-open-rate/secondary-open-rate.component';
import { ProvinceQuestionClassifyComponent } from './classify/province-question-classify/province-question-classify.component';
import { ThreeClassThreeStatisticalClassifyComponent } from './classify/three-class-three-statistical-classify/three-class-three-statistical-classify.component';
import { QuestionTimeoutComponent } from './classify/question-timeout/question-timeout.component';
import { InvestigationComponent } from './classify/investigation/investigation.component';
import {ClassifyClsComponent} from './classify/cls/cls.component';
import { ClassAndQuestionDemandComponent } from './classify/class-and-question-demand/class-and-question-demand.component';
import { ReportTableComponent } from './report/report-table/report-table.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionHandleComponent } from './question/question-handle/question-handle.component';
import { OrgComponent } from './org/org.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { SuperviseSettingsComponent } from './settings/supervise-settings/supervise-settings.component';
import { QuestionHandleSettingsComponent } from './settings/question-handle-settings/question-handle-settings.component';
import { OrgDetailComponent } from './org/org-detail/org-detail.component';
import { DetailComponent as SuperviseSettingsDetailComponent } from './settings/supervise-settings/detail/detail.component';
import { UserComponent } from './settings/user/user.component';
import { AuthComponent } from './settings/auth/auth.component';
import { UserDetailComponent } from './settings/user/user-detail/user-detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  declarations: [MainComponent, HomeComponent, RosterComponent, SituationComponent, ProjectComponent, EconomicComponent, QuestionComponent, InformationComponent, SummaryComponent, ReportComponent, ClassifyComponent, RosterTableComponent, CompanyDetailComponent, ProjectDetailComponent, EconomicTableComponent, ProjectEconomicComponent, QuestionDetailComponent, WorkComponent, SupportComponent, NotifyComponent, ProgressComponent, SuperviseProgressComponent, ReportComponent, OnTimeComponent, QuestionCollectionComponent, QuestionResolveComponent, QuestionSatisfyComponent, DeptOnTimeComponent, ProvinceQuestionResolveComponent, ProvinceQuestionSatisfyComponent, ThreeClassThreeStatisticalComponent, SecondaryOpenRateComponent, ProvinceQuestionClassifyComponent, ThreeClassThreeStatisticalClassifyComponent, QuestionTimeoutComponent, InvestigationComponent, ClassifyClsComponent, ClassAndQuestionDemandComponent, ReportTableComponent, QuestionListComponent, QuestionHandleComponent, OrgComponent, AccountComponent, SettingsComponent, SuperviseSettingsComponent, QuestionHandleSettingsComponent, OrgDetailComponent, SuperviseSettingsDetailComponent, UserComponent, AuthComponent, UserDetailComponent]
})
export class MainModule { }
