import {deepTrim, getGivenStr} from './util-fns';
import {environment} from '../../../environments/environment';
import {apiPathKey} from '../../shared/shared.model';
import {HttpParams} from '@angular/common/http';
declare let $: any;

export function getUrl(mainUrl, paramsId?) {
  const getSafeStr = (str: string) => {
    if (str.slice(-1) === '/') {
      return str.slice(0, str.length - 1);
    } else {
      return str;
    }
  };
  let path = getSafeStr(environment.apiPath);
  const localStorage_apiPath = localStorage.getItem(apiPathKey);
  if (environment.apiPathChangeable && localStorage && localStorage_apiPath) {
    environment.apiPath = path = getSafeStr(localStorage_apiPath);
  }
  const url = mainUrl.url + (paramsId === undefined ? '' : `/${paramsId}`);
  return mainUrl.isStatic ?
    (environment.deployPath + '/assets/mock' + url + '.json') : (path + url + '/');
}

export function matchRoute(item, url) {
  return item.paramCount === getGivenStr('/', url.slice(item.route.length)).length;
}
export function matchAdditionalRoute(item, url) {
  return item.additionalRoutes && item.additionalRoutes.find(val => url.indexOf(val.route) === 0);
}
export function clearObj(obj) {
  if (obj) {
    for (let p in obj) {
      obj[p] = '';
    }
  }
}

/**
 * 将参数对象转化为查询参数
 */
export function getParams(paramsObject): HttpParams {
  let params = new HttpParams();
  for (const p in paramsObject) {
    if (paramsObject.hasOwnProperty(p)) {
      if (paramsObject[p] !== null) {
        let value = paramsObject[p];
        if (typeof value === 'string') {
          value = value.trim();
        }
        params = params.set(p, value);
      }
    }
  }
  return params;
}

/**
 * 将参数对象转化为查询参数
 */
export function getWholeParams(paramsObject) {
  return {params: getParams(paramsObject)};
}

/**
 * 获取公共参数
 * @param params
 * @param {string} method
 */
export function getCommonParams(params, method = 'get') {
  const data = getLoginInfo();
  return {
    data: JSON.stringify(deepTrim(params)),
    token: data ? data.token : '',
    method,
    action: params.action || ''
  };
}

/**
 * 根据列数组和key数组获取符合要求的列数组
 * @param columnList
 * @param keys
 * @returns {any}
 */
export function getColumnList(columnList, keys) {
  // return keys.map(key => columnList.find(column => column.field === key || column.key === key));
  return getParentList(columnList, keys, 'field');
}

/**
 * 根据字数组获取父数组
 * allList 全部的父数组
 * subList 子数组
 * subKey 子数组的key
 * 例如 allList = [{id: 1, name: 'n1'}, {id: 2, name: 'n2'}, {id: 3, name: 'n3'}, {id: 4, name: 'n4'}]
 * subList = [1, 2];
 * subKey = 'id'
 * 返回值为 [{id: 1, name: 'n1'}, {id: 2, name: 'n2'}]
 */
export function getParentList(allList, subList, subKey = 'id', subSubKey = 'key') {
  return subList.map(key => allList.find(item => item[subKey] === key || item[subSubKey] === key));
}

/**
 * 将登陆信息保存到cookie中
 */
export function saveLoginInfo(data) {
  const cookieConfig = {expires: 7};
  $.cookie('username', data.username, cookieConfig);
  $.cookie('loginname', data.loginname, cookieConfig);
  $.cookie('mobile', data.mobile, cookieConfig);
  $.cookie('token', data.token, cookieConfig);
}

/**
 * 从localStorage中取出登录信息
 * @returns {any}
 */
export function getLoginInfo() {
  return {
    username: $.cookie('username'),
    loginname: $.cookie('loginname'),
    mobile: $.cookie('mobile'),
    token: $.cookie('token'),
  };
}

/**
 * 将输入的值转换为对应的大写
 * @param event
 * @param name
 * @param form
 */
export function upperCase(event, name, form) {
  form.controls[name].setValue(event.target.value.toUpperCase());
}
