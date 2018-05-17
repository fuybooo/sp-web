import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UtilService} from '../../core/util.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (UtilService.getLoginInfo().token) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
