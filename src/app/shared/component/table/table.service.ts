import {EventEmitter, Injectable} from '@angular/core';
import {Column} from './table.model';
import {UtilService} from '../../../core/util.service';
declare let $: any;

@Injectable()
export class TableService {
  allChecked = false;
  indeterminate = false;
  dataSet = [];
  staticDataSet = [];
  loading = false;
  total = 1;
  current = 1;
  pageSize = 10;
  key = 'id';
  sortMap = {};
  filterMap = {};
  url;
  params: any = {};
  commonParams: any = {
    pagenumber: 1,
    pagesize: 10,
    sortfield: '',
    sortorder: ''
  };
  specialTableType; // 特殊菜单补丁
  columns: Column[] = [];
  isCheckbox = true;
  isRadio = false;
  isSortCol = false;
  tableSize = 'small';
  tableId;
  selectDefault;
  refreshStatusChange;
  afterSearch;
  resultKey = 'results';

  constructor(private utilService: UtilService) {
  }

  initTable(props) {
    this.params = {}; // 初始化参数
    for (const i in props) {
      if (props.hasOwnProperty(i)) {
        if (i === 'params') {
          Object.assign(this.params, props[i]);
        } else {
          this[i] = props[i];
        }
      }
    }
    for (const col of this.columns) {
      if (col.field) {
        this.sortMap[col.field] = null;
      }
      if (col.filterable) {
        this.filterMap[col.field] = null;
      }
    }
    if (this.url) {
      this.search(true);
    } else {
      this.staticDataSet = $.extend(true, [], this.dataSet);
      this.refreshStatus();
    }
  }

  refreshStatus() {
    let allChecked;
    if (!this.dataSet.length) {
      this.indeterminate = false;
      this.allChecked = false;
      return;
    }
    if (this.isCheckbox) {
      // 判断是否每一项都被选中
      allChecked = this.dataSet.every(value => value.checked === true);
      // 判断是否每一项都未被选中
      const allUnChecked = this.dataSet.every(value => !value.checked);
      this.allChecked = allChecked;
      // 非全选且非全不选,即有部分项被选中
      this.indeterminate = (!allChecked) && (!allUnChecked);
      if (this.refreshStatusChange) {
        this.refreshStatusChange.emit({
          tableId: this.tableId,
          dataSet: this.dataSet
        });
      }
    }
  }

  checkAll(value) {
    if (value) {
      // 将每一项设为选中
      this.dataSet.forEach(data => data.checked = true);
    } else {
      // 将每一项设为不选中
      this.dataSet.forEach(data => data.checked = false);
    }
    this.refreshStatus();
  }

  search(reset = false) {
    if (reset) {
      this.current = 1;
    }
    this.commonParams.pagenumber = this.current;
    this.commonParams.pagesize = this.pageSize;
    if (this.url) {
      this.loading = true;
      this.utilService.get(this.url, this.params, this.commonParams).subscribe((res: any) => {
        this.loading = false;
        if (res.code === 200) {
          this.dataSet = res.data[this.resultKey] || res.data.results || [];
          this.total = res.data.total;
          // 默认状态
          if (this.selectDefault === 'banks') {
            this.dataSet.forEach(item => {
              if (item.flag === 1) {
                item.isSelected = true;
              }
            });
          }
          this.refreshStatus();
          // 如果需要发送查询完成事件则发送事件
          if (this.afterSearch) {
            this.afterSearch.emit({
              tableId: this.tableId,
              res
            });
          }
        }
      });
    }
  }

  sort(field, value) {
    // 清除其他排序
    for (const f in this.sortMap) {
      if (this.sortMap.hasOwnProperty(f)) {
        this.sortMap[f] = null;
      }
    }
    // 本地数据
    if (!this.url) {
      this.dataSet = [...this.dataSet.sort((a, b) => {
        if (a[field] > b[field]) {
          return (value === 'ascend') ? 1 : -1;
        } else if (a[field] < b[field]) {
          return (value === 'ascend') ? -1 : 1;
        } else {
          return 0;
        }
      })];
    } else {
      // 远程数据
      this.commonParams.sortfield = field;
      this.commonParams.sortorder = value;
      this.search(true);
    }
    this.sortMap[field] = value;
  }

  filterChange(col, $event) {
    const {field, filterNotMultiple} = col;
    if (!this.url) {
      this.dataSet = [...this.staticDataSet.filter((item) => !filterNotMultiple ?
        ($event.length > 0 ? $event.some(v => item[field].indexOf(v) !== -1) : true) : item[field] === $event || !$event)];
    } else {
      // todo 需要再次处理此参数 2018-04-16
      this.params.filterfield = col.field;
      this.params.filtervalue = $event;
      this.search();
    }
  }
  getTdStyle(col) {
    if (col.width) {
      if (typeof col.width === 'number') {
        return {
          width: `${col.width}px`
        };
      } else if (typeof col.width === 'string') {
        return {
          width: col.width
        };
      }
    } else {
      return {};
    }
  }
  handleClickRadio(data) {
    if (this.isRadio) {
      this.dataSet.forEach(item => item.isSelected = item[this.key] === data[this.key]);
      if (this.refreshStatusChange) {
        this.refreshStatusChange.emit({
          tableId: this.tableId,
          dataSet: this.dataSet
        });
      }
    }
  }
}
