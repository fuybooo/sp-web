import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept-on-time',
  templateUrl: './dept-on-time.component.html',
  styleUrls: ['./dept-on-time.component.less']
})
export class DeptOnTimeComponent implements OnInit {
  colKeys = ['f15', 'f2', 'f3', 'f4'];

  constructor() { }

  ngOnInit() {
  }

}
