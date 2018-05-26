import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../core/http-interceptor.service';
import {NgModule} from '@angular/core';
import {LandingComponent} from './landing.component';
import {landingRoutes} from './landing.route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(landingRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
