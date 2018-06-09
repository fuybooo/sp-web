interface UrlConfig {
  url: string;
  isStatic?: boolean;
}
/**
 * 请求URL
 */
export const urls: {[key: string]: UrlConfig} = {
  login: {
    url: '/login', // 登录
    isStatic: true,
  },
  questions: {
    url: '/questions', // 问题
    isStatic: true,
  },
  kpis: {
    url: '/kpis', // 考核指标
    isStatic: true,
  },
  infos: {
    url: '/infos', // 信息管理
    isStatic: true,
  },
  organizations: {
    url: '/organizations', // 组织机构
    isStatic: true,
  },
  accounts: {
    url: '/accounts', // 企业账户
    isStatic: true,
  },
  users: {
    url: '/users', // 用户
    isStatic: true,
  },
  companyHome: {
    url: '/homes',
    isStatic: true
  },
  issuelists: {
    url: '/issuelists',
    isStatic: true
  },
  phone: {
    url: '/phone',
    isStatic: true
  },
  dictionary: {
    url: '/dictionaries',
    isStatic: true
  }
};
