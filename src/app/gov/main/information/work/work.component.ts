import { Component, OnInit } from '@angular/core';
import {Column} from '../../../../shared/component/table/table.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent implements OnInit {
  dateRange = [];
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '标题'
    },
    {
      field: 'f2',
      title: '编辑时间'
    },
    {
      field: 'f3',
      title: '编辑人'
    },
    {
      field: 'f4',
      title: '状态'
    },
    {
      field: 'f5',
      title: '信息分类'
    },
    {
      title: '操作',
      text: ['查看', '修改', {value: '删除', visible: 'f4'}],
      event: ['view', 'edit'],
      link: '/main/economic/detail'
    }
  ];
  tableId = 'work-list';
  constructor() { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '今年将着力实施20项民心工程',
      f2: '2018-05-18 09:40:03',
      f3:  'admin',
      f4: i % 4 ? '已发布' : '未发布',
      f5: '综合',
    }));
  }
  onChange(event) {}
  eventChange(event) {}
}
