import { NgModule } from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {mainRoutes} from './main-route';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { InformationComponent } from './information/information.component';
import { EconomicComponent } from './economic/economic.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import { AskComponent } from './question/ask/ask.component';
import { DetailComponent } from './question/detail/detail.component';
import { DetailComponent as EconomicDetailComponent } from './economic/detail/detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  declarations: [MainComponent, HomeComponent, QuestionComponent, InformationComponent, EconomicComponent, QuestionFormComponent, AskComponent, DetailComponent, EconomicDetailComponent]
})
export class MainModule { }
