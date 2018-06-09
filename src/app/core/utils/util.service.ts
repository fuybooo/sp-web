import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AJAXTYPE, dictionaryInfoKey, HttpRes} from '../../shared/shared.model';
import {isEmptyObject} from './util-fns';
import {getCommonParams, getUrl} from './util-project';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {urls} from '../urls.model';
import {Dictionaries} from '../common.model';

/**'
 * 工具接口
 * ==
 * 实现全局公共的方法
 */
@Injectable()
export class UtilService {
  static dictionaries: Dictionaries = {};
  constructor(private http: HttpClient) {
  }

  /**
   * 使用字典时，不能直接调用，因为UtilService.dictionaries不一定存在
   * 所以取值时应该使用如下方式：
   * UtilService.getDic(() => this.xxList = UtilService.dictionaries.xx);
   * @param fn
   */
  static getDic(fn) {
    if (isEmptyObject(UtilService.dictionaries)) {
      const timer = setInterval(() => {
        if (localStorage.getItem(dictionaryInfoKey)) {
          UtilService.dictionaries = JSON.parse(localStorage.getItem(dictionaryInfoKey));
          fn();
          clearInterval(timer);
        }
      }, 10);
    } else {
      fn();
    }
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
    let common = isEmptyObject(commonParams) ? {} : {
      ...{
        pagenumber: 1,
        pagesize: 10,
        sortfield: '',
        sortorder: ''
      }, ...commonParams
    };
    return this.http.post(getUrl(url, params.id), getCommonParams({...params, ...common}));
  }

  /**
   * 通用的post请求
   * @param url
   * @param params
   * @returns {Observable<Object>}
   */
  post(url, params: any = {}) {
    return this.http.post(getUrl(url, params.id), getCommonParams(params, 'post'));
  }

  /**
   * 通用的put请求
   * @param url
   * @param params
   * @returns {Observable<Object>}
   */
  put(url, params: any = {}) {
    return this.http.post(getUrl(url, params.id), getCommonParams(params, 'put'));
  }

  /**
   * 通用的delete请求
   * @param url
   * @param params
   * @returns {Observable<Object>}
   */
  delete(url, params: any = {}) {
    return this.http.post(getUrl(url, params.id), getCommonParams(params, 'delete'));
  }


  /**
   * 远程验证表单中的值是否与数据库中的重复
   * @param url
   * @param extend
   * @param field
   * @returns {(control:FormControl)=>any}
   */
  getSyncValidator(url, extend = {}, field = 'value') {
    return (control: FormControl) => {
      return Observable.create((observer) => {
        // todo 在angular 6 中尝试 .pipe(debounceTime(100))
        this.get(getUrl(url), {[field]: control.value.trim() || '', ...extend}).subscribe((res: HttpRes) => {
          if (res.code === 200) {
            if (res.data.isExist) {
              observer.next({error: true, dup: true});
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

  /**
   * 登录之后异步调用，不产生阻塞
   */
  getDictionary() {
    this.get(urls.dictionary).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        let di = {};
        res.data.results.forEach(d => {
          const list = di[d.typecode] || [];
          di[d.typecode] = [...list, d];
        });
        UtilService.dictionaries = di;
        localStorage.setItem(dictionaryInfoKey, JSON.stringify(di));
      }
    });
  }

}
