import * as format from 'date-fns/format';
export const baseList = [
  {
    value: '',
    label: '请选择'
  },
  {
    value: '1',
    label: '是'
  },
  {
    value: '2',
    label: '否'
  },
];
export const statusList = [
  {
    value: '',
    label: '状态'
  },
  {
    value: '1',
    label: '待处理'
  },
  {
    value: '2',
    label: '已处理'
  },
  {
    value: '3',
    label: '已退回'
  },
];
export const infoStatusList = [
  {
    value: '',
    label: '请选择'
  },
  {
    value: '1',
    label: '已发布'
  },
  {
    value: '2',
    label: '未发布'
  },
];
export const infoTypeList = [
  {
    value: '',
    label: '请选择'
  },
  {
    value: '1',
    label: '工作状态'
  },
  {
    value: '2',
    label: '扶持政策'
  },
  {
    value: '3',
    label: '通知公告'
  },
  {
    value: '4',
    label: '工作进展'
  },
];
export const dateFormatter = (v) => format(new Date(v), 'YYYY-MM-DD');

