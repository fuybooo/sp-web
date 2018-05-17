export interface Nav {
  isHome?: boolean;
  label: string;
  code: string;
  visible: boolean;
  route: string;
  isActive?: boolean;
}
export const navList: Nav[] = [
  {
    isHome: true,
    label: '首页',
    code: 'home',
    visible: true,
    route: '/main',
  },
  {
    label: '预算管理',
    code: 'budget',
    visible: true,
    route: '/main/budget'
  },
  {
    label: '财务管理',
    code: 'financial',
    visible: true,
    route: '/main/financial'
  },
  {
    label: '报表分析',
    code: 'report',
    visible: true,
    route: '/main/report'
  },
  {
    label: '基础配置',
    code: 'business',
    visible: true,
    route: '/main/business'
  },
];
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
export const businessMenuList: Menu[] = [
  {
    label: '配置向导',
    code: 'guide',
    route: '/main/business',
    iconCls: {'icon-uk-setting': true},
    hideBreadcrumb: true,
  },
  {
    label: '授权管理',
    code: 'authorization',
    route: '/main/business/authorization',
    iconCls: {'icon-uk-empower': true},
    children: [
      {
        label: '功能授权清单',
        code: 'function',
        route: '/main/business/authorization',
      },
      {
        label: '购买历史记录',
        code: 'history',
        route: '/main/business/authorization/history',
      },
      {
        label: '数据解锁权限',
        code: 'lock',
        route: '/main/business/authorization/lock',
      },
    ]
  },
  {
    label: '基础档案',
    code: 'basic',
    route: '/main/business/basic',
    iconCls: {'icon-uk-files': true},
    children: [
      {
        label: '机构部门',
        code: 'org',
        route: '/main/business/basic',
        additionalRoutes: [
          {
            route: '/main/business/basic/orgInfo',
            label: '机构信息'
          }
        ],
        params: '/0/0'
      },
      {
        label: '用户管理',
        code: 'user',
        route: '/main/business/basic/user',
        additionalRoutes: [
          {
            route: '/main/business/basic/userDetail',
            label: '用户详情'
          }
        ],
      },
      {
        label: '支付类档案',
        code: 'payment',
        route: '/main/business/basic/payment',
        additionalRoutes: [
          {
            route: '/main/business/basic/supplierDetail',
            label: '供应商详情'
          }
        ],
      },
      {
        label: '费用类档案',
        code: 'cost',
        route: '/main/business/basic/cost',
      },
      {
        label: '商旅类档案',
        code: 'travel',
        route: '/main/business/basic/travel',
      },
      {
        label: '其他类档案',
        code: 'other',
        route: '/main/business/basic/other',
      },
      {
        label: '自定义档案',
        code: 'custom',
        route: '/main/business/basic/custom',
      },
    ]
  },
  {
    label: '权限管理',
    code: 'authority',
    route: '/main/business/authority',
    iconCls: {'icon-uk-permissions': true},
    children: [
      {
        label: '登陆权限',
        code: 'login',
        route: '/main/business/authority',
      },
      {
        label: '填单权限',
        code: 'fill',
        route: '/main/business/authority/fill',
      },
      {
        label: '查询权限',
        code: 'query',
        route: '/main/business/authority/query',
      },
      {
        label: '特殊菜单',
        code: 'special',
        route: '/main/business/authority/special',
      },
    ]
  },
  {
    label: '流程管理',
    code: 'process',
    route: '/main/business/process',
    iconCls: {'icon-uk-proccess': true},
  },
  {
    label: '系统模板',
    code: 'mall',
    route: '/main/business/template',
    iconCls: {'icon-uk-template': true},
    children: [
      {
        label: '单据模板',
        code: 'bill',
        route: '/main/business/template',
      },
      {
        label: '打印模板',
        code: 'print',
        route: '/main/business/template/print',
      },
    ]
  },
  {
    label: '参数控制',
    code: 'parameter',
    route: '/main/business/parameter',
    iconCls: {'icon-uk-parameter': true},
  },
  {
    label: '初始数据',
    code: 'initial',
    route: '/main/business/initial',
    iconCls: {'icon-uk-preliminary': true},
  },
];

