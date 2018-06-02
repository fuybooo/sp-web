import * as format from 'date-fns/format';
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
export const dateFormatter = (v) => format(new Date(v), 'YYYY-MM-DD');

