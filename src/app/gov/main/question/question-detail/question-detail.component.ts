import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.less']
})
export class QuestionDetailComponent implements OnInit {
  handleType = 1;
  constructor() { }

  ngOnInit() {
  }

}
