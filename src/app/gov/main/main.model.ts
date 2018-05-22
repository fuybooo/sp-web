import {Column} from '../../shared/component/table/table.model';

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
  // {
  //   label: '项目管理',
  //   code: 'project',
  //   route: '/main/project',
  //   iconCls: {'anticon-profile': true},
  //   additionalRoutes: [
  //     {
  //       route: '/main/projCreate',
  //       label: '新建项目'
  //     }
  //   ],
  // },
  {
    label: '企业经济数据',
    code: 'economic',
    route: '/main/economic',
    iconCls: {'anticon-api': true},
  },
  // {
  //   label: '项目经济数据',
  //   code: 'projEconomic',
  //   route: '/main/projEconomic',
  //   iconCls: {'anticon-api': true},
  // },
  {
    label: '问题办理',
    code: 'question',
    route: '/main/question',
    iconCls: {'anticon-question-circle-o': true},
    children: [
      {
        label: '问题清单',
        code: 'quesList',
        route: '/main/question/list',
      },
      {
        label: '问题督办',
        code: 'quesHandle',
        route: '/main/question/handle',
        additionalRoutes: [
          {
            route: '/main/question/quesDetail',
            label: '问题督办详情'
          }
        ],
      },
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
    code: 'report',
    route: '/main/report',
    iconCls: {'anticon-bar-chart': true},
    children: [
      {
        label: '各市按时接办率',
        code: 'onTime',
        route: '/main/report/onTime',
      },
      {
        label: '各市问题收集率',
        code: 'questionCollection',
        route: '/main/report/questionCollection',
      },
      {
        label: '各市问题解决率',
        code: 'questionResolve',
        route: '/main/report/questionResolve',
      },
      {
        label: '各市问题满意率',
        code: 'questionSatisfy',
        route: '/main/report/questionSatisfy',
      },
      {
        label: '各职能部门按时接办率',
        code: 'deptOnTime',
        route: '/main/report/deptOnTime',
      },
      {
        label: '省职单位问题处理解决率',
        code: 'provinceQuestionResolve',
        route: '/main/report/provinceQuestionResolve',
      },
      {
        label: '省职单位问题处理满意率',
        code: 'provinceQuestionSatisfy',
        route: '/main/report/provinceQuestionSatisfy',
      },
    ]
  },
  {
    label: '分类统计',
    code: 'classify',
    route: '/main/classify',
    iconCls: {'anticon-pie-chart': true},
    children: [
      {
        label: '各市企业三级三类统计表',
        code: 'threeClassThreeStatistical',
        route: '/main/classify/threeClassThreeStatistical',
      },
      {
        label: '各市企业分类统计表',
        code: 'classify',
        route: '/main/classify/classify',
      },
      {
        label: '各市企业开通率统计表',
        code: 'secondaryOpenRate',
        route: '/main/classify/secondaryOpenRate',
      },
      {
        label: '省职单位问题分类统计表',
        code: 'provinceQuestionClassify',
        route: '/main/classify/provinceQuestionClassify',
      },
      {
        label: '企业分类及问题需求统计表',
        code: 'classAndQuestionDemand',
        route: '/main/classify/classAndQuestionDemand',
      },
      {
        label: '企业三级三类分类统计表',
        code: 'threeClassThreeStatisticalClassify',
        route: '/main/classify/threeClassThreeStatisticalClassify',
      },
      {
        label: '问题超时统计表',
        code: 'questionTimeout',
        route: '/main/classify/questionTimeout',
      },
      {
        label: '双万双服企业创新调查情况汇总表',
        code: 'investigation',
        route: '/main/classify/investigation',
      },
    ]
  },
  {
    label: '组织机构管理',
    code: 'org',
    route: '/main/org',
    iconCls: {'anticon-team': true},
    additionalRoutes: [
      {
        label: '组织机构详情',
        code: 'orgDetail',
        route: '/main/org/orgDetail'
      }
    ]
  },
  {
    label: '企业账户管理',
    code: 'account',
    route: '/main/account',
    iconCls: {'anticon-profile': true},
  },
  {
    label: '系统设置',
    code: 'settings',
    route: '/main/settings',
    iconCls: {'anticon-setting': true},
    children: [
      {
        label: '督办机构设置',
        code: 'superviseSettings',
        route: '/main/settings/superviseSettings',
        additionalRoutes: [
          {
            label: '督办机构详情',
            code: 'superviseSettingsDetail',
            route: '/main/settings/superviseSettings/detail'
          }
        ]
      },
      {
        label: '问题处置设置',
        code: 'questionHandleSettings',
        route: '/main/settings/questionHandleSettings',
      },
    ]
  },
];

export const reportColumns: Column[] = [
  {
    field: 'f1',
    title: '区划'
  },
  {
    field: 'f2',
    title: '15日内办结率（%）'
  },
  {
    field: 'f3',
    title: '其中7日内办结率（%）'
  },
  {
    field: 'f4',
    title: '超15日内办结率（%）'
  },
  {
    field: 'f5',
    title: '有效问题数（条）'
  },
  {
    field: 'f6',
    title: '本区划企业数（条）'
  },
  {
    field: 'f7',
    title: '收集率（%）'
  },
  {
    field: 'f8',
    title: '已解决问题数（条）'
  },
  {
    field: 'f9',
    title: '问题总数（条）'
  },
  {
    field: 'f10',
    title: '问题解决率（%）'
  },
  {
    field: 'f11',
    title: '已办结（条）'
  },
  {
    field: 'f12',
    title: '满意数（条）'
  },
  {
    field: 'f13',
    title: '不满意数（条）'
  },
  {
    field: 'f14',
    title: '满意率（%）'
  },
  {
    field: 'f15',
    title: '市职能部门'
  },
  {
    field: 'f16',
    title: '省职单位名称'
  },
  {
    field: 'f17',
    title: '本部门受理数（条）'
  },
  {
    field: 'f18',
    title: '未解决问题数（条）'
  },
];
