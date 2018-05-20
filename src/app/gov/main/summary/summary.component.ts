import {Component, OnInit} from '@angular/core';
import * as echart from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

declare let $: any;

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  chartList = [];
  questionClassifyList = [];
  timer;

  constructor() {
  }

  ngOnInit() {
    this.initChart();
    this.initQuestionClassifyList();
  }

  initChart() {
    const classifyList = ['人才用工', '用地需求', '环境保护', '安全生产', '资金保障', '公用设施', '行政审批', '公共服务', '其他'];
    this.chartList = classifyList;
    const classify = echart.init($('#summary-question-classify')[0]);
    classify.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data: ['解决件数', '问题件数']
      },
      xAxis: [
        {
          type: 'category',
          data: classifyList,
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '问题件数',
          axisLabel: {
            formatter: '{value} 件'
          }
        }
      ],
      series: [
        {
          name: '解决件数',
          type: 'bar',
          data: [12, 12, 22, 11, 32, 12, 2, 3, 5]
        },
        {
          name: '问题件数',
          type: 'bar',
          data: [32, 43, 55, 62, 76, 87, 38, 49, 23]
        },
      ],
      color: ['#81c145', '#ef7a28']
    });
    this.timer = setInterval(() => {
      if ($('#rate-0')[0]) {
        clearInterval(this.timer);
        this.chartList.forEach((item, i) => {
          const classifyRate = echart.init($('#rate-' + i)[0]);
          classifyRate.setOption({
            title: {
              text: item,
              bottom: 0,
              left: 'center',
              textStyle: {
                fontSize: 14,
                color: 'rgba(0,0,0,.45)'
              }
            },
            series: [{
              name: '问题解决率',
              type: 'pie',
              radius: ['50%', '70%'],
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
                    }
                  }
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [25, 100 - 25]
            }],
            color: ['#d2292c', '#eee'],
          });
        });
      }
    });
    window.onresize = classify.resize;
  }

  initQuestionClassifyList() {
    this.questionClassifyList = Array(20).fill(0).map(() => ({
      name: '石家庄',
      number: 2
    }));
  }

}
