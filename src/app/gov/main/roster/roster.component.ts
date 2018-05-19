import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.less']
})
export class RosterComponent implements OnInit {
  tableId = 'roster-list';
  constructor(
  ) { }

  ngOnInit() {
  }
  onChange(event) {}

}
