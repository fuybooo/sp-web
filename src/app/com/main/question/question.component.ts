import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';
import {UtilService} from '../../../core/utils/util.service';
import {HttpRes} from '../../../shared/shared.model';
import {CoreService} from '../../../core/core.service';
import * as format from 'date-fns/format';
import {urls} from '../../../core/urls.model';
import {dateFormatter} from '../../../core/common.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {
  tableId = 'question-list';
  dateRange = [];
  url = urls.issuelists;
  params: any = {
    state: null,
    typeid: null,
    content: null,
  };
  columns: Column[] = [
    {
      field: 'type',
      title: '类型'
    },
    {
      field: 'question',
      title: '问题'
    },
    {
      field: 'submitdate',
      title: '提交时间',
      formatter: dateFormatter
    },
    {
      field: 'status',
      title: '状态',
      formatter: v => {
        switch (v) {
          case 1:
            return '已提交';
          case 2:
            return '办理中';
          case 3:
            return '已办结';
          case 4:
            return '退回审核中';
          case 5:
            return '已退回';
        }
      }
    },
    {
      field: 'f5',
      title: '申请退回状态',
      formatter: v => v === 0 ? '无' : '申请中'
    },
    {
      text: ['查看', {value: '申请退回', visible: 'f4'}],
      event: ['view', 'apply'],
      link: '/com/main/question/detail'
    }
  ];
  statusList = [
    {
      value: '1',
      label: '已回复'
    }
  ];
  constructor(
    private router: Router,
    private utilService: UtilService,
    private coreService: CoreService,
  ) { }

  ngOnInit() {
  }
  search() {
    this.coreService.globalTableEvent.emit({
      tableId: this.tableId,
      params: this.getParams()
    });
  }
  getParams() {
    this.params.startdate = this.dateRange[0] ? format(new Date(this.dateRange[0]), 'YYYY-MM-DD') : '';
    this.params.enddate = this.dateRange[1] ? format(new Date(this.dateRange[1]), 'YYYY-MM-DD') : '';
    return this.params;
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
    }
  }
  toAsk() {
    this.router.navigateByUrl('/com/main/question/ask');
  }
}
