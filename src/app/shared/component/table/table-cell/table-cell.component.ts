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

  rateVisible = false;

  checkQuestionHandleOptions = [
    {
      label: '邮件',
      value: 1,
      checked: true
    },
    {
      label: 'APP消息',
      value: 2,
    },
    {
      label: '短信',
      value: 3,
    },
    {
      label: '在线消息',
      value: 4,
    },
  ];
  ngOnInit() {
  }
  isNotString(value) {
    return typeof value !== 'string';
  }
  getFormatText(col, data) {
    return col.formatter(data[col.field || data[col.key]], data);
  }
  emitEvent(col, data, event?) {
    this.eventChange.emit({tableId: this.tableId, col, data, event});
  }
  handlePopoverValueCancel() {
    this.rateVisible = false;
  }
  handlePopoverValueOk(col, data, event) {
    this.emitEvent(col, data, {event, checkQuestionHandleOptions: this.checkQuestionHandleOptions});
    this.rateVisible = false;
  }
}
