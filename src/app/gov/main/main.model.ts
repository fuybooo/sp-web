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
    iconCls: {'anticon-home': true},
  },
  {
    label: '企业分类花名册',
    code: 'roster',
    route: '/main/roster',
    iconCls: {'anticon-book': true},
  },
  {
    label: '企业综合情况卡',
    code: 'situation',
    route: '/main/situation',
    iconCls: {'anticon-credit-card': true},
  },
  {
    label: '项目管理',
    code: 'project',
    route: '/main/project',
    iconCls: {'anticon-profile': true},
  },
  {
    label: '企业经济数据',
    code: 'economic',
    route: '/main/economic',
    iconCls: {'anticon-api': true},
  },
  {
    label: '问题办理',
    code: 'question',
    route: '/main/question',
    iconCls: {'anticon-question-circle-o': true},
  },
  {
    label: '信息管理',
    code: 'information',
    route: '/main/information',
    iconCls: {'anticon-appstore-o': true},
  },
  {
    label: '工作汇总',
    code: 'summary',
    route: '/main/summary',
    iconCls: {'anticon-bars': true},
  },
  {
    label: '考核指标统计',
    code: 'assessment',
    route: '/main/assessment',
    iconCls: {'anticon-bar-chart': true},
  },
  {
    label: '分类统计',
    code: 'classify',
    route: '/main/classify',
    iconCls: {'anticon-pie-chart': true},
  },
];

