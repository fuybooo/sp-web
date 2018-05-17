import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {
  AJAXTYPE,
  apiPathKey,
  dictionaryInfoKey,
  HttpRes,
  loginInfoKey,
  REGEXP,
} from '../shared/shared.model';
import {NzTreeNode} from 'ng-zorro-antd';
declare let $: any;
/**'
 * 工具接口
 * ==
 * 实现全局公共的方法
 */
@Injectable()
export class UtilService {
  constructor(private http: HttpClient) {
  }

  /**
   * 获取请求的url
   * @param urlKey
   * @param paramsId
   * @returns {string}
   */
  static getUrl(mainUrl, paramsId?) {
    const getSafeStr = (str: string) => {
      if (str.slice(-1) === '/') {
        return str.slice(0, str.length - 2);
      } else {
        return str;
      }
    };
    let path = getSafeStr(environment.apiPath);
    const localStorage_apiPath = localStorage.getItem(apiPathKey);
    if (environment.apiPathChangeable && localStorage && localStorage_apiPath) {
      environment.apiPath = path = getSafeStr(localStorage_apiPath);
    }
    const url = mainUrl + (paramsId === undefined ? '' : `/${paramsId}`);
    return environment.isStatic ?
      (environment.deployPath + '/assets/mock' + url + '.json') : (path + url + '/');
  }

  // /**
  //  * 将参数对象转化为查询参数
  //  */
  // static getParams(paramsObject): HttpParams {
  //   let params = new HttpParams();
  //   // for (const p in paramsObject) {
  //   //   if (paramsObject.hasOwnProperty(p)) {
  //   //     if (paramsObject[p] !== null) {
  //   //       let value = paramsObject[p];
  //   //       if (typeof value === 'string') {
  //   //         value = value.trim();
  //   //       }
  //   //       params = params.set(p, value);
  //   //     }
  //   //   }
  //   // }
  //   params = params.set('req_type', '10').set('token', '').set('bodyparams', '').set('data', JSON.stringify(paramsObject));
  //   return params;
  // }
  //
  // /**
  //  * 将参数对象转化为查询参数
  //  */
  // static getWholeParams(paramsObject) {
  //   return {params: UtilService.getParams(paramsObject)};
  // }

  /**
   * 去空格后判断是否为空
   * @param {FormControl} control
   * @returns {any}
   */
  static required(control: FormControl) {
    if (typeof control.value === 'string') {
      return control.value.trim().length === 0 ? {required: true} : null;
    } else if (control.value instanceof Array) {
      return control.value.length === 0 ? {required: true} : null;
    } else {
      return null;
    }
  }

  /**
   * 将输入的值转换为对应的大写
   * @param event
   * @param name
   * @param form
   */
  static upperCase(event, name, form) {
    form.controls[name].setValue(event.target.value.toUpperCase());
  }

  /**
   * 验证控件的值是否符合要求
   * @param specialCharacter 特殊字符正则表达式
   * @param mode 如何进行校验
   * true：正则匹配通过则字符串不符合要求 - 例如：验证控件不允许输入特殊字符
   * false：正则匹配不通过则字符串不符合要求 - 例如：验证控件只能输入某些字符
   * @returns {(control:FormControl)=>any}
   */
  static getSpecialCharacterValidator(specialCharacter: RegExp, mode = true) {
    return function (control: FormControl) {
      if (control.value && control.value.trim() !== '') {
        if (mode) {
          if (specialCharacter.test(control.value.trim())) {
            return {error: true, mistake: true};
          } else {
            return null;
          }
        } else {
          if (!specialCharacter.test(control.value.trim())) {
            return {error: true, mistake: true};
          } else {
            return null;
          }
        }
      }
    };
  }

  /**
   * 判断控件与本地的list是否重复
   * @param list
   * @param key
   * @returns {(control:FormControl)=>{error: boolean, duplicated: boolean}}
   */
  static getIsDupValidator(list, key) {
    return function (control: FormControl) {
      if (control.value && control.value.trim() !== '') {
        // 判断控件是否重复
        for (const item of list) {
          if (control.value === item[key]) {
            return {error: true, duplicated: true};
          }
        }
      }
    };
  }

  /**
   * 判断是否为空对象即 {}
   */
  static isEmptyObject(object) {
    return JSON.stringify(object) === '{}';
  }

  /**
   * 获取字符串中指定字符出现的次数
   */
  static getCharCount(regStr: string, str: string) {
    return str ? str.match(new RegExp(regStr, 'ig')).length : 0;
  }

  /**
   * 获取字符串中特定字符
   * 例如： 要将 '/a/123/bb'转化为'///'可以使用 getGivenStr('c', '/a/123/bb')
   */
  static getGivenStr(c: string, str: string) {
    return c.repeat(UtilService.getCharCount(c, str));
  }

