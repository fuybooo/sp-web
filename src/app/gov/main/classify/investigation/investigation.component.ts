import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.less']
})
export class InvestigationComponent implements OnInit {
  displayData = [];
  constructor() { }

  ngOnInit() {
    this.displayData = [
      '全市合计',
      '一、行业分组',
      '1. 重点服务业企业',
      '2. 重点科技型中小企业',
      '3. 重点规模以上工业企业',
      '二、经济类型分组',
      '三、隶属关系分组',
      '四、行政区划分组',
    ].map(item => ({
      f1: item,
      f2: '6',
      f3: '1',
      f4: '2',
      f5: '3',
      f6: '15',
      f7: '4',
      f8: '4',
      f9: '4',
    }));
  }
}
