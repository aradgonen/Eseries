import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService,NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ClipboardModule} from 'ngx-clipboard';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormComponent } from './form/form.component';
import { LoginRouteGuard } from './admin-page/LoginRouteGuard';
import { ConnectedUserService } from './connected-user.service';
import { MaterialModule } from './material.module'
const appRoutes: Routes = [
  { path: 'main', component: ChartjsComponent },{ path: '', component: ChartjsComponent },
  { path: 'admin', component: AdminPageComponent, canActivate:[LoginRouteGuard]}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ChartjsComponent,
    NgbdModalBasicComponent,
    AdminPageComponent,
    FormComponent,
    EasterEggComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    MaterialModule,
    ClipboardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  entryComponents:[
    NgbdModalBasicComponent,
    ChartjsComponent,
    EasterEggComponent
  ],
  providers: [DataService,
    DialogService,
    LoginRouteGuard,
    ConnectedUserService
  ], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }