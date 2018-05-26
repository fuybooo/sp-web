import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../../shared/component/table/table.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.less']
})
export class QuestionListComponent implements OnInit {

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
      text: '查看',
      event: 'view',
      link: '/gov/main/question/quesDetail'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '山东炼钢集团',
      f2: '资金保障',
      f3: '生产规模扩大，急需一笔5万资金',
      f4: '2018-05-16 08:30:45',
      f5: i % 4 ? '已督办' : '未督办',
    }));
  }
  onChange(event) {}
  eventChange(event) {
    if (event.tableId === this.tableId && event.col.event === 'view') {
      this.router.navigate([event.col.link]);
    }
  }
}
