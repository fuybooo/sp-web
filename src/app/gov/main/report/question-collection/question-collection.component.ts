import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-collection',
  templateUrl: './question-collection.component.html',
  styleUrls: ['./question-collection.component.less']
})
export class QuestionCollectionComponent implements OnInit {

  colKeys = ['f1', 'f5', 'f6', 'f7'];
  constructor() { }

  ngOnInit() {
  }

}
