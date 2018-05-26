import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.less']
})
export class OrgComponent implements OnInit {
  tableId = 'org-table';
  typeList = [
    {
      id: '1',
      name: '类型1'
    },
    {
      id: '2',
      name: '类型2'
    },
    {
      id: '3',
      name: '类型3'
    },
  ];
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '组织名称'
    },
    {
      field: 'f2',
      title: '机构名称'
    },
    {
      field: 'f3',
      title: '节点'
    },
    {
      title: '操作',
      text: ['修改', '删除'],
      event: ['edit', 'delete'],
      link: '/gov/main/economic/detail'
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '河北绿源再生资源开发有限公司',
      f2: '发改委',
      f3:  '区',
    }));
  }
  switchRoute() {
    this.router.navigateByUrl('/gov/main/org/orgDetail');
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'edit') {
        this.router.navigateByUrl('/gov/main/org/orgDetail');
      }
    }
  }
}