  /**
   * 判断字符串的真实长度，中文字符占2，英文字符占1
   * '上单的酒桶' 返回长度 5 * 2 = 10
   * '上单的酒桶adc' 返回长度 5 * 2 + 3 * 1 = 13
   */
  static getRealLength(str, chLen = 2) {
    let len = 0;
    str.split('').forEach(c => {
      len += (REGEXP.ch.test(c) ? chLen : 1);
    });
    return len;
  }

  /**
   * 获取默认的模态框底部按钮组
   * @param onClick ok按钮确认事件，必须传入
   * @param onCancel cancel按钮确认事件，必须传入
   * @param {boolean} needDisabled 是否需要禁用逻辑
   * @param {string} formKey 禁用逻辑调用的form表单的key值
   * @param {(_modal) => any} disabled 默认的禁用逻辑，验证表单是否合法，是否干净
   * @param {(modal) => any} onCancel 默认的取消事件
   * @returns {({label: string} | {label: string; disabled: (_modal) => any; onClick: any} | {label: string; onClick: any})[]}
   */
  static getModalFooter(onClick, onCancel, needDisabled = false, formKey = 'form', disabled = (_modal) => needDisabled && (_modal[formKey].invalid || _modal[formKey].pristine)) {
    return [
      {
        label: '取消',
        onClick: onCancel
      },
      needDisabled ?
        {
          label: '确定',
          type: 'primary',
          disabled,
          onClick
        } : {
          label: '确定',
          type: 'primary',
          onClick
        }
    ];
  }

  /**
   * 根据一个值获取数组中该值对应的对象的其他属性的值
   * 只传list value时表示根据value取label
   * @param list 数组
   * @param value 值
   * @param {string} valueKey 值对应的key 默认为value
   * @param {string} otherKey 要获取的值的key 默认为label 如果传入的值时'' 或者false，则返回该对象
   * @returns {string}
   */
  static getPropValue(list, value, valueKey = 'value', otherKey = 'label') {
    if (!list) {
      return '';
    }
    const item = list.find(_item => _item[valueKey] === value);
    if (item) {
      if (otherKey) {
        return item[otherKey];
      } else {
        return item;
      }
    } else {
      return '';
    }
  }

  /**
   * 根据指定keys获取新的子数组，默认获取id数组
   * 例如 getValueList([{id: 'abc'}, {id: 'bbc'}]) => ['abc', 'bbc']
   * 例如 getValueList([{id: 'abc', name: 'n1'}, {id: 'bbc', name: 'n2'}], ['name']) => ['n1', 'n2']
   * @param list
   * @param {string[]} keys
   * @returns {any}
   */
  static getValueList(list, keys = ['id']) {
    if (keys.length === 1) {
      return list.map(item => item[keys[0]]);
    } else {
      return list.map(item => {
        const value: any = {};
        keys.forEach(key => value[key] = item[key]);
        return value;
      });
    }
  }

  /**
   * 根据列数组和key数组获取符合要求的列数组
   * @param columnList
   * @param keys
   * @returns {any}
   */
  static getColumnList(columnList, keys) {
    return keys.map(key => columnList.find(column => column.field === key || column.key === key));
  }

  /**
   * 将数组转换为树
   * @param array
   * @returns {any[]}
   */
  static convertListToTree(array) {
    let list = [];
    for (let item of array) {
      if (UtilService.isRoot(item, array)) {
        let children = UtilService.getChildren(item, array);
        if (children.length > 0) {
          item.children = children;
        }
        list.push(new NzTreeNode(item));
      }
    }
    return list;
  }

  /**
   * 判断节点是否为根
   * @param item
   * @param array
   * @returns {boolean}
   */
  static isRoot(item, array): boolean {
    let parentString = UtilService.getParentIdStr(item);
    if (parentString && item[parentString]) {
      for (let a of array) {
        if (a.id === item[parentString]) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * 获取所有的子元素
   * @param item
   * @param array
   * @returns {any[]}
   */
  private static getChildren(item, array) {
    let children = [];
    for (let data of array) {
      let parentId = UtilService.getParentIdStr(data);
      if (item.id === data[parentId]) {
        let _children = UtilService.getChildren(data, array);
        if (_children.length > 0) {
          data.children = _children;
        }
        children.push(data);
      }
    }
    return children;
  }

  /**
   * 获取父id的key
   * @param data
   * @returns {string}
   */
  private static getParentIdStr(data): string {
    let parentIds = ['pid', 'parentid', 'parentId', 'pId', 'parent_id'];
    for (let item of parentIds) {
      if (item in data) {
        return item;
      }
    }
  }

  /**
   * 根据扁平树list转换为层次树数据
   * @param list
   * @param {string} titleKey
   * @param {string} key
   * @returns {NzTreeNode[]}
   */
  static getNodesByList(list, titleKey = 'name', key = 'id') {
    return UtilService.convertListToTree((list || []).map(item => {
      item.title = item[titleKey];
      item.key = item[key];
      return item;
    }));
  }

  // /**
  //  * 通过条件判断是否应该执行函数
  //  * @param fn
  //  */
  // static executeFn(fn) {
  //   if (UtilService.isEmptyObject(UtilService.dictionary)) {
  //     const timer = setInterval(() => {
  //       if (localStorage.getItem(dictionaryInfoKey)) {
  //         UtilService.dictionary = JSON.parse(localStorage.getItem(dictionaryInfoKey));
  //         fn();
  //         clearInterval(timer);
  //       }
  //     }, 10);
  //   } else {
  //     fn();
  //   }
  // }

  /**
   * 深度trim
   * @param obj
   * @returns {any}
   */
  static deepTrim(obj) {
    if (obj === null) {
      return '';
    }
    let newObj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
      return;
    } else {
      for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
          let objValue = obj[i];
          if (typeof objValue === 'string') {
            objValue = objValue.trim();
          }
          if (objValue === undefined) {
            objValue = '';
          }
          newObj[i] = typeof objValue === 'object' ? UtilService.deepTrim(objValue) : objValue;
        }
      }
    }
    return newObj;
  }

