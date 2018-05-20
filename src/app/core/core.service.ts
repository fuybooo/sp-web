import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {dictionaryInfoKey, loginInfoKey} from '../shared/shared.model';
import {environment} from '../../environments/environment';

@Injectable()
export class CoreService {
  spin = false;
  // 路由改变事件
  routeChangeEvent = new EventEmitter();
  // 全局列表
  globalTableEvent = new EventEmitter();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }

  /**
   * 对路由进行监听
   * ==
   * 1. 改变页面对title
   * 2. 路由改变后可以订阅事件，做相应对改变
   */
  watchRoute() {
    (((((this.router.events
      .filter(event => event instanceof NavigationEnd) as Observable<any>)
      .map(() => this.activatedRoute)) as Observable<any>)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }) as Observable<any>)
      .filter(route => route.outlet === 'primary') as Observable<any>)
      .subscribe((route) => {
        this.titleService.setTitle(route.snapshot.data['title'] || environment.project === 'gov' ? '直通服务' : '企业服务');
        this.routeChangeEvent.emit();
      });
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
