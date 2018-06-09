import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';
import {dateFormatter, infoStatusList, infoTypeList} from '../../../core/common.model';
import {CoreService} from '../../../core/core.service';
import {urls} from '../../../core/urls.model';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {
  url = urls.infos;
  statusList = infoStatusList;
  infoTypeList = infoTypeList;
  dateRange = [];
  columns: Column[] = [
    {
      field: 'title',
      title: '标题'
    },
    {
      field: 'date',
      title: '编辑时间',
      formatter: dateFormatter
    },
    {
      field: 'username',
      title: '编辑人'
    },
    {
      field: 'status',
      title: '状态'
    },
    {
      field: 'infotype',
      title: '信息分类'
    },
    {
      title: '操作',
      text: ['编辑', {value: '删除', visible: 'status'}],
      event: ['edit', 'delete'],
      link: '/gov/main/information/detail'
    }
  ];
  tableId = 'work-list';
  params = {
    status: '',
    indextype: ''
  };
  constructor(
    private router: Router,
    private coreService: CoreService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
  }
  search(notFetchConfig?) {
    this.coreService.globalTableEvent.emit({
      tableId: this.tableId,
      params: this.params,
      notFetchConfig
    });
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'delete') {
        // 执行删除
        this.search({
          del: event.data.id
        });
        this.message.success('删除成功');
      }
    }
  }
  switchRoute() {
    this.router.navigateByUrl('/gov/main/information/detail/add/0');
  }
}
