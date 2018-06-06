import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormConfigItem} from '../../../shared/component/form/form.model';
import {guid} from '../../../core/utils/util-fns';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {
  op = 'view';
  form: FormGroup = new FormGroup({});
  formId = guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '企业名称',
        field: 'companyname'
      },
      {
        label: '行业分类',
        field: 'industry',
        type: 'select',
        list: []
      },
    ], [
      {
        label: '行业代码',
        field: 'industrycode'
      },
      {
        label: '社会信用编号',
        field: 'socialcreditnumber'
      },
    ], [
      {
        label: '组织机构代码',
        field: 'organizationcode'
      },
      {
        label: '工商登记注册号',
        field: 'businessregistnum'
      },
    ], [
      {
        label: '税务登记注册号',
        field: 'taxregistnum'
      },
      {
        label: '运营状态',
        field: 'operationstate',
        type: 'select',
        list: []
      },
    ], [
      {
        label: '企业控股情况',
        field: 'enterpriseholding',
        type: 'select',
        list: []
      },
      {
        label: '注册资金',
        field: 'registeredcapital'
      },
    ], [
      {
        label: '成立时间',
        field: 'foundedtime',
        type: 'date'
      },
      {
        label: '法人代表',
        field: 'lawperson'
      },
    ], [
      {
        label: '登记注册类型',
        field: 'businesstype',
        type: 'select',
        list: []
      },
      {
        label: '单位规模',
        field: 'unitsize',
        type: 'select',
        list: []
      },
    ], [
      {
        label: '隶属关系',
        field: 'relationship',
        type: 'select',
        list: []
      },
      {
        label: '主要业务活动',
        field: 'majoractivities',
        type: 'select',
        list: []
      },
    ]
  ];

  constructor() {
  }

  ngOnInit() {
    // findFormItem(this.formConfig, 'majoractivities').defaultValue = '987';
  }
  handleOk() {
    if (this.op === 'edit') {
      if (this.form.dirty && this.form.valid) {
        // 只在表单被编辑且合法时进行保存
        console.log(this.form.value);
      }
    }
    this.op = this.op === 'view' ? 'edit' : 'view';
  }

}
