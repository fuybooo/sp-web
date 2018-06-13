import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilService} from '../../../../core/utils/util.service';
import {NzMessageService} from 'ng-zorro-antd';
import {urls} from '../../../../core/urls.model';
import {HttpRes} from '../../../../shared/shared.model';
import {getLoginInfo, getParentList} from '../../../../core/utils/util-project';
import {trimList} from '../../../../core/utils/util-fns';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {
  url = urls.questions;
  op;
  id;
  questionResult;
  handleType = 2;
  description;
  loginInfo;
  role = '';
  status = 1;
  allDeptList = [
    {
      id: '1',
      name: '部门1'
    },
    {
      id: '2',
      name: '部门2'
    },
    {
      id: '3',
      name: '部门3'
    },
    {
      id: '4',
      name: '部门4'
    },
  ];

  deptList = [];
  headDept = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loginInfo = getLoginInfo();
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
  trimList() {
    return trimList(this.deptList);
  }
  getParentList() {
    return getParentList(this.allDeptList, trimList(this.deptList));
  }
  changeTestRole(event) {
    this.loginInfo.role = event;
  }
  changeTestQuestionStatus(event) {

  }
  back() {
    history.back();
  }

}
