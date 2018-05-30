import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UtilService} from '../../../core/util.service';
import {FormConfigItem} from '../../../shared/component/form/form.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {
  op = 'view';
  form: FormGroup = new FormGroup({});
  formId = UtilService.guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '企业名称',
        field: 'company_name'
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
        field: 'industry_code'
      },
      {
        label: '社会信用编号',
        field: 'social_credit_number'
      },
    ], [
      {
        label: '组织机构代码',
        field: 'organization_code'
      },
      {
        label: '工商登记注册号',
        field: 'business_regist_num'
      },
    ], [
      {
        label: '税务登记注册号',
        field: 'tax_regist_num'
      },
      {
        label: '运营状态',
        field: 'operation_state',
        type: 'select',
        list: []
      },
    ], [
      {
        label: '企业控股情况',
        field: 'enterprise_holding',
        type: 'select',
        list: []
      },
      {
        label: '注册资金',
        field: 'registered_capital'
      },
    ], [
      {
        label: '成立时间',
        field: 'founded_time',
        type: 'date'
      },
      {
        label: '法人代表',
        field: 'law_person'
      },
    ], [
      {
        label: '登记注册类型',
        field: 'business_type',
        type: 'select',
        list: []
      },
      {
        label: '单位规模',
        field: 'unit_size',
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
        field: 'major_activities',
        type: 'select',
        list: []
      },
    ]
  ];

  constructor() {
  }

  ngOnInit() {
    // UtilService.findFormItem(this.formConfig, 'major_activities').defaultValue = '987';
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
