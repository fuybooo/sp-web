import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {menuList} from './main.model';
import {NzModalService} from 'ng-zorro-antd';
import {UtilService} from '../../core/util.service';
import {CoreService} from '../../core/core.service';
import {MainService} from './main.service';
declare let $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  currentItem;
  loginInfo;
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
    this.initMenuList();
    // 路由改变时,改变导航栏状态
    this.coreService.routeChangeEvent.subscribe(() => {
      this.modalService.closeAll();
      this.initMenuList();
    });
  }
  initMenuList() {
    this.menuList = $.extend(true, [], menuList);
    const url = this.router.routerState.snapshot.url;
    this.menuList.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          const matchedRoute = MainService.matchAdditionalRoute(child, url);
          // 根据URL确定当前应该激活那个菜单 (1.路由和参数都匹配；2.额外路由匹配)
          if (url === child.route || matchedRoute) {
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
      } else if (url === item.route || MainService.matchAdditionalRoute(item, url)) {
        item.isActive = true;
        this.currentItem = item;
        this.breadcrumbList = [this.currentItem.label];
      } else {
        item.isActive = false;
      }
    });
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
  logout() {
    this.coreService.logout();
  }

}
