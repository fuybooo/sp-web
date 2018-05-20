import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-open-rate',
  templateUrl: './secondary-open-rate.component.html',
  styleUrls: ['./secondary-open-rate.component.less']
})
export class SecondaryOpenRateComponent implements OnInit {
  displayData = [];
  constructor() { }

  ngOnInit() {
    this.displayData = Array(20).fill(0).map(item => ({
      f1: '山东',
      f2: '6',
      f3: '1',
      f4: '2',
      f5: '66',
    }));
  }

}
