import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {menuList} from './main.model';
import {NzModalService} from 'ng-zorro-antd';
import {UtilService} from '../../core/utils/util.service';
import {CoreService} from '../../core/core.service';
import {getLoginInfo, matchAdditionalRoute} from '../../core/utils/util-project';
import {urls} from '../../core/urls.model';
import {HttpRes} from '../../shared/shared.model';
import {getModalFooter} from '../../core/utils/util-component';
import {BindPhoneComponent} from './bind-phone/bind-phone.component';
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
    this.loginInfo = getLoginInfo();
    this.initMenuList();
    // 路由改变时,改变导航栏状态
    this.coreService.routeChangeEvent.subscribe(() => {
      this.modalService.closeAll();
      this.initMenuList();
    });
    this.requestForPhone();
  }
  requestForPhone() {
    this.utilService.get(urls.phone).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        if (res.data.result === 0) {
          const modal = this.modalService.create({
            nzTitle: '请绑定手机号',
            nzContent: BindPhoneComponent,
            nzFooter: getModalFooter((_modal) => {}, () => modal.destroy())
          });
        }
      }
    });
  }
  initMenuList() {
    this.menuList = $.extend(true, [], menuList);
    const url = this.router.routerState.snapshot.url;
    this.menuList.forEach(item => {
      const matchedRoute = matchAdditionalRoute(item, url);
      if (url === item.route || matchedRoute) {
        item.isActive = true;
        this.currentItem = item;
        this.breadcrumbList = [this.currentItem.label];
        if (matchedRoute) {
          this.breadcrumbList = [...this.breadcrumbList, matchedRoute.label];
        }
      } else {
        item.isActive = false;
      }
    });
  }

  onClickItem(item) {
    this.currentItem = item;
    this.menuList.forEach(value => value.isActive = (item.code === value.code));
    this.router.navigate([item.route + (item.params || '')]);
  }
  logout() {
    this.coreService.logout();
  }

}
