import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
  op;
  form;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.op = this.route.snapshot.params.op;
    this.form = this.fb.group({
      f2: [''],
      f3: ['']
    });
  }
  back() {
    history.back();
  }
  save() {
    // 执行保存
  }

}
