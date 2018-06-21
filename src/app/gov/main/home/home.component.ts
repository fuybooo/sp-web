import { Component, OnInit } from '@angular/core';
import * as echart from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import {guid} from '../../../core/utils/util-fns';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  params = {};
  tableId = guid();
  constructor() { }

  ngOnInit() {
    echart.init($('#home-use')[0]).setOption({
      series: [
        {
          name: '问题解决率',
          type: 'pie',
          radius: ['70%', '90%'],
          legendHoverLink: false,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          clockwise: false,
          startAngle: 270,
          label: {
            normal: {
              show: true,
              position: 'center',
              fontSize: 36,
              padding: [0, 0, 20, 0],
              formatter: params => {
                if (params.dataIndex === 0) {
                  return params.percent + '%';
                }}
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [ 25, 100 - 25]
        }
      ],
      color: ['#85ce3f', '#eee'],
    });
  }

}
