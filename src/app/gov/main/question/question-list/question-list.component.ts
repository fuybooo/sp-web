import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../../shared/component/table/table.model';
import {UtilService} from '../../../../core/utils/util.service';
import {CoreService} from '../../../../core/core.service';
import {dateFormatter, statusList} from '../../../../core/common.model';
import * as format from 'date-fns/format';
import {urls} from '../../../../core/urls.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.less']
})
export class QuestionListComponent implements OnInit {
  statusList = statusList;
  typeList = [{value: '', label: '问题类型'}];
  districtList = [{value: '', label: '区县'}];
  deptList = [{value: '', label: '处理部门'}];
  params: any = {
    type: '',
    status: '',
    district: '',
    dept: '',
  };
  dateRange = [];
  tableId = 'question-table';

  constructor(
    private router: Router,
    private utilService: UtilService,
    private coreService: CoreService
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
    this.params.startdate = this.dateRange[0] ? format(this.dateRange[0], 'YYYY-MM-DD') : '';
    this.params.enddate = this.dateRange[1] ? format(this.dateRange[1], 'YYYY-MM-DD') : '';
    return this.params;
  }
}
