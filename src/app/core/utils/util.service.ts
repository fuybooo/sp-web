import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AJAXTYPE} from '../../shared/shared.model';
import {isEmptyObject} from './util-fns';
import {getCommonParams, getUrl} from './util-project';

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
    const _this = this;
    return function (control: FormControl) {
      return Observable.create((observer) => {
        _this.get(getUrl(url), {[field]: control.value.trim() || '', ...extend}).subscribe((res: any) => {
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
