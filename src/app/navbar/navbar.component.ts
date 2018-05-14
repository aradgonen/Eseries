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
  userinfo: any;//store userinfo
  userName: any;//store username
  CurDate:any;//store data
  adminlist:any;//store admin data from db
  isAdminConnected:boolean;//is admin connected right now
  constructor(private _dataService : DataService,private userService : ConnectedUserService,private dialogService : DialogService) { }

  ngOnInit() {//function that called when initialized
    this.getDate();
  }
  ngAfterViewInit(){//function called when html render complete
    this.getUserInfo();
  }
  getUserInfo(){//function that subscribe to user info function in the data service
    this._dataService.getUserInfo().subscribe(data =>{
      this.userinfo=JSON.parse(data._body);//parse it to JSON format
      this.userName=this.userinfo.DomainName+"//"+this.userinfo.UserName;//build string to show
      this.getadminlist();
    })
  }
  getadminlist(){//function that subscribe to admin list function in the data service
    this._dataService.getAdminList().subscribe(data => {
      this.adminlist = data;
      this.adminlist=JSON.parse(this.adminlist._body);//parse to JSON format
      if(this.adminlist.length>0)
      {
      for(var i=0;i<this.adminlist.length;i++)
      {
        if(this.adminlist[i].id.includes(this.userName)){//check if connected user defined as admin in db
          console.log("admin connected");
          this.isAdminConnected=true;
          this.userService.setData(this.isAdminConnected,false,this.userName);//set the data to connected user service
        }
      }
      }
      else
      {
        console.log(this.userName+"NOT ADMIN, Compared to:"+this.adminlist._body);
      }
    })
  }
  getDate()//get current date
  {
    this.CurDate=new Date().toDateString();
  }
  BugReport()//send bug report with the function from dialogservice
  {
    this.dialogService.confirm("Enter Bug Details","");
  }
}
