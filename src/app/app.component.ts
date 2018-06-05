import {Component, OnInit} from '@angular/core';
import {CoreService} from './core/core.service';
import {NzModalService} from 'ng-zorro-antd';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private coreService: CoreService,
              private modalService: NzModalService) {}
  ngOnInit() {
    this.coreService.watchRoute();
    // 路由切换时关闭所有弹出框
    this.coreService.routeChangeEvent.subscribe(() => {
      this.modalService.closeAll();
      this.setPageHeight();
    });
  }
  setPageHeight() {
    setTimeout(() => {
      let contentHeight = Math.max(($('.main-content').length ? $('.main-content').height() : 0) + 60, 760);
      $('.main').height(contentHeight + 100);
      $('.menu-box').height(contentHeight);
    }, 300);
  }
}
