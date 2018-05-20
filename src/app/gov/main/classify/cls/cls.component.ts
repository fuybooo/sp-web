import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classify-cls',
  templateUrl: './cls.component.html',
  styleUrls: ['./cls.component.less']
})
export class ClassifyClsComponent implements OnInit {
  displayData = [];
  constructor() { }

  ngOnInit() {
    this.displayData = Array(20).fill(0).map(item => ({
      f1: '30',
      f2: '6',
      f3: '1',
      f4: '2',
      f5: '3',
      f6: '15',
      f7: '4',
      f8: '5',
    }));
  }

}
