import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilService} from '../../../../core/util.service';
import {NzMessageService} from 'ng-zorro-antd';
import {urls} from '../../../../core/urls.model';
import {HttpRes} from '../../../../shared/shared.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {
  url = urls.question;
  op;
  id;
  questionResult;
  handleType = 1;
  description;
  loginInfo;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loginInfo = UtilService.getLoginInfo();
    this.init();
  }
  init() {
    this.utilService.get(this.url, {id: this.id}).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        this.questionResult = res.data;
      }
    });
  }
  submit() {

  }
  changeTestRole(event) {
    this.loginInfo.role = event;
  }

}
