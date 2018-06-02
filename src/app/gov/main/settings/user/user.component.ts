import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../../shared/component/table/table.model';
import {UtilService} from '../../../../core/util.service';
import {CoreService} from '../../../../core/core.service';
import {urls} from '../../../../core/urls.model';
import {HttpRes} from '../../../../shared/shared.model';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  url = urls.users;
  tableId = 'user-table';
  typeList1 = [{id: '1', name: '区1'}];
  typeList2 = [{id: '1', name: '镇1'}];
  typeList3 = [{id: '1', name: '部门1'}];
  params: any = {
    district: '',
    street: '',
    dept: '',
  };
  columns: Column[] = [
    {
      field: 'username',
      title: '姓名'
    },
    {
      field: 'loginname',
      title: '账号'
    },
    {
      field: 'mobile',
      title: '手机'
    },
    {
      field: 'district',
      title: '区县'
    },
    {
      field: 'groupname',
      title: '组织机构'
    },
    {
      title: '操作',
      text: ['编辑', '删除'],
      event: ['edit', 'delete'],
      link: '/gov/main/settings/user/detail'
    }
  ];
  constructor(
    private router: Router,
    private utilService: UtilService,
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
  switchRoute() {
    this.router.navigateByUrl('/gov/main/settings/user/detail/add/0');
  }
  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'delete') {
        this.utilService.delete(this.url, {id: event.data.id}).subscribe((res: HttpRes) => {
          if (res.code === 200) {
            this.message.success('删除成功');
            this.search({
              del: event.data.id
            });
          }
        });
      }
    }
  }
}
