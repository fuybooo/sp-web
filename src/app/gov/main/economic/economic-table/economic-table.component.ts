import { Component, OnInit } from '@angular/core';
import {Column} from '../../../../shared/component/table/table.model';

@Component({
  selector: 'app-economic-table',
  templateUrl: './economic-table.component.html',
  styleUrls: ['./economic-table.component.less']
})
export class EconomicTableComponent implements OnInit {
  dataSet = [];
  tableId = 'economic-table';
  columns: Column[] = [
    {
      field: 'f1',
      title: '企业名称'
    },
    {
      field: 'f2',
      title: '数据时间'
    },
    {
      field: 'f3',
      title: '总资产（万元）'
    },
    {
      field: 'f4',
      title: '主营业务收入（万元）'
    },
    {
      field: 'f5',
      title: '利润总额（万元）'
    },
    {
      title: '操作',
      text: ['查看', '修改'],
      event: ['view', 'edit'],
      link: '/main/economic/detail'
    }
  ];
  constructor() { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '河北绿源再生资源开发有限公司北京（定州）',
      f2: '2018-05',
      f3:  i % 4 ? '120' : '300',
      f4: i % 4 ? '23' : '69',
      f5: i % 5 ? '22' : '76',
    }));
  }
  eventChange(event) {

  }
}
