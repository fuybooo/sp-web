import { Component, OnInit } from '@angular/core';
import {REGEXP} from '../../../shared/shared.model';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-bind-phone',
  templateUrl: './bind-phone.component.html',
  styleUrls: ['./bind-phone.component.less']
})
export class BindPhoneComponent implements OnInit {
  form;
  timer;
  vcodeBtnDisabled;
  vcodeBtnText = '获取验证码';
  constructor(
    private message: NzMessageService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      phone: [],
      vcode: []
    });
  }
  $control(name) {
    return this.form.controls[name];
  }
  $(name) {
    return this.$control(name).value;
  }
  sendVcode() {
    const phone = this.$('phone');
    if (!REGEXP.cnMobile.test(phone)) {
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
