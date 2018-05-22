import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-question-handle-settings',
  templateUrl: './question-handle-settings.component.html',
  styleUrls: ['./question-handle-settings.component.less']
})
export class QuestionHandleSettingsComponent implements OnInit {
  nodeList: any[] = [
    {
      name: '邮件',
      id: '',
      code: '',
    },
    {
      name: 'APP消息',
      id: '',
      code: '',
    },
    {
      name: '短信',
      id: '',
      code: '',
    },
    {
      name: '在线消息',
      id: '',
      code: '',
    },
  ];
  form;
  time = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      f1: [''],
      f2: [1]
    });
  }

}
