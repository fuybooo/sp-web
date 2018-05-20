import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './component/table/table.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonClickDirective} from './directive/button-click.directive';
import { ScrollbarDirective } from './directive/scrollbar.directive';
import {SearchComponent} from './component/search/search.component';
import {TableFormatterComponent} from './component/table/table-formatter/table-formatter.component';
import {TableCellComponent} from './component/table/table-cell/table-cell.component';
import { QueryComponent } from './component/project/query/query.component';

@NgModule({
  imports: [
    // 官方模块
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // 第三方模块
    NgZorroAntdModule,
  ],
  declarations: [
    ButtonClickDirective,
    ScrollbarDirective,
    TableComponent,
    TableFormatterComponent,
    TableCellComponent,
    SearchComponent,
    QueryComponent,
  ],
  entryComponents: [
  ],
  exports: [
    // 官方模块
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // 第三方模块
    NgZorroAntdModule,
    // 本地
    ButtonClickDirective,
    ScrollbarDirective,
    TableComponent,
    SearchComponent,
    QueryComponent,
  ],
})
export class SharedModule { }
