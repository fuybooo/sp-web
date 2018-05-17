interface Option {
  text: string;
  value: any;
}
export interface Column {
  key?: string;
  title?: string;
  field?: string; // 使用field就不要再使用formatter属性
  width?: string | number;
  checkbox?: boolean;
  sortable?: boolean;
  sortField?: string;
  filterable?: boolean;
  filterArray?: Option[];
  filterNotMultiple?: boolean;
  isFormatterText?: boolean; // 是否只是格式化为文本(非html代码)
  formatter?: any; // 使用formatter就不要再使用field属性
  searchable?: boolean;
  operateType?: string; // 自定义操作列的类型
  defaultField?: string; // 是否默认所需字段
  specialHead?: string; // 特殊头部的类型（operateType中的一种）
  link?: string; // 使用link属性就不要再使用formatter，field，isOperate属性
  linkParam?: string; // 使用linkParam就必须要使用link属性
  text?: string; // 需要显示的固定的文本
  hasEdit?: boolean;
  extraEvent?: string; // 使用field或者formatter渲染之后额外需要添加的特殊事件
  expandHide?: boolean; // 展开的数据是否需要隐藏
  textLimit?: number; // 文字长度限制
}
