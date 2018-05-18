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

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  declarations: [MainComponent, HomeComponent, RosterComponent, SituationComponent, ProjectComponent, EconomicComponent, QuestionComponent, InformationComponent, SummaryComponent, AssessmentComponent, ClassifyComponent]
})
export class MainModule { }
