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
      f1: ['中国山东兰新制药厂'],
      f2: ['医药'],
      f3: ['322343'],
      f4: ['sx2342424'],
      f5: ['829349'],
      f6: ['dklfowoer24234'],
      f7: ['22039887333'],
      f8: ['在运营'],
      f9: ['控股'],
      f10: ['500万'],
      f11: ['2018-05-12'],
      f12: ['张三'],
      f14: ['民营'],
      f15: ['中小型'],
      f16: ['国家制药局'],
      f17: ['制药'],
    });
  }
  $control(name) {
    return this.form.controls[name];
  }
  $(name) {
    return this.$control(name).value;
  }

}
