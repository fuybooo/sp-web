import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-question-resolve',
  templateUrl: './province-question-resolve.component.html',
  styleUrls: ['./province-question-resolve.component.less']
})
export class ProvinceQuestionResolveComponent implements OnInit {

  colKeys = ['f16', 'f8', 'f18', 'f17', 'f10'];
  constructor() { }

  ngOnInit() {
  }

}
