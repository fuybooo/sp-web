import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormConfigItem} from '../../../../shared/component/form/form.model';
import {guid} from '../../../../core/utils/util-fns';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.less']
})
export class AskComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formId = guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '社会信用编号',
        field: 'social_credit_number',
      },
      {
        label: '组织机构代码',
        field: 'organization_code',
      },
    ],
    [
      {
        label: '法人代表',
        field: 'law_person',
      },
      {
        label: '企业性质',
        field: 'business_type',
      },
    ],
    [
      {
        label: '注册地址',
        field: 'address',
      },
      {
        label: '注册资本',
        field: 'registered_capital',
      },
    ],
    [
      {
        label: '主要业务活动',
        field: 'major_activities',
      },
    ],
  ];
  constructor(
  ) { }

  ngOnInit() {
  }

}
