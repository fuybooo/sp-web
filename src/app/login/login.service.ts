import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoreService} from '../core/core.service';
import {getUrl} from '../core/utils/util-project';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient,
              private coreService: CoreService) {
  }

  login(params) {
    return this.http.post(getUrl('login'), params);
  }
}
