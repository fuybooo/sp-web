import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-formatter',
  templateUrl: './table-formatter.component.html',
  styleUrls: ['./table-formatter.component.less'],
})
export class TableFormatterComponent implements OnInit{
  @Input() col;
  @Input() data;
  ngOnInit() {}
}
