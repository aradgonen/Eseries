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
    //this.getDate();
  }
  getUserInfo()
  {
    this._dataService.getUserInfo().subscribe(data =>{
      this.userinfo=data;
      if(this.userinfo._body.charAt(0)=='{')
      {
        this.userinfo._body=this.userinfo._body.replace(/\\/g, '/');
        this.userinfo=JSON.parse(this.userinfo._body);
        console.log(this.userinfo.data[0].UserName);
        this.userName=this.userinfo.data[0].UserName;
        this.getadminlist();
      }
      else{
        this.getUserInfo();
      }
    })
  }
  getadminlist(){
    this._dataService.getAdminList().subscribe(data => {
      this.adminlist = data;
      if(this.adminlist._body.includes(this.userName))
      {
        console.log("admin connected");
        this.isAdminConnected=true;
        this.userService.setData(this.isAdminConnected,false,this.userName);
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
