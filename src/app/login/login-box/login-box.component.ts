import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {UtilService} from '../../core/util.service';
import {HttpRes, REGEXP} from '../../shared/shared.model';
import {environment} from '../../../environments/environment';
import {urls} from '../../core/urls.model';
declare let $: any;

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.less']
})
export class LoginBoxComponent implements OnInit {

  form: FormGroup;
  validResult = false;
  loginType = 1;
  showPassword = false;
  showSlider = false;
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
    $('#login-name').focus();
    const cookies = UtilService.getLoginInfo();
    const token = cookies.token;
    this.form = this.fb.group({
      loginname: [token ? cookies.loginname : ''],
      mobile: [token ? cookies.mobile : ''],
      password: [''],
      validatorcode: [''],
      remember: [!!token],
    });
    this.switchLoginType(1);
    this.initSlider();
  }
  switchLoginType(type) {
    this.loginType = type;
    if (this.loginType === 1) {
      this.$control('mobile').clearValidators();
      this.$control('validatorcode').clearValidators();
      this.$control('loginname').setValidators(Validators.required);
      this.$control('password').setValidators(Validators.required);
    } else if (this.loginType === 2) {
      this.$control('loginname').clearValidators();
      this.$control('password').clearValidators();
      this.$control('mobile').setValidators(Validators.required);
      this.$control('validatorcode').setValidators(Validators.required);
    }
  }
  initSlider() {
    $('#login-slider-valid').slider({
      width: 268,
      height: 38,
      callback: (result) => {
        this.validResult = result;
      }
    });
  }
  resetSlider() {
    $('#login-slider-valid').slider('restore');
  }
  clearValue(name, template, template2?) {
    if (name) {
      this.$control(name).setValue('');
    }
    if (template) {
      template.focus();
    }
    if (this.showPassword && template2) {
      template2.focus();
    }
  }
  $control(name) {
    return this.form.controls[name];
  }
  $(name) {
    return this.$control(name).value;
  }
  login() {
    this.utilService.get(urls.login).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        UtilService.saveLoginInfo({username: 'fuybooo', token: '1'});
        if (this.$('remember')) {
          // 用户是工作专班的还是企业的
          this.router.navigate([`/com/main`]);
        } else {
          this.router.navigate([`/gov/main`]);
        }
      }
    });
  }
  forget() {
    this.resetSlider();
    this.validResult = false;
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
