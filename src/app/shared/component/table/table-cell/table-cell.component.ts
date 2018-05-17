import {Component, Input, OnInit} from '@angular/core';
import {UtilService} from '../../../../core/util.service';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.less'],
})
export class TableCellComponent implements OnInit {
  @Input() col;
  @Input() data;
  @Input() tableService;
  @Input() eventChange;
  @Input() tableId;
  postList = [];
  rateVisible = false;
  specialPropRate;
  ngOnInit() {
    UtilService.executeFn(() => this.postList = UtilService.dictionary.DEPT_POST);
  }
  /**
   * 根据code获取name
   * @param code
   * @param type
   */
  getNameByCode(code, type) {
    let list = [];
    if (type === 'POST') {
      list = this.postList;
    }
    return UtilService.getPropValue(list, code, 'code', 'name');
  }

  getSortedList(list, type) {
    let arrayList = []; // 业务list 如: 岗位list
    if (type === 'POST') {
      arrayList = this.postList;
    }
    let array = list.map(item => UtilService.getPropValue(arrayList, item, 'code', 'name'));
    array.sort();
    return array;
  }

  /**
   * 发送特殊事件
   */
  emitEvent(col, data, realEvent?) {
    this.eventChange.emit({
      tableId: this.tableId,
      col,
      data,
      realEvent
    });
  }

  handleRateCancel() {
    this.rateVisible = false;
  }
  handleRateOk(col, data) {
    // todo 验证 specialPropRate
    this.emitEvent(col, {...data, specialPropRate: this.specialPropRate});
    this.rateVisible = false;
  }
  isFormatText(col) {
    return typeof col.formatter !== 'string';
  }
  getFormatText(col, data) {
    return col.formatter(data[col.field || data[col.key]], data);
  }
}
