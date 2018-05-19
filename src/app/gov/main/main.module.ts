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
import { AssessmentComponent } from './assessment/assessment.component';
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

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  declarations: [MainComponent, HomeComponent, RosterComponent, SituationComponent, ProjectComponent, EconomicComponent, QuestionComponent, InformationComponent, SummaryComponent, AssessmentComponent, ClassifyComponent, RosterTableComponent, CompanyDetailComponent, ProjectDetailComponent, EconomicTableComponent, ProjectEconomicComponent, QuestionDetailComponent, WorkComponent, SupportComponent, NotifyComponent, ProgressComponent, SuperviseProgressComponent]
})
export class MainModule { }
