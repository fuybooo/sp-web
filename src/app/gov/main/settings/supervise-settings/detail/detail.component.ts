import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  form;
  nodeList: any[] = [
    {
      name: '区/县发改局（服）',
      id: '',
      code: '',
    },
    {
      name: '区/县重点办（项）',
      id: '',
      code: '',
    },
    {
      name: '区/县工信局（工）',
      id: '',
      code: '',
    },
    {
      name: '区/县科技局（科）',
      id: '',
      code: '',
    },
    {
      name: '市级发改委（服）',
      id: '',
      code: '',
    },
    {
      name: '区/县相关部门',
      id: '',
      code: '',
    },
    {
      name: '市级工信局（工）',
      id: '',
      code: '',
    },
    {
      name: '市级科技局（科）',
      id: '',
      code: '',
    },
    {
      name: '市级相关部门（服）',
      id: '',
      code: '',
    },
    {
      name: '市级相关部门（科）',
      id: '',
      code: '',
    },
    {
      name: '区县活动小组（项）',
      id: '',
      code: '',
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
    });
  }

}
