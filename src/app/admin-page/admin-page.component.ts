import { Component, OnInit,AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService} from '../ngbd-modal-basic/ngbd-modal-basic.component';
import { Input } from '@angular/core/src/metadata/directives';
import { NavbarComponent } from '../navbar/navbar.component'
import { ConnectedUserService } from '../connected-user.service'
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit,AfterViewInit {
  jsons: any;
  bugsFromDb:any;
  adminlist:any;
  userinfo: any;
  userinfostring: string;
  bugreports:string;
  userName: any;
  dataToshowA: string;
  dataToshowB: string;
  dataToshowC: string;
  showDrivesBool: boolean = false;
  showSystemsBool: boolean = false;
  showFailuresBool: boolean = false;
  showUserInfoBool: boolean = false;
  showBugReportBool: boolean = false;
  showBugsBool: boolean = false;
  constructor( private _dataService : DataService,private dialogService : DialogService, private userService: ConnectedUserService) { 
    this._dataService.getData().subscribe(data => {
      this.jsons = data
      this.dataToshowA=JSON.stringify(data.data[0][0],undefined,2);
      this.dataToshowB=JSON.stringify(data.data[0][1],undefined,2);
      this.dataToshowC=JSON.stringify(data.data[0][2],undefined,2);
    });
    this.getUserInfo()
    this.getbugreportstempfunction()
    
  }
  isAdminConnected:boolean;
  ngOnInit() { 
  }
  ngAfterViewInit(){
  }
  getbugreportstempfunction(){
    this._dataService.getBugReports().subscribe(data => {
      this.bugsFromDb = data;
      this.bugsFromDb = JSON.parse(this.bugsFromDb._body);
      this.bugsFromDb = this.bugsFromDb.data;
    })
  }
  getUserInfo()
  {
    var data = this.userService.getData();
    this.isAdminConnected= data.A;
    this.userName=data.C;
  }
  showDrives()
  {
    if(!this.showDrivesBool)
    {
      this.showSystemsBool=false;
      this.showDrivesBool=true;
      this.showFailuresBool=false;
      this.showUserInfoBool=false;
      this.showBugReportBool=false;
      this.showBugsBool=false;
    }
    else
    {
      this.showDrivesBool=false;
    }
  }
  showSystems()
  {
    if(!this.showSystemsBool)
    {
      this.showSystemsBool=true;
      this.showDrivesBool=false;
      this.showFailuresBool=false;
      this.showUserInfoBool=false;
      this.showBugReportBool=false;
      this.showBugsBool=false;
    }
    else
    {
      this.showSystemsBool=false;
    }
  }
  showFailures()
  {
    if(!this.showFailuresBool)
    {
      this.showSystemsBool=false;
      this.showDrivesBool=false;
      this.showFailuresBool=true;
      this.showUserInfoBool=false;
      this.showBugReportBool=false;
      this.showBugsBool=false;
    }
    else
    {
      this.showFailuresBool=false;
    }
  }
  showUserInfo()
  {
    if(!this.showUserInfoBool)
    {
      this.showSystemsBool=false;
      this.showDrivesBool=false;
      this.showFailuresBool=false;
      this.showUserInfoBool=true;
      this.showBugReportBool=false;
      this.showBugsBool=false;
    }
    else
    {
      this.showUserInfoBool=false;
    }
  }
  showBugReport()
  {
    this.dialogService.confirm("Enter Bug Details","");
    if(!this.showBugReportBool)
    {
      this.showSystemsBool=false;
      this.showDrivesBool=false;
      this.showFailuresBool=false;
      this.showUserInfoBool=false;
      this.showBugReportBool=true;
      this.showBugsBool=false;
    }
    else
    {
      this.showBugReportBool=false;
    }
  }
  showBugs()
  {
    if(!this.showBugsBool)
    {
      this.showSystemsBool=false;
      this.showDrivesBool=false;
      this.showFailuresBool=false;
      this.showUserInfoBool=false;
      this.showBugReportBool=false;
      this.showBugsBool=true;
    }
    else
    {
      this.showBugsBool=false;
    }
  }
}
