import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Column} from '../../../shared/component/table/table.model';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ImportFileComponent} from '../../../shared/component/project/import-file/import-file.component';
import {CoreService} from '../../../core/core.service';
import {urls} from '../../../core/urls.model';
import {baseList} from '../../../core/common.model';
import * as format from 'date-fns/format';
import {HttpRes} from '../../../shared/shared.model';
import {UtilService} from '../../../core/utils/util.service';
import {getModalFooter} from '../../../core/utils/util-component';
import {getValueList} from '../../../core/utils/util-fns';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
  url = urls.accounts;
  params: any = {
    district: '',
    street: '',
    isaccountcreated: '',
    isinfoconfirmed: '',
    name: '',
    orgcode: '',
  };
  dateRange = [];
  tableId = 'account-table';
  dataSet = [];
  checkedList = [];
  columns: Column[] = [
    {
      field: 'name',
      title: '企业名称'
    },
    {
      field: 'district',
      title: '所属区'
    },
    {
      field: 'street',
      title: '所属街道'
    },
    {
      field: 'orgcode',
      title: '组织机构代码'
    },
    {
      field: 'isaccountcreated',
      title: '账户是否创建',
      formatter: (v) => v === '0' ? '否' : '是'
    },
    {
      field: 'isinfoconfirmed',
      title: '企业信息是否确认',
      formatter: (v) => v === '0' ? '否' : '是'
    },
    {
      field: 'password',
      title: '初始密码'
    },
    {
      field: 'time',
      title: '创建时间'
    },
    {
      title: '操作',
      text: ['重置密码'],
      event: ['reset'],
      link: '/gov/main/account/detail'
    }
  ];
  typeList1 = [{id: '1', name: '区1'}];
  typeList2 = [{id: '1', name: '镇1'}];
  baseList = baseList;
  constructor(
    private router: Router,
    private modalService: NzModalService,
    private message: NzMessageService,
    private coreService: CoreService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }
  search(notFetchConfig?) {
    this.coreService.globalTableEvent.emit({
      tableId: this.tableId,
      params: this.getParams(),
      notFetchConfig
    });
  }
  getParams() {
    this.params.startdate = this.dateRange[0] ? format(new Date(this.dateRange[0]), 'YYYY-MM-DD') : '';
    this.params.enddate = this.dateRange[1] ? format(new Date(this.dateRange[1]), 'YYYY-MM-DD') : '';
    return this.params;
  }
  refreshStatusChange(event) {
    if (event.tableId === this.tableId) {
      this.checkedList = event.dataSet.filter(item => item.checked);
    }
  }
  createAccount() {
    if (!this.checkedList.length) {
      this.message.error('请选择数据');
      return;
    }
    this.utilService.put(this.url, {idlist: getValueList(this.checkedList)}).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        this.message.success('创建成功');
        this.search({
          update: this.checkedList.map(item => ({
            id: item.id,
            isaccountcreated: '1'
          }))
        });
      }
    });
  }

  eventChange(event) {
    if (event.tableId === this.tableId) {
      if (event.event === 'reset') {
        this.search({
          update: {
            id: event.data.id,
            password: '123456'
          }
        });
      }
    }
  }
  popImportFile() {
    const modal = this.modalService.create({
      nzTitle: '导入企业信息',
      nzContent: ImportFileComponent,
      nzFooter: getModalFooter((_modal) => {
        if (_modal.file) {
          this.message.success('上传成功');
          modal.destroy();
        } else {
          this.message.error('请选择文件');
        }
      }, () => modal.destroy())
    });
  }
}
