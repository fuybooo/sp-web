import { Component, OnInit } from '@angular/core';
import {Column} from '../../../../shared/component/table/table.model';

@Component({
  selector: 'app-province-question-classify',
  templateUrl: './province-question-classify.component.html',
  styleUrls: ['./province-question-classify.component.less']
})
export class ProvinceQuestionClassifyComponent implements OnInit {
  tableId = 'ProvinceQuestionClassify';
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '省职单位名称'
    },
    {
      field: 'f2',
      title: '总数（个）'
    },
    {
      field: 'f3',
      title: '人才用工（个）'
    },
    {
      field: 'f4',
      title: '用地需求（个）'
    },
    {
      field: 'f5',
      title: '环境保护（个）'
    },
    {
      field: 'f6',
      title: '安全生产（个）'
    },
    {
      field: 'f7',
      title: '资金保障（个）'
    },
    {
      field: 'f8',
      title: '公用设施（个）'
    },
    {
      field: 'f9',
      title: '行政审批（个）'
    },
    {
      field: 'f10',
      title: '公共服务（个）'
    },
    {
      field: 'f11',
      title: '其他（个）'
    },
  ];
  constructor() { }

  ngOnInit() {
    this.dataSet = Array(20).fill(0).map(item => ({
      f1: '40',
      f2: '6',
      f3: '1',
      f4: '2',
      f5: '3',
      f6: '15',
      f7: '4',
      f8: '5',
      f9: '6',
      f10: '6',
      f11: '6',
    }));
  }

}
