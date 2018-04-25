import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Report } from './report';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}; 
@Injectable()
export class DataService {

  resultA:any;
  tempString:any;
  constructor(private _http: Http,private httpclient: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
  
 
  getData() {
    console.log("asking for data");
    return this._http.get("/readFromMongo/data").map(res => res.json())
  }
  getUserInfo(){
    
    console.log("asking for user info");
    this.tempString = this._http.get("/AuthUser/UserInfo")
    return this.tempString;
  }
  sendBugReport(report:Report): Observable<Report>{
    console.log("sending bug report to server");
    return this.httpclient.post<Report>("/BugReport/SaveReport", report, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  getBugReports(){
    console.log("asking for bug reports");
    return this._http.get("/BugReport/AllBugs");
  }
  getAdminList(){
    console.log("asking for admin list");
    return this._http.get("/AuthUser/UserInfo/Admins");
  }
  
}