import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormConfigItem} from '../../../../shared/component/form/form.model';
import {UtilService} from '../../../../core/util.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formId = UtilService.guid();
  formConfig: FormConfigItem[][] = [
      [
        {
          type: 'text', // 默认值
          label: '企业名称',
          field: 'name',
          defaultValue: '',
          validators: [
            {
              type: 'required'
            },
            {
              type: 'maxlength',
              value: 120
            },
            {
              type: 'minlength',
              value: 2
            },
            {
              type: 'mistake',
              value: /^\d+$/,
              notAllow: true, // false
              text: '内容不规范'
            }
          ]
        },
        {
          type: 'select', // 选择时无需远程查询
          list: [],
          nzValueField: 'id',
          nzLabelField: 'name',
          label: '企业类型',
          field: 'type',
          defaultValue: '',
          // validators: [
          //   {
          //     type: 'required'
          //   }
          // ]
        },
      ],
    [
      {
        type: 'text', // 默认值
        label: '企业名称2',
        field: 'name2',
        defaultValue: '',
        validators: [
          {
            type: 'required'
          },
          {
            type: 'maxlength',
            value: 120
          },
          {
            type: 'minlength',
            value: 2
          },
          {
            type: 'mistake',
            value: /^\d+$/,
            notAllow: true, // false
            text: '内容不规范'
          }
        ]
      },
      {
        type: 'select', // 选择时无需远程查询
        list: [{id: 1, name: 'aaa'}],
        nzValueField: 'id',
        nzLabelField: 'name',
        label: '企业类型3',
        field: 'type2',
        defaultValue: '',
        validators: [
          {
            type: 'required'
          }
        ]
      },
    ],
    ];
  constructor(
  ) { }

  ngOnInit() {
  }
  add() {
    console.log('add', this.form);
  }

}
