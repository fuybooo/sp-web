import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';
import {UtilService} from '../../../core/utils/util.service';
import {HttpRes} from '../../../shared/shared.model';
import {CoreService} from '../../../core/core.service';
import * as format from 'date-fns/format';
import {urls} from '../../../core/urls.model';
import {dateFormatter} from '../../../app.model';

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
    state: '',
    typeid: '',
    content: '',
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
      title: '状态'
    },
    {
      field: 'f5',
      title: '申请返回状态'
    },
    {
      text: ['查看', {value: '申请返回', visible: 'f4'}],
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
