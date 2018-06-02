import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormConfigItem} from '../../../../../shared/component/form/form.model';
import {UtilService} from '../../../../../core/util.service';
import {urls} from '../../../../../core/urls.model';
import {AJAXTYPE, HttpRes} from '../../../../../shared/shared.model';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formId = UtilService.guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '姓名',
        field: 'username'
      },
      {
        label: '手机',
        field: 'mobile'
      },
    ],
    [
      {
        label: '组织',
        field: 'groupname'
      },
      {
        label: '机构',
        field: 'orgname'
      },
    ],
    [
      {
        label: '所属区',
        field: 'district'
      },
      {
        label: '部门',
        field: 'dept'
      },
    ],
    [
      {
        label: '账号',
        field: 'loginname'
      },
    ],
  ];
  url = urls.users;
  op;
  id;
  showForm = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.op = this.route.snapshot.params.op;
    this.id = this.route.snapshot.params.id;
    if (this.op !== 'add' && this.id !== '0') {
      this.utilService.get(this.url, {id: this.id}).subscribe((res: HttpRes) => {
        if (res.code === 200) {
          UtilService.findFormItem(this.formConfig, 'username').defaultValue = res.data.username;
          UtilService.findFormItem(this.formConfig, 'mobile').defaultValue = res.data.mobile;
          UtilService.findFormItem(this.formConfig, 'groupname').defaultValue = res.data.groupname;
          UtilService.findFormItem(this.formConfig, 'orgname').defaultValue = res.data.orgname;
          UtilService.findFormItem(this.formConfig, 'district').defaultValue = res.data.district;
          UtilService.findFormItem(this.formConfig, 'dept').defaultValue = res.data.dept;
          UtilService.findFormItem(this.formConfig, 'loginname').defaultValue = res.data.loginname;
          this.showForm = true;
        }
      });
    } else {
      this.showForm = true;
    }
  }
  back() {
    this.router.navigateByUrl('/gov/main/settings/user');
  }
  save() {
    // 执行保存
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

}
