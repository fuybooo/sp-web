import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-timeout',
  templateUrl: './question-timeout.component.html',
  styleUrls: ['./question-timeout.component.less']
})
export class QuestionTimeoutComponent implements OnInit {
  displayData = [];
  constructor() { }

  ngOnInit() {
    this.displayData = Array(20).fill(0).map(item => ({
      f1: '建设局',
      f2: '6',
      f3: '1',
    }));
  }
}
