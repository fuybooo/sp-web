import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.less']
})
export class EconomicComponent implements OnInit {
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
    });
  }
}
