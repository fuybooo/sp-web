import {EventEmitter, Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map} from 'rxjs/internal/operators';

@Injectable()
export class CoreService {
  spin = false;
  // 路由改变事件
  routeChangeEvent = new EventEmitter();
  // 全局列表
  globalTableEvent = new EventEmitter();
  // 全局表单
  globalFormEvent = new EventEmitter();
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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe((route) => {
      this.titleService.setTitle(route.snapshot.data['title']);
      this.routeChangeEvent.emit();
    });
  }
  logout() {
    this.router.navigate(['/landing']);
  }
}
