import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormConfigItem} from '../../../../shared/component/form/form.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AJAXTYPE, HttpRes} from '../../../../shared/shared.model';
import {NzMessageService} from 'ng-zorro-antd';
import {urls} from '../../../../core/urls.model';
import {guid} from '../../../../core/utils/util-fns';
import {UtilService} from '../../../../core/utils/util.service';
import {findFormItem} from '../../../../core/utils/util-component';

@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.less']
})
export class OrgDetailComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formId = guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '机构名称',
        field: 'orgname'
      },
      {
        label: '流程类型',
        field: 'flowtype',
        type: 'select',
        list: [{id: '1', name: '流程类型1'}]
      },
    ],
    [
      {
        label: '类型',
        field: 'type',
        type: 'select',
        list: [{id: '1', name: '类型1'}]
      },
      {
        label: '组织名称',
        field: 'groupname'
      },
    ],
    [
      {
        label: '负责区',
        field: 'district',
        type: 'select',
        list: [{id: '1', name: '区1'}]
      },
      {
        label: '负责镇',
        field: 'county',
        type: 'select',
        list: [{id: '1', name: '镇1'}]
      },
    ],
  ];
  showForm = false;
  url = urls.organizations;
  id;
  op;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.init();
  }
  init() {
    this.id = this.route.snapshot.params.id;
    this.op = this.route.snapshot.params.op;
    if (this.op !== 'add' && this.id !== '0') {
      this.utilService.get(this.url, {id: this.id}).subscribe((res: HttpRes) => {
        if (res.code === 200) {
          // this.data = res.data;
          findFormItem(this.formConfig, 'orgname').defaultValue = res.data.orgname;
          findFormItem(this.formConfig, 'flowtype').defaultValue = res.data.flowtype;
          findFormItem(this.formConfig, 'type').defaultValue = res.data.type;
          findFormItem(this.formConfig, 'groupname').defaultValue = res.data.groupname;
          findFormItem(this.formConfig, 'district').defaultValue = res.data.district;
          findFormItem(this.formConfig, 'county').defaultValue = res.data.county;
          this.showForm = true;
        }
      });
    } else {
      this.showForm = true;
    }
  }
  save() {
    let params: any = this.form.value;
    let type = AJAXTYPE.POST;
    if (this.op !== 'add') {
      params.id = this.id;
      type = AJAXTYPE.PUT;
    }
    this.utilService.ajax(this.url, params, type).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        this.message.success('保存成功');
        this.back();
      }
    });
  }
  back() {
    this.router.navigateByUrl('/gov/main/org');
  }
}
