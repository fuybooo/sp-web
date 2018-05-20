import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-class-three-statistical',
  templateUrl: './three-class-three-statistical.component.html',
  styleUrls: ['./three-class-three-statistical.component.less']
})
export class ThreeClassThreeStatisticalComponent implements OnInit {
  displayData = [];
  constructor() { }

  ngOnInit() {
    this.displayData = Array(20).fill(0).map(item => ({
      f1: '山东',
      f2: '6',
      f3: '1',
      f4: '2',
      f5: '3',
      f6: '15',
      f7: '4',
      f8: '5',
      f9: '6',
    }));
  }

}
