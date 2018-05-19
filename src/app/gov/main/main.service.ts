import {Injectable} from '@angular/core';
import {UtilService} from '../../core/util.service';

@Injectable()
export class MainService {
  static matchRoute(item, url) {
    return UtilService.getGivenStr('/', item.params || '') === UtilService.getGivenStr('/', url.slice(item.route.length));
  }
  static matchAdditionalRoute(item, url) {
    return item.additionalRoutes && item.additionalRoutes.find(val => url.indexOf(val.route) === 0);
  }
}
