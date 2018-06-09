import {Injectable} from '@angular/core';
import {Column} from './table.model';
import {UtilService} from '../../../core/utils/util.service';
declare let $: any;

@Injectable()
export class TableService {
  showPagination = true;
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
  notFetchConfig; // 不进行远程加载时的配置项

  constructor(private utilService: UtilService) {
  }

  initTable(props) {
    this.params = {}; // 初始化参数
    for (const i in props) {
      if (props.hasOwnProperty(i)) {
        if (i === 'params') {
          Object.assign(this.params, props[i]);
        } else if (i === 'total') {
          if (props[i] !== undefined) {
            this.total = props[i];
          }
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
      if (!this.notFetchConfig) {
        this.search(true);
      } else {
        this.updateDataSet();
      }
    } else {
      this.staticDataSet = $.extend(true, [], this.dataSet);
      this.refreshStatus();
    }
  }

  /**
   * 对数据进行增补操作，无需请求后台
   * notFetchConfig的格式为：
   * 可以为数组也可以为单个数据如：
   * 数组时：
   * {
   * update: [
   *    {
   *      id: event.data.id,
   *      password: '123456'
   *    }
   *  ],
   *    add: [
   *    {
   *      id: 'a',
   *      password: 'b'
   *    }
   *  ],
   *    del: ['']
   * }
   * 单个数据时
   * {
   *   update: {id: '1', password: '123456'},
   *   add: {id: '1', password: '123456'},
   *   del: '1'
   * }
   * 后台逻辑变化
   * add: 后台需要返回新增的数据的id，如果前台需要显示的内容有些是后台创建的，则需要返回整个对象
   * update：一般情况不需要后台特殊处理
   * del：删除一般发生在第一页，此时后台需要返回与删除等量下一页的数据，如果下一页没有数据，则不需要返回
   *      特别注意的是：如果当前页的数据被删除完了，则前台页面可能会出现bug
   */
  updateDataSet() {
    const getList = (list) => {
      if (!(list instanceof Array)) {
        list = [list];
      }
      return list;
    };
    // 删除
    if (this.notFetchConfig.del) {
      let list = getList(this.notFetchConfig.del);
      this.dataSet = [...this.dataSet.filter(d => !list.some(l => l === d[this.key]))];
    }
    // 修改
    if (this.notFetchConfig.update) {
      let list = getList(this.notFetchConfig.update);
      this.dataSet.forEach(d => {
        const obj = list.find(l => l[this.key] === d[this.key]);
        if (obj) {
          obj.checked = false;
          for (const p in obj) {
            if (p !== this.key) {
              d[p] = obj[p];
            }
          }
        }
      });
      this.dataSet = [...this.dataSet];
    }
    // 添加
    if (this.notFetchConfig.add) {
      // 如果是删除之后补齐数据，则在最后添加，否则就是在最前面增加
      let list = getList(this.notFetchConfig.add);
      if (this.notFetchConfig.del) {
        this.dataSet = [...this.dataSet, ...list].slice(0, this.pageSize);
      } else {
        this.dataSet = [...list, ...this.dataSet].slice(0, this.pageSize);
      }
    }
    // 更新总数 如果 this.notFetchConfig.total 有意义，则说明total的变化无规律，是后台传递过来的
    if (this.notFetchConfig.total === 0 || this.notFetchConfig.total) {
      this.total = this.notFetchConfig.total;
    } else {
      // 按照正常情况修改total
      // 如果进行了删除，则直接将total - 删除条数
      if (this.notFetchConfig.del) {
        let list = getList(this.notFetchConfig.del);
        this.total = this.total - list.length;
      } else if (this.notFetchConfig.add) {
        // 如果没有进行删除，只进行修改，则将total + 增加的条数
        let list = getList(this.notFetchConfig.add);
        this.total = this.total + list.length;
      }
    }
    this.refreshStatus();
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
