import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.less']
})
export class QueryComponent implements OnInit {
  dateRange = [];
  constructor() { }

  ngOnInit() {
  }
  onChange(event) {}
}
