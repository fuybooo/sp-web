import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {LoginBoxComponent} from '../login/login-box/login-box.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  constructor(
    private modalService: NzModalService,
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
