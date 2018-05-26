import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {
  tableId = 'question-list';
  dateRange = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '类型'
    },
    {
      field: 'f2',
      title: '问题'
    },
    {
      field: 'f3',
      title: '提交时间'
    },
    {
      field: 'f4',
      title: '状态'
    },
    {
      field: 'f5',
      title: '申请返回状态'
    },
    {
      text: ['查看', {value: '申请返回', visible: 'f4'}],
      event: ['view', 'apply']
    }
  ];
  dataSet = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '资金保障',
      f2: '生产规模扩大， 急需一笔5万资金',
      f3: '2018-05-15 11:05:05',
      f4: i % 3 ? '已评价' : '办理中',
      f5: '无',
    }));
  }
  onChange(event) {
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'view') {
        this.router.navigateByUrl('/com/main/question/detail');
      }
    }
  }
  toAsk() {
    this.router.navigateByUrl('/com/main/question/ask');
  }
}
