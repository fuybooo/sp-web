import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-economic-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

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
