/**
 * 返回结果接口
 */
export interface HttpRes {
  code: number | string;
  msg: string;
  data: any | {
    results?: Array<any> | {
      list?: Array<any>,
      total?: number
    },
    pageNumber?: number,
    pageSize?: number,
    total?: number
  };
}

/**
 * 全局的localStorage key
 */
const projectPrefix = 'UK';
export const apiPathKey = projectPrefix + '_apiPathKey_';
export const loginInfoKey = projectPrefix + '_loginInfoKey_';
export const dictionaryInfoKey = projectPrefix + '_dictionaryInfoKey_';
/**
 * 进入用户页面时存储当前路由,以便之后返回
 * @type {string}
 */
export const userBackPageInfoKey = projectPrefix + '_userBackPageInfoKey_';
/**
 * 全局常量
 */
export const AJAXTYPE = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
/**
 * 全局提示语
 */
export const tips = {
  leave: '请确定您已经保存了此页面的信息，否则，离开之后此信息会丢失！',
  back: '您确定要返回吗?',
};
export const defaultNzWidth = 560;
export declare type Op = 'add' | 'edit' | 'view';
/**
 * 全局的正则表达式
 */
export const REGEXP = {
  number: /\d/,
  onlyNumber: /^\d+$/,
  onlyChar: /^[a-zA-Z]+$/,
  charORNumber: /^[a-zA-Z0-9]+$/,
  cnMobile: /^1(3|4|5|7|8|9)\d{9}$/,
  ch: /[\u4e00-\u9fa5]/,
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  special: /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]·！￥（—）：；“”‘、，|《。》？【】]/im,
  onlyCapital: /^[A-Z]{2}$/,
};

export interface Option {
  label: string;
  value: string;
}
