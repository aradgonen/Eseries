import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConnectedUserService } from '../connected-user.service'

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private userService : ConnectedUserService) {}

  canActivate() {
      console.log(this.userService.isAdminConnected);
    return this.userService.isAdminConnected;
  }
}