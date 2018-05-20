import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-resolve',
  templateUrl: './question-resolve.component.html',
  styleUrls: ['./question-resolve.component.less']
})
export class QuestionResolveComponent implements OnInit {
  colKeys = ['f1', 'f8', 'f18', 'f9', 'f10'];
  constructor() { }

  ngOnInit() {
  }

}
