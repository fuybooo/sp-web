import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-class-three-statistical-classify',
  templateUrl: './three-class-three-statistical-classify.component.html',
  styleUrls: ['./three-class-three-statistical-classify.component.less']
})
export class ThreeClassThreeStatisticalClassifyComponent implements OnInit {
  displayData = [];
  constructor() { }

  ngOnInit() {
    this.displayData = Array(20).fill(0).map(item => ({
      f1: '资金保障',
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
