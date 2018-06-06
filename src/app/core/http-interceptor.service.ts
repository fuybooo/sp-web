import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

/**
 * 请求监听拦截器
 * ==
 * 监听所有请求，进行请求成功失败的统一处理
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({withCredentials: true});
    if (req.method === 'POST') {
      req = req.clone(
        // {setHeaders: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        {setHeaders: {'Content-Type': 'application/json; charset=UTF-8'}}
      );
    }
    console.log('请求路径和参数', req.url, JSON.stringify(req.body));
    if (req.url.includes('.json')) {
      if (req.method === 'POST') {
        req = req.clone({method: 'GET'});
      }
    }
    return next.handle(req).do((res: HttpResponse<any>) => {
      // 请求成功
      // 登录权限为空
      if (res.body) {
        if (res.body.code === 100001 // token为找到用户
          || res.body.code === 100006 // 没传token
        ) {
          this.router.navigate(['/login']);
        }
      }
    }, (err: HttpErrorResponse) => {
      if (err.status === 403) {
        // 跳转到登录页面
        this.router.navigate(['/login']);
      }
    });
  }

}
