import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../../shared/component/table/table.model';

@Component({
  selector: 'app-supervise-settings',
  templateUrl: './supervise-settings.component.html',
  styleUrls: ['./supervise-settings.component.less']
})
export class SuperviseSettingsComponent implements OnInit {

  tableId = 'supervise-table';
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '机构名称'
    },
    {
      field: 'f2',
      title: '督办的节点'
    },
    {
      field: 'f3',
      title: '督办的区街代码'
    },
    {
      title: '操作',
      text: '修改',
      event: 'edit',
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '发改委',
      f2: '石家庄',
      f3:  '123，23，222，30',
    }));
  }
  switchRoute() {
    this.router.navigateByUrl('/main/settings/superviseSettings/detail');
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.col.event === 'edit') {
        this.router.navigateByUrl('/main/settings/superviseSettings/detail');
      }
    }
  }
}
