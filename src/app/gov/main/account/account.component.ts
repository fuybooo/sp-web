import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../shared/component/table/table.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
  dateRange = [];
  tableId = 'account-table';
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '企业名称'
    },
    {
      field: 'f2',
      title: '所属区'
    },
    {
      field: 'f3',
      title: '所属街道'
    },
    {
      field: 'f4',
      title: '组织机构代码'
    },
    {
      field: 'f5',
      title: '账户是否创建'
    },
    {
      field: 'f6',
      title: '企业信息是否确认'
    },
    {
      field: 'f7',
      title: '初始密码'
    },
    {
      field: 'f8',
      title: '创建时间'
    },
    {
      title: '操作',
      text: ['查看', '重置密码', {value: '创建账号', visible: 'f5'}],
      event: ['view', 'reset', 'create'],
      link: '/gov/main/account/detail'
    }
  ];
  typeList1 = [];
  typeList2 = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '河北绿源再生资源开发有限公司',
      f2: '滨海新区',
      f3: '开发区',
      f4: '899sdd233',
      f5: '已创建',
      f6: '已确认',
      f7: '112233',
      f8: '2018-05-19 09:30:21',
    }));
  }
  switchRoute() {
    this.router.navigateByUrl('/gov/main/org/orgDetail');
  }
  onChange(event) {}
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'edit') {
        this.router.navigateByUrl('/gov/main/org/orgDetail');
      }
    }
  }
}