  /**
   * 将登陆信息保存到cookie中
   */
  static saveLoginInfo(data) {
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
  static getLoginInfo() {
    return {
      username: $.cookie('username'),
      loginname: $.cookie('loginname'),
      mobile: $.cookie('mobile'),
      token: $.cookie('token'),
    };
  }

  /**
   * 获取公共参数
   * @param params
   * @param {string} method
   */
  static getCommonParams(params, method = 'get') {
    const data = UtilService.getLoginInfo();
    return {
      data: JSON.stringify(UtilService.deepTrim(params)),
      req_type: '10',
      token: data ? data.token : '',
      bodyparams: '',
      method,
      action: params.action || ''
    };
  }

  /**
   * 获取link url
   * @param col
   * @param data
   * @returns {string}
   */
  static getHref(col, data) {
    const params = col.linkParam ? ('/' + col.linkParam.split(',').map(field => data[field]).join('/')) : '';
    return `${col.link}${params}`;
  }

  /**
   * 通过传入url，参数，类型调用请求
   * @param url
   * @param {{}} params
   * @param {string} type
   * @returns {Observable<Object>}
   */
  ajax(url, params = {}, type = AJAXTYPE.GET) {
    if (type === AJAXTYPE.GET) {
      return this.get(url, params);
    } else if (type === AJAXTYPE.POST) {
      return this.post(url, params);
    } else if (type === AJAXTYPE.PUT) {
      return this.put(url, params);
    } else if (type === AJAXTYPE.DELETE) {
      return this.delete(url, params);
    }
  }

  /**
   * 通用的get请求
   * @param url
   * @param params
   * @param commonParams 分页参数和排序参数
   * @returns {Observable<Object>}
   */
  get(url, params: any = {}, commonParams = {}) {
    let common = UtilService.isEmptyObject(commonParams) ? {} : {
      ...{
        pagenumber: 1,
        pagesize: 10,
        sortfield: '',
        sortorder: ''
      }, ...commonParams
    };
    return this.http.post(UtilService.getUrl(url, params.id), UtilService.getCommonParams({...params, ...common}));
  }

  /**
   * 通用的post请求
   * @param url
   * @param params
   * @returns {Observable<Object>}
   */
  post(url, params: any = {}) {
    return this.http.post(UtilService.getUrl(url, params.id), UtilService.getCommonParams(params, 'post'));
  }

  /**
   * 通用的put请求
   * @param url
   * @param params
   * @returns {Observable<Object>}
   */
  put(url, params: any = {}) {
    return this.http.post(UtilService.getUrl(url, params.id), UtilService.getCommonParams(params, 'put'));
  }

  /**
   * 通用的delete请求
   * @param url
   * @param params
   * @returns {Observable<Object>}
   */
  delete(url, params: any = {}) {
    return this.http.post(UtilService.getUrl(url, params.id), UtilService.getCommonParams(params, 'delete'));
  }

  /**
   * 远程验证表单中的值是否与数据库中的重复
   * @param url
   * @param extend
   * @param field
   * @returns {(control:FormControl)=>any}
   */
  getSyncValidator(url, extend = {}, field = 'value') {
    const _this = this;
    return function (control: FormControl) {
      return Observable.create((observer) => {
        _this.get(UtilService.getUrl(url), { [field]: control.value.trim() || '', ...extend}).subscribe((res: any) => {
          if (res.code === 200) {
            if (res.data.isExist) {
              observer.next({error: true, duplicated: true});
            } else {
              observer.next(null);
            }
          } else {
            observer.next(null);
          }
          observer.complete();
        });
      });
    };
  }
}
