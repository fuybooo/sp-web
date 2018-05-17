import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.less']
})
export class QuestionFormComponent implements OnInit {
  form;
  list1 = [
    {
      id: '1',
      name: '问题性质1'
    },
    {
      id: '2',
      name: '问题性质2'
    },
    {
      id: '3',
      name: '问题性质3'
    },
  ];
  list2 = [
    {
      id: '1',
      name: '问题类型1'
    },
    {
      id: '2',
      name: '问题类型2'
    },
    {
      id: '3',
      name: '问题类型3'
    },
  ];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      f1: [''],
      f2: [''],
      f3: [''],
      f4: [''],
      f5: [''],
      f6: [''],
      f7: [''],
      f8: [''],
    });
  }
}
