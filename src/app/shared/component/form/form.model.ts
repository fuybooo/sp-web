declare type controlValidatorType = 'required' | 'maxlength' | 'minlength' | 'mistake';
declare type controlType = undefined | 'text' | 'select' | 'checkbox' | 'radio' | 'custom';
interface ControlValidator {
  type: controlValidatorType; // 验证类型
  value?: RegExp | number; // 验证类型附加值，最大最小值，验证正则等
  notAllow?: boolean; // 验证正则时的规则
  text?: string; // 验证提示语
}
export interface FormConfigItem {
  type?: controlType; // 控件类别，不传值时默认为text
  label: string; // 控件label
  field: string; // 控件字段
  defaultValue?: any; // 控件默认值
  validators?: ControlValidator[]; // 控件验证规则
  // select
  list?: any[]; // 传入的列表
  nzValueField?: string; // value所在字段
  nzLabelField?: string; // label所在字段
  // custom
  custom?: string; // 自定义下拉框的特殊标志
}
