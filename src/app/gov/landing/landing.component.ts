import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  data = [
    {
      title: '市国土房管局关于优化我市营商环境进一步提高不动产登记效率的通知',
      from: '市国土房管局',
      time: '2018-05-22'
    },
    {
      title: '市国土房管局关于优化我市营商环境进一步提高不动产登记效率的通知',
      from: '市国土房管局',
      time: '2018-05-22'
    },
    {
      title: '市国土房管局关于优化我市营商环境进一步提高不动产登记效率的通知',
      from: '市国土房管局',
      time: '2018-05-22'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
