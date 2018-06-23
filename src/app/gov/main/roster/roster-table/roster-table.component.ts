import { Component, OnInit } from '@angular/core';
import {Column} from '../../../../shared/component/table/table.model';
import {Router} from '@angular/router';
import {urls} from '../../../../core/urls.model';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html',
  styleUrls: ['./roster-table.component.less']
})
export class RosterTableComponent implements OnInit {
  tableId = 'roster-table';
  url = urls.companys;
  columns: Column[] = [
    {
      field: 'companyname',
      title: '企业名称'
    },
    {
      field: 'orgcode',
      title: '组织机构代码'
    },
    {
      field: 'level',
      title: '企业分级'
    },
    {
      field: 'districtname',
      title: '所属县'
    },
    {
      field: 'countyname',
      title: '所属镇'
    },
    {
      field: 'industry',
      title: '所属行业'
    },
    {
      field: 'isprofit',
      title: '盈亏情况',
      formatter: v => v ? '盈' : '亏'
    },
    {
      title: '操作',
      text: '查看',
      event: 'view',
      link: '/gov/main/rosDetail'
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  eventChange(event) {
  }

}
