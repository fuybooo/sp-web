import { NgModule } from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {mainRoutes} from './main-route';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  declarations: [MainComponent, HomeComponent]
})
export class MainModule { }
