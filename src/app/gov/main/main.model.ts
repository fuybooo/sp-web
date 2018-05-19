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
    additionalRoutes: [
      {
        route: '/main/rosDetail',
        label: '企业详情'
      }
    ],
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
    additionalRoutes: [
      {
        route: '/main/projCreate',
        label: '新建项目'
      }
    ],
  },
  {
    label: '企业经济数据',
    code: 'economic',
    route: '/main/economic',
    iconCls: {'anticon-api': true},
  },
  {
    label: '项目经济数据',
    code: 'projEconomic',
    route: '/main/projEconomic',
    iconCls: {'anticon-api': true},
  },
  {
    label: '问题办理',
    code: 'question',
    route: '/main/question',
    iconCls: {'anticon-question-circle-o': true},
    additionalRoutes: [
      {
        route: '/main/quesDetail',
        label: '问题督办'
      }
    ],
  },
  {
    label: '信息管理',
    code: 'information',
    route: '/main/information',
    iconCls: {'anticon-appstore-o': true},
    children: [
      {
        label: '工作状态',
        code: 'work',
        route: '/main/information',
      },
      {
        label: '扶持政策',
        code: 'support',
        route: '/main/information/support',
      },
      {
        label: '通知公告',
        code: 'notify',
        route: '/main/information/notify',
      },
      {
        label: '工作进展',
        code: 'progress',
        route: '/main/information/progress',
      },
      {
        label: '督办进展',
        code: 'superviseProgress',
        route: '/main/information/superviseProgress',
      },
    ],
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

