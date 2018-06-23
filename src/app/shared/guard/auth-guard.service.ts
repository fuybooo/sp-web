import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {getLoginInfo} from '../../core/utils/util-project';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (getLoginInfo().userid) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
