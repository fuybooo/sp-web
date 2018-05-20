import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {
  tableId = 'question-table';
  dateRange = [];
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '企业名称'
    },
    {
      field: 'f2',
      title: '问题类型'
    },
    {
      field: 'f3',
      title: '具体问题'
    },
    {
      field: 'f4',
      title: '提交时间'
    },
    {
      field: 'f5',
      title: '状态'
    },
    {
      title: '操作',
      text: ['查看', {value: '改为满意', visible: 'f5'}],
      event: ['view', 'edit'],
      link: '/main/quesDetail'
    }
  ];

  dataSet2 = [];
  columns2: Column[] = [
    {
      field: 'f1',
      title: '企业名称'
    },
    {
      field: 'f2',
      title: '具体问题'
    },
    {
      field: 'f3',
      title: '最新操作时间'
    },
    {
      field: 'f4',
      title: '应处理机构'
    },
    {
      field: 'f5',
      title: '督办状态'
    },
    {
      field: 'f6',
      title: '督办方式'
    },
    {
      field: 'f7',
      title: '状态'
    },
    {
      title: '操作',
      text: '查看',
      event: 'view',
      link: '/main/quesDetail'
    }
  ];
  tableId2 = 'question-list-table';
  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '山东炼钢集团',
      f2: '资金保障',
      f3: '生产规模扩大，急需一笔5万资金',
      f4: '2018-05-16 08:30:45',
      f5: i % 4 ? '已督办' : '未督办',
    }));
    this.dataSet2 = Array(20).fill(0).map((item, i) => ({
      f1: '山东炼钢集团',
      f2: '生产规模扩大，急需一笔5万资金',
      f3: '2018-05-16 08:30:45',
      f4: '发改委',
      f5: i % 4 ? '已督办' : '未督办',
      f6: i % 4 ? '现场' : '远程',
      f7: i % 4 ? '已完成' : '未完成',
    }));
  }
  onChange(event) {}
  eventChange(event) {}
  eventChange2(event) {
    if (event.tableId === this.tableId2) {
      if (event.col.event === 'view') {
        this.router.navigate([event.col.link]);
      }
    }
  }
}
