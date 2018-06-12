interface Option {
  text: string;
  value: any;
}
export interface Column {
  key?: string;
  title?: string;
  field?: string; // 使用field就不要再使用formatter属性
  width?: string | number;
  sortable?: boolean;
  sortField?: string;
  filterable?: boolean;
  filterArray?: Option[];
  filterNotMultiple?: boolean;
  formatter?: string | Function;
  text?: string | string[] | Array<{value: string, visible?: boolean | string, visibleValueList?: any[], type?: string} | string>; // 需要显示的文本
  event?: string | string[];
  textLimit?: number; // 文字长度限制
  link?: string | string[]; // 文本链接
}
