import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, NZ_MESSAGE_CONFIG, zh_CN} from 'ng-zorro-antd';
import {HttpInterceptorService} from './http-interceptor.service';
import {CoreService} from './core.service';
import {UtilService} from './util.service';
import {AuthGuardService} from '../shared/guard/auth-guard.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {LoginService as GovLoginService} from '../login/login.service';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  providers: [
    // ng-zorro的全局设置
    {provide: NZ_MESSAGE_CONFIG, useValue: {nzMaxStack: 1} },
    // todo 升级版本为0.7.0beta.4及以上时，可以删除下面一行 2018-04-16
    {provide: NZ_I18N, useValue: zh_CN},
    // http拦截器
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    // 必要的全局服务
    CoreService,
    UtilService,
    AuthGuardService,
    GovLoginService,
  ]
})
export class CoreModule { }
