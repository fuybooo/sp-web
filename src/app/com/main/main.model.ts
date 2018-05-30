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
    route: '/com/main',
    iconCls: {'anticon-home': true},
  },
  {
    label: '问题清单',
    code: 'question',
    route: '/com/main/question',
    iconCls: {'anticon-bars': true},
    additionalRoutes: [
      {
        label: '我要提问',
        code: 'ask',
        route: '/com/main/question/ask',
      },
      {
        label: '问题详情',
        code: 'question-detail',
        route: '/com/main/question/detail',
      }
    ]
  },
  {
    label: '企业信息',
    code: 'information',
    route: '/com/main/information',
    iconCls: {'anticon-appstore-o': true},
  },
  // {
  //   label: '企业经济数据',
  //   code: 'economic',
  //   route: '/com/main/economic',
  //   iconCls: {'anticon-api': true},
  //   additionalRoutes: [
  //     {
  //       label: '增加企业经济数据',
  //       code: 'add-economic-data',
  //       route: '/com/main/economic/detail',
  //     },
  //   ]
  // },
];
