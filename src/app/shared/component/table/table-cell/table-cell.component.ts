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

  popVisible = false;
  delPopVisible = false;

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
    this.popVisible = false;
    this.delPopVisible = false;
  }
  handlePopoverValueOk(col, data, event) {
    this.emitEvent(col, data, event);
    this.popVisible = false;
    this.delPopVisible = false;
  }
}
