import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {businessMenuList, navList} from './main.model';
import {NzModalService} from 'ng-zorro-antd';
import {UtilService} from '../../core/util.service';
import {CoreService} from '../../core/core.service';
declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  currentItem;
  projectName = '快用CC';
  loginInfo;
  navList = [];
  menuList = [];
  breadcrumbList = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilService,
    public coreService: CoreService,
    public modalService: NzModalService,
  ) { }

  ngOnInit() {
    this.loginInfo = UtilService.getLoginInfo();
    // 初始化字典
    // this.utilService.getDictionaries();
    this.initNavList();
    this.initMenuList();
    // 路由改变时,改变导航栏状态
    this.coreService.routeChangeEvent.subscribe(() => {
      this.modalService.closeAll();
      this.initNavList();
      this.initMenuList();
    });
  }
  initNavList() {
    this.navList = $.extend(true, [], navList);
    this.navList.forEach(item => {
      if (!item.isHome && this.router.routerState.snapshot.url.indexOf(item.route) === 0) {
        item.isActive = true;
      }
    });
  }
  initMenuList() {
    this.menuList = $.extend(true, [], businessMenuList);
    const url = this.router.routerState.snapshot.url;
    this.menuList.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          const matchedRoute = this.matchAdditionalRoute(child, url);
          // 根据URL确定当前应该激活那个菜单 (1.路由和参数都匹配；2.额外路由匹配)
          if ((url.indexOf(child.route) === 0 && this.matchRoute(child, url)) || matchedRoute) {
            child.isActive = true;
            item.child = true;
            item.isExpand = true;
            this.currentItem = child;
            this.breadcrumbList = [item.label, this.currentItem.label];
            if (matchedRoute) {
              this.breadcrumbList.push(matchedRoute.label);
            }
          } else {
            child.isActive = false;
          }
        });
      } else if (url.indexOf(item.route) === 0 && this.matchRoute(item, url)) {
        item.isActive = true;
        this.currentItem = item;
        this.breadcrumbList = [this.currentItem.label];
      } else {
        item.isActive = false;
      }
    });
  }

  matchRoute(item, url) {
    return UtilService.getGivenStr('/', item.params || '') === UtilService.getGivenStr('/', url.slice(item.route.length));
  }
  matchAdditionalRoute(item, url) {
    let matched = null;
    if (item.additionalRoutes) {
      matched = item.additionalRoutes.find(val => {
        return url.indexOf(val.route) === 0;
      });
    }
    return matched;
  }
  onClickItem(item) {
    this.currentItem = item;
    this.menuList.map(value => {
      value.isActive = (item.code === value.code);
      if (value.children) {
        value.children.map( v => v.isActive = item.code === v.code);
      }
    });
    this.router.navigate([item.route + (item.params || '')]);
  }
  onClickNav(item) {
    // todo 等待UI设计完成再做
    this.navList.map(value => value.isActive = item.code === value.code);
    // this.router.navigate([item.route]);
  }
  logout() {
    this.coreService.logout();
  }

}
