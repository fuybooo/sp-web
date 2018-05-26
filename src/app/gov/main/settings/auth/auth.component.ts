import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../../shared/component/table/table.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  tableId = 'auth-table';
  typeList1 = [];
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '姓名'
    },
    {
      field: 'f2',
      title: '账号'
    },
    {
      field: 'f3',
      title: '手机'
    },
    {
      field: 'f4',
      title: '区县'
    },
    {
      field: 'f5',
      title: '组织机构'
    },
    {
      title: '操作',
      text: ['查看', '修改', '删除'],
      event: ['view', 'edit', 'delete'],
      link: '/gov/main/user/detail'
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map(item => ({
      f1: '张三',
      f2: 'zhangsan',
      f3: 13522222222,
      f4: '兰陵',
      f5: '县政府',
    }));
  }
  switchRoute() {
    this.router.navigate(['/gov/main/user/detail']);
  }
  eventChange(event) {
    if (event.tableid === this.tableId) {
      if (event.event === 'view') {
        this.router.navigate(['/gov/main/user/detail']);
      }
    }
  }

}
