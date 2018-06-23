import {Component, Input, OnInit} from '@angular/core';
import {urls} from '../../../../../core/urls.model';
import {Column} from '../../../../../shared/component/table/table.model';
import {dateFormatter} from '../../../../../core/common.model';
import {UtilService} from '../../../../../core/utils/util.service';
import {getDicValue} from '../../../../../core/utils/util-fns';

@Component({
  selector: 'app-question-list-content',
  templateUrl: './question-list-content.component.html',
  styleUrls: ['./question-list-content.component.less']
})
export class QuestionListContentComponent implements OnInit {
  @Input() params;
  @Input() tableId;
  @Input() showPagination = true;
  url = urls.questions;
  issueTypeList = [];
  columns: Column[] = [
    {
      field: 'componayname',
      title: '企业名称'
    },
    {
      field: 'issuetypecode',
      title: '问题类型',
      formatter: v => getDicValue(this.issueTypeList, v)
    },
    {
      field: 'content',
      title: '具体问题'
    },
    {
      field: 'createtime',
      title: '提交时间',
      formatter: dateFormatter
    },
    {
      field: 'status',
      title: '状态'
    },
    {
      title: '操作',
      text: ['查看', {value: '改为满意', visible: 'status', visibleValueList: ['1'], type: 'changeRate'}], // 额外的判断是否显示
      event: ['view', 'changeRate'],
      link: '/gov/main/question/quesDetail'
    }
  ];
  constructor() { }

  ngOnInit() {
    UtilService.getDic(() => this.issueTypeList = UtilService.dictionaries.ISSUE_TYPE);
  }
  eventChange(event) {
  }
}
