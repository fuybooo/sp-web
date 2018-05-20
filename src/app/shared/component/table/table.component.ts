import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Column} from './table.model';
import {TableService} from './table.service';
import {CoreService} from '../../../core/core.service';

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
  @Input() isCheckbox = true; // 是否显示多选
  @Input() isRadio = false; // 是否显示单选
  @Input() isSortCol = false; // 是否显示序号
  @Input() key = 'id'; // 数据的主键
  @Input() tableSize = 'small';
  @Input() tableId; // 表格的唯一标识
  @Input() selectDefault; // 让数据中的flag字段值为1的数据默认变为选中状态
  @Input() resultKey = 'results'; // 返回结果中list数据的key
  @Input() specialTableType; // 特殊的表格 -- 返回数据之后需要对数据进行特殊处理的情况
  @Output() refreshStatusChange = new EventEmitter(); // 改变选中状态时发射事件
  @Output() afterSearch = new EventEmitter(); // 完成查询时发射事件
  @Output() eventChange = new EventEmitter(); // 自定义事件
  subscript;
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
      isSortCol: this.isSortCol,
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
}
