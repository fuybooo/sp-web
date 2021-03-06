import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {UtilService} from '../../core/utils/util.service';
import {HttpRes, REGEXP} from '../../shared/shared.model';
import {urls} from '../../core/urls.model';
import {getLoginInfo, saveLoginInfo} from '../../core/utils/util-project';
import {required} from '../../core/utils/util-validate';
declare let $: any;

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.less']
})
export class LoginBoxComponent implements OnInit {

  form: FormGroup;
  vcodeBtnText = '发送验证码';
  vcodeBtnDisabled = false;
  timer;

  constructor(private fb: FormBuilder,
              private router: Router,
              private message: NzMessageService,
              private loginService: LoginService,
              private utilService: UtilService) {
  }

  ngOnInit() {
    setTimeout(() => {
      $('#login-name').focus();
    }, 500);
    this.form = this.fb.group({
      loginname: [null, [required]],
      mobile: [null, [required]],
      vcode: [null, [required]],
      ivcode: [null, [required]],
      read: [true, [Validators.requiredTrue]],
    });
  }
  $control(name) {
    return this.form.controls[name];
  }
  $(name) {
    return this.$control(name).value;
  }
  login() {
    // if (this.form.invalid) {
    //   this.form.markAsDirty();
    //   this.form.updateValueAndValidity();
    //   return;
    // }
    this.utilService.get(urls.login).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        saveLoginInfo(res.data);
        this.utilService.getDictionary();
        if (this.$('read')) {
          // 用户是工作专班的还是企业的
          this.router.navigate([`/com/main`]);
        } else {
          this.router.navigate([`/gov/main`]);
        }
      }
    });
  }
  sendVcode() {
    const mobile = this.$('mobile');
    if (!REGEXP.cnMobile.test(mobile)) {
      this.message.error('请填写正确的手机号');
      return;
    }
    // this.utilService.post('vcode', {mobile: this.$('mobile')}).subscribe((res: HttpRes) => {
    //   if (res.code === 200) {
    //     this.message.success('验证码发送成功');
    //   } else {
    //     this.message.error(res.msg);
    //   }
    this.setVcodeBtnText();
    // });
  }
  setVcodeBtnText() {
    clearInterval(this.timer);
    this.vcodeBtnDisabled = true;
    this.vcodeBtnText = '重新获取（59）';
    let second = 59;
    this.timer = setInterval(() => {
      if (second > 0) {
        this.vcodeBtnText = `重新获取（${--second}）`;
      } else {
        this.vcodeBtnDisabled = false;
        this.vcodeBtnText = `获取验证码`;
        clearInterval(this.timer);
      }
    }, 1000);
  }

}
