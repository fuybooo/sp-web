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
      name: '融资需求类'
    },
    {
      id: '2',
      name: '土地供应类'
    },
    {
      id: '3',
      name: '人力人才类'
    },
    {
      id: '3',
      name: '向上申请类'
    },
    {
      id: '3',
      name: '公共服务类'
    },
    {
      id: '3',
      name: '公用设施类'
    },
    {
      id: '3',
      name: '行政审批类'
    },
    {
      id: '3',
      name: '配套建设类'
    },
    {
      id: '3',
      name: '安全生产类'
    },
    {
      id: '3',
      name: '环境保护类'
    },
    {
      id: '3',
      name: '政策落实类'
    },
    {
      id: '3',
      name: '企业权益类'
    },
    {
      id: '3',
      name: '其他服务类'
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
  fileList = [];
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
