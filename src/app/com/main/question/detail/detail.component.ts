import { Component, OnInit } from '@angular/core';
import {FormConfigItem} from '../../../../shared/component/form/form.model';
import {guid} from '../../../../core/utils/util-fns';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-question-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  op = 'view';
  form: FormGroup = new FormGroup({});
  formId = guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '组织机构代码',
        field: 'organizationcode'
      },
      {
        label: '社会信用编号',
        field: 'socialcreditnumber'
      },
    ], [
      {
        label: '法人代表',
        field: 'lawperson'
      },
      {
        label: '登记注册类型',
        field: 'businesstype',
        type: 'select',
        list: []
      },
    ], [
      {
        label: '注册地址',
        field: 'businesstype',
        type: 'select',
        list: []
      },
      {
        label: '注册资本',
        field: 'unitsize',
        type: 'select',
        list: []
      },
    ], [
      {
        label: '主要业务活动',
        field: 'majoractivities',
        type: 'select',
        list: []
      },
    ]
  ];
  constructor() { }

  ngOnInit() {
  }

}
