import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {UtilService} from '../core/util.service';
import {LoginBoxComponent} from '../login/login-box/login-box.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  showList = true; // 默认显示所有的列表
  data = [
    {
      title: '市国土房管局关于优化我市营商环境进一步提高不动产登记效率的通知',
      from: '市国土房管局',
      time: '2018-05-22'
    },
    {
      title: '市国土房管局关于优化我市营商环境进一步提高不动产登记效率的通知',
      from: '市国土房管局',
      time: '2018-05-22'
    },
    {
      title: '市国土房管局关于优化我市营商环境进一步提高不动产登记效率的通知',
      from: '市国土房管局',
      time: '2018-05-22'
    },
  ];
  constructor(
    private modalService: NzModalService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }
  popLogin() {
    this.modalService.create({
      nzTitle: null,
      nzContent: LoginBoxComponent,
      nzWrapClassName: 'login-box-modal',
      nzFooter: null
    });
  }
}
