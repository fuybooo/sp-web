import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.less']
})
export class AskComponent implements OnInit {
  op = 'view';
  form;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      f1: ['23422344'],
      f2: ['3464243'],
      f3: ['张三'],
      f4: ['国营'],
      f5: ['北京市朝阳区凤凰汇A座502'],
      f6: ['500万'],
      f7: ['制药'],
    });
  }
  $control(name) {
    return this.form.controls[name];
  }
  $(name) {
    return this.$control(name).value;
  }

}
