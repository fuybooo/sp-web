import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.less']
})
export class EconomicComponent implements OnInit {
  dateRange = [];
  constructor() { }

  ngOnInit() {
  }
  onChange(event) {}
}
