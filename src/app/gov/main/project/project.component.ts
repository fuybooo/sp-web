import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  tableId = 'project-table';
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '项目单位及名称'
    },
    {
      field: 'f2',
      title: '企业性质'
    },
    {
      field: 'f3',
      title: '地区'
    },
    {
      field: 'f4',
      title: '区县'
    },
    {
      field: 'f5',
      title: '推进负责人'
    },
    {
      field: 'f6',
      title: '重点级别'
    },
    {
      field: 'f7',
      title: '项目阶段'
    },
    {
      title: '操作',
      text: ['查看', '修改'],
      event: ['view', 'edit'],
      link: '/main/projDetail'
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '河北绿源再生资源开发有限公司北京（定州）',
      f2: '中国500强',
      f3:  i % 4 ? '县级' : '市级',
      f4: i % 4 ? '临沂' : '济南',
      f5: i % 5 ? '张三' : '李四',
      f6: i % 4 ? '省重点' : '市重点',
      f7: i % 2 ? '前期跑办' : '竣工投产',
    }));
  }
  switchRoute() {
    this.router.navigate(['/main/project/create']);
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'view') {
        this.router.navigate([event.col.link]);
      }
    }
  }
}
