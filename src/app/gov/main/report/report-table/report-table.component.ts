import {Component, Input, OnInit} from '@angular/core';
import {Column} from '../../../../shared/component/table/table.model';
import {reportColumns} from '../../main.model';
import {CoreService} from '../../../../core/core.service';
import {getColumnList} from '../../../../core/utils/util-project';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.less']
})
export class ReportTableComponent implements OnInit {
  @Input() colKeys = [];
  // url = urls.report;
  tableId = 'report-table';
  columns: Column[] = [];
  params = {};
  dataSet = [];
  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit() {
    this.columns = getColumnList(reportColumns, this.colKeys);
    this.dataSet = Array(20).fill(0).map((item, i) => ({
      f1: '山东省临沂市',
      f2: '50',
      f3: '20',
      f4: '40',
      f5: '30',
      f6: '40',
      f7: '29',
      f8: '29',
      f9: '29',
      f10: '29',
      f11: '29',
      f12: '29',
      f13: '29',
      f14: '29',
      f15: '规划部',
      f16: '建设部',
      f17: '29',
      f18: '29',
    }));
  }
  search() {
    this.coreService.globalTableEvent.emit();
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
    }
  }

}
