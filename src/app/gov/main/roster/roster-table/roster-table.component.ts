import { Component, OnInit } from '@angular/core';
import {Column} from '../../../../shared/component/table/table.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html',
  styleUrls: ['./roster-table.component.less']
})
export class RosterTableComponent implements OnInit {
  tableId = 'roster-table';
  columns: Column[] = [
    {
      field: 'f1',
      title: '企业名称'
    },
    {
      field: 'f2',
      title: '组织机构代码'
    },
    {
      field: 'f3',
      title: '企业分级'
    },
    {
      field: 'f4',
      title: '所属市'
    },
    {
      field: 'f5',
      title: '所属区'
    },
    {
      field: 'f6',
      title: '所属行业'
    },
    {
      field: 'f7',
      title: '盈亏情况'
    },
    {
      title: '操作',
      text: ['查看', '修改', '删除'],
      event: ['view', 'edit', 'delete'],
      link: '/main/rosDetail'
    }
  ];
  dataSet = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '山东炼钢集团',
      f2: '982039823',
      f3:  i % 4 ? '县级' : '市级',
      f4: i % 4 ? '临沂' : '济南',
      f5: i % 4 ? '中县' : '中市',
      f6: '重点服务业企业',
      f7: i % 5 ? '盈' : '亏'
    }));
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'view') {
        this.router.navigate([event.col.link]);
      }
    }
  }

}
