import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {CoreService} from '../../../core/core.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.less']
})
export class RosterComponent implements OnInit {
  params: any = {
    cmptime: null,
    cmptype: null,
    cmplevel: null,
    district: null,
    county: null,
    cmporgid: null
  };
  typeList = [];
  timeList = [];
  levelList = [];
  districtList = [];
  countyList = [];
  constructor(
    private coreService: CoreService
  ) { }

  ngOnInit() {
  }
  onChange(event) {}
  search() {
    this.params.cmporgid = this.params.county || this.params.district;
    this.coreService.globalTableEvent.emit({
      tableId: 'roster-table',
      params: this.params
    });
  }
}
