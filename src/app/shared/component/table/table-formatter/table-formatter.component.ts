import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-formatter',
  templateUrl: './table-formatter.component.html',
  styleUrls: ['./table-formatter.component.less'],
})
export class TableFormatterComponent implements OnInit {
  @Input() col;
  @Input() data;
  @Input() type;
  @Input() ev;
  @Input() evi;
  @Input() emitEvent;
  popVisible = false;
  delPopVisible = false;
  ngOnInit() {}
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
