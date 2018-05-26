import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.less']
})
export class EconomicComponent implements OnInit {
  dateRange = [];
  dataSet = [];
  columns: Column[] = [
    {
      field: 'f1',
      title: '数据时间'
    },
    {
      field: 'f2',
      title: '总资产（万元）'
    },
    {
      field: 'f3',
      title: '总人数（人）'
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
      field: 'f6',
      title: '上缴税金（万元）'
    },
    {
      field: 'f7',
      title: '负债（万元）'
    },
    {
      field: 'f8',
      title: '状态'
    },
    {
      text: '查看',
      event: 'view'
    }
  ];
  tableId = 'economic';
  form;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      f1: [''],
      f2: [''],
      f3: [''],
      f4: [''],
      f5: [''],
      f6: [''],
      f7: [''],
      f8: [''],
    });
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '2018-01',
      f2: 230,
      f3: 15,
      f4: 700,
      f5: 38,
      f6: 38,
      f7: 38,
      f8: '已提交',
    }));
  }
  onChange(event) {}
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.col.event === 'view') {
        this.router.navigateByUrl('/com/main/economic/detail');
      }
    }
  }
}
