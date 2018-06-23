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
  description;
  role = 1;
  status = '';
  replyStatus = ''; // 获取到的回复状态，用户根据该状态判断需要做什么操作
  changeReplyStatus = ''; // 用户对该问题的回复状态
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
    this.role = getLoginInfo().role;
    this.init();
  }
  init() {
    this.utilService.get(this.url, {id: this.id}).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        this.questionResult = res.data;
        this.status = this.questionResult.question.status;
        const currentReply = this.questionResult.replylist.find(item => item.iscurrent);
        this.replyStatus = currentReply ? currentReply.status : '0000';
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
    this.role = event;
  }
  changeTestQuestionStatus(event) {
    this.status = event;
  }
  changeTestReplyStatus(event) {
    this.replyStatus = event;
  }
  back() {
    history.back();
  }

}
