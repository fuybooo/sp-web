import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-and-question-demand',
  templateUrl: './class-and-question-demand.component.html',
  styleUrls: ['./class-and-question-demand.component.less']
})
export class ClassAndQuestionDemandComponent implements OnInit {
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
