import {REGEXP} from '../../shared/shared.model';

/**
 * 判断是否为空对象即 {}
 */
export function isEmptyObject(object) {
  return JSON.stringify(object) === '{}';
}

/**
 * 获取字符串中指定字符出现的次数
 */
export function getCharCount(regStr: string, str: string) {
  return str ? str.match(new RegExp(regStr, 'ig')).length : 0;
}

/**
 * 获取字符串中特定字符
 * 例如： 要将 '/a/123/bb'转化为'///'可以使用 getGivenStr('c', '/a/123/bb')
 */
export function getGivenStr(c: string, str: string) {
  return c.repeat(getCharCount(c, str));
}

/**
 * 判断字符串的真实长度，中文字符占2，英文字符占1
 * '上单的酒桶' 返回长度 5 * 2 = 10
 * '上单的酒桶adc' 返回长度 5 * 2 + 3 * 1 = 13
 */
export function getRealLength(str, chLen = 2) {
  let len = 0;
  str.split('').forEach(c => {
    len += (REGEXP.ch.test(c) ? chLen : 1);
  });
  return len;
}

/**
 * 根据一个值获取数组中该值对应的对象的其他属性的值
 * 只传list value时表示根据value取label
 * @param list 数组
 * @param value 值 或值数组
 * @param {string} valueKey 值对应的key 默认为value
 * @param {string} otherKey 要获取的值的key 默认为label 如果传入的值时'' 或者false，则返回该对象
 * @returns {string}
 */
export function getPropValue(list, value, valueKey = 'value', otherKey = 'label') {
  if (!list || value === '') {
    return '';
  }
  if (typeof value !== 'object') {
    value = [value];
  }
  return list.filter(_item => value.some(v => v === _item[valueKey])).map(i => i[otherKey]).join('、');
}
export function getDicValue(list, value) {
  return getPropValue(list, value, 'code', 'dicname');
}

/**
 * 根据指定keys获取新的子数组，默认获取id数组
 * 例如 getValueList([{id: 'abc'}, {id: 'bbc'}]) => ['abc', 'bbc']
 * 例如 getValueList([{id: 'abc', name: 'n1'}, {id: 'bbc', name: 'n2'}], ['name']) => ['n1', 'n2']
 * @param list
 * @param {string[]} keys
 * @returns {any}
 */
export function getValueList(list, keys = ['id']) {
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
 * 生成uuid
 * @returns {string}
 */
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : ( r & 0x3 | 0x8);
    return v.toString(16);
  });
}
export function trimList(list) {
  return [...list.filter(item => item !== '')];
}

/**
 * 深度trim
 * @param obj
 * @returns {any}
 */
export function deepTrim(obj) {
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
        if (objValue === undefined || objValue === null) {
          objValue = '';
        }
        // 过滤为空的参数
        if (objValue === '') {
          continue;
        }
        newObj[i] = typeof objValue === 'object' ? deepTrim(objValue) : objValue;
      }
    }
  }
  return newObj;
}


