import { Injectable } from '@angular/core';

@Injectable()
export class ConnectedUserService {

  constructor() { }
  isAdminConnected:boolean;
  isGuest:boolean;
  UserName:any;
  setData(isAdminConnected,isGuest,UserName)
  { 
    this.isAdminConnected=isAdminConnected;
    this.isGuest = isGuest;
    this.UserName = UserName;
  }
  getData(){
    var array={A:null,B:null,C:null};
    array.A=this.isAdminConnected;
    array.B=this.isGuest;
    array.C=this.UserName;
    return array;
  }
}
