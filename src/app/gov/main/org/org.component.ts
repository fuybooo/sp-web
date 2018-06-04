import { Component, OnInit } from '@angular/core';
import {Column} from '../../../shared/component/table/table.model';
import {Router} from '@angular/router';
import {urls} from '../../../core/urls.model';
import {CoreService} from '../../../core/core.service';
import {clearObj} from '../../../core/utils/util-project';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.less']
})
export class OrgComponent implements OnInit {
  url = urls.organizations;
  tableId = 'org-table';
  params: any = {
    groupname: '',
    orgname: '',
    type: '',
  };
  typeList = [
    {
      id: '1',
      name: '类型1'
    },
    {
      id: '2',
      name: '类型2'
    },
    {
      id: '3',
      name: '类型3'
    },
  ];
  columns: Column[] = [
    {
      field: 'groupname',
      title: '组织名称'
    },
    {
      field: 'orgname',
      title: '机构名称'
    },
    {
      field: 'node',
      title: '节点'
    },
    {
      title: '操作',
      text: ['编辑', '删除'],
      event: ['edit', 'delete'],
      link: '/gov/main/org/orgDetail'
    }
  ];
  constructor(
    private router: Router,
    private coreService: CoreService
  ) { }

  ngOnInit() {
  }
  reset() {
    clearObj(this.params);
    this.search();
  }
  search(notFetchConfig?) {
    this.coreService.globalTableEvent.emit({
      tableId: this.tableId,
      params: this.params,
      notFetchConfig
    });
  }
  switchRoute() {
    this.router.navigateByUrl('/gov/main/org/orgDetail/add/0');
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'delete') {
        this.search({
          del: event.data.id
        });
      }
    }
  }
}
