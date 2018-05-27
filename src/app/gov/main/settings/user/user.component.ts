import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../../shared/component/table/table.model';
import {UtilService} from '../../../../core/util.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  tableId = 'user-table';
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
      text: ['编辑', '删除'],
      event: ['edit', 'delete'],
      link: '/gov/main/settings/user/detail'
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
    this.router.navigateByUrl('/gov/main/settings/user/detail/add/0');
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'delete') {
        console.log('直接调用删除的接口');
      }
    }
  }
}
