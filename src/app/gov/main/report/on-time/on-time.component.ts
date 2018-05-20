import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-time',
  templateUrl: './on-time.component.html',
  styleUrls: ['./on-time.component.less']
})
export class OnTimeComponent implements OnInit {
  colKeys = ['f1', 'f2', 'f3', 'f4'];
  constructor() { }

  ngOnInit() {
  }

}
