import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Column} from './table.model';
import {TableService} from './table.service';
import {CoreService} from '../../../core/core.service';
import {UtilService} from '../../../core/util.service';

/**
 * app-table组件，只适用于没有任何自定义事件的表格
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [TableService]
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() url;
  @Input() params: any = {};
  @Input() columns: Column[] = [];
  @Input() dataSet = [];
  @Input() isCheckbox = true;
  @Input() isRadio = false;
  @Input() key = 'id';
  @Input() tableSize = 'small';
  @Input() tableId;
  @Input() selectDefault; // 让数据中的flag字段值为1的数据默认变为选中状态
  @Input() resultKey = 'results';
  @Input() specialTableType;
  @Output() refreshStatusChange = new EventEmitter(); // 改变选中状态时发射事件
  @Output() afterSearch = new EventEmitter(); // 完成查询时发射事件
  @Output() eventChange = new EventEmitter(); // 自定义事件
  subscript;
  specialPropRate = '';
  rateVisible: boolean;
  constructor(
    public tableService: TableService,
    public coreService: CoreService,
  ) {}

  ngOnInit() {
    this.initTable();
    /* 订阅全局的表格事件 */
    this.subscript = this.coreService.globalTableEvent.subscribe((event: any) => {
      if (event.tableId && event.tableId === this.tableId) {
        if (event.params) {
          this.params = event.params;
        }
        if (event.dataSet) {
          this.dataSet = event.dataSet;
        }
        if (event.url) {
          this.url = event.url;
        }
        if (event.columns) {
          this.columns = event.columns;
        }
        if (event.resultKey) {
          this.resultKey = event.resultKey;
        }
        this.initTable();
      }
    });
  }
  ngOnDestroy() {
    if (this.subscript) {
      this.subscript.unsubscribe();
    }
  }
  initTable() {
    this.tableService.initTable({
      url: this.url,
      params: this.params,
      columns: this.columns,
      dataSet: this.dataSet,
      isCheckbox: this.isCheckbox,
      isRadio: this.isRadio,
      key: this.key,
      resultKey: this.resultKey,
      tableSize: this.tableSize,
      tableId: this.tableId,
      selectDefault: this.selectDefault,
      refreshStatusChange: this.refreshStatusChange,
      afterSearch: this.afterSearch,
      eventChange: this.eventChange,
      specialTableType: this.specialTableType,
    });
  }
  //
  // getHref(col, data) {
  //   const params = col.linkParam ? ('/' + col.linkParam.split(',').map(field => data[field]).join('/')) : '';
  //   return `/#${col.link}${params}`;
  // }
  isFormatText(col) {
    return typeof col.formatter !== 'string';
  }
  getFormatText(col, data) {
    return col.formatter(data[col.field || data[col.key]], data);
  }
}
