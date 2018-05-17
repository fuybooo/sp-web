export interface Menu {
  label: string;
  code: string;
  route: string;
  additionalRoutes?: any[]; // 路由与菜单不匹配时使用此配置项
  iconCls?: any;
  isActive?: boolean;
  isExpand?: boolean;
  children?: Menu[];
  params?: string;
  hideBreadcrumb?: boolean;
}
export const menuList: Menu[] = [
  {
    label: '首页',
    code: 'home',
    route: '/main',
    iconCls: {'anticon-minus': true},
  },
  {
    label: '问题清单',
    code: 'question',
    route: '/main/question',
    iconCls: {'anticon-minus': true},
  },
  {
    label: '企业信息',
    code: 'information',
    route: '/main/information',
    iconCls: {'anticon-minus': true},
  },
  {
    label: '企业经济数据',
    code: 'economic',
    route: '/main/economic',
    iconCls: {'anticon-minus': true},
  },
];

