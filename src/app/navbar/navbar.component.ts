import { Component, OnInit,AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { ConnectedUserService } from '../connected-user.service'
import { DialogService} from '../ngbd-modal-basic/ngbd-modal-basic.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit {
  userinfo: any;
  userName: any;
  CurDate:any;
  adminlist:any;
  isAdminConnected:boolean;
  constructor(private _dataService : DataService,private userService : ConnectedUserService,private dialogService : DialogService) { }

  ngOnInit() {
    this.getDate();
  }
  ngAfterViewInit(){
    this.getUserInfo();
  }
  getUserInfo(){
    this._dataService.getUserInfo().subscribe(data =>{
      this.userinfo=JSON.parse(data._body);
      this.userName=this.userinfo.DomainName+"//"+this.userinfo.UserName;
      this.getadminlist();
    })
  }
  getadminlist(){
    this._dataService.getAdminList().subscribe(data => {
      this.adminlist = data;
      this.adminlist=JSON.parse(this.adminlist._body);
      if(this.adminlist.length>0)
      {
      for(var i=0;i<this.adminlist.length;i++)
      {
        if(this.adminlist[i].id.includes(this.userName)){
          console.log("admin connected");
          this.isAdminConnected=true;
          this.userService.setData(this.isAdminConnected,false,this.userName);
        }
      }
      }
      else
      {
        console.log(this.userName+"NOT ADMIN, Compared to:"+this.adminlist._body);
      }
    })
  }
  getDate()
  {
    this.CurDate=new Date().toDateString();
  }
  BugReport()
  {
    this.dialogService.confirm("Enter Bug Details","");
  }
}
