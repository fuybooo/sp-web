import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {
  op = 'view';
  form;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      f1: [''],
      f2: [''],
      f3: [''],
      f4: [''],
      f5: [''],
      f6: [''],
      f7: [''],
      f8: [''],
      f9: [''],
      f10: [''],
      f11: [''],
      f12: [''],
      f14: [''],
      f15: [''],
      f16: [''],
      f17: [''],
    });
  }
  $control(name) {
    return this.form.controls[name];
  }
  $(name) {
    return this.$control(name).value;
  }

}
