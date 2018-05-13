webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-page/LoginRouteGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connected_user_service__ = __webpack_require__("../../../../../src/app/connected-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginRouteGuard = /** @class */ (function () {
    function LoginRouteGuard(userService) {
        this.userService = userService;
    }
    LoginRouteGuard.prototype.canActivate = function () {
        console.log(this.userService.isAdminConnected);
        return this.userService.isAdminConnected;
    };
    LoginRouteGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__connected_user_service__["a" /* ConnectedUserService */]])
    ], LoginRouteGuard);
    return LoginRouteGuard;
}());



/***/ }),

/***/ "../../../../../src/app/admin-page/admin-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n    width:300px;    \r\n }\r\n .example-card{\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n    -webkit-margin-before: 10px;\r\n            margin-block-start: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-page/admin-page.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n                <mat-card-content>\r\n                  <h2 class=\"example-h2\">Hi Admin!</h2>\r\n                  <mat-tab-group class=\"demo-tab-group\">\r\n                    <mat-tab label=\"Home\">\r\n                      <div class=\"demo-tab-content\">\r\n                        Admin Page\r\n                      </div>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Drives\">\r\n                      <div class=\"demo-tab-content\">\r\n                                <mat-card class=\"example-card\">\r\n                                                <mat-card-header>\r\n                                                  <mat-card-title>Drives</mat-card-title>\r\n                                                </mat-card-header>\r\n                                                <mat-card-content>\r\n                                                  <ngx-json-viewer [json]=\"dataToshowA\" [expanded]=\"false\" [cleanOnChange]=\"true\"></ngx-json-viewer>\r\n                                                </mat-card-content>\r\n\r\n                                        </mat-card>\r\n                      </div>  \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Systems\">\r\n                                <div class=\"demo-tab-content\">\r\n                                <mat-card *ngIf=\"dataToshowB\" class=\"example-card\">\r\n                                                <mat-card-header>\r\n                                                  <mat-card-title>Systems</mat-card-title>\r\n                                                </mat-card-header>\r\n                                                <mat-card-content>\r\n                                                      <ngx-json-viewer [json]=\"dataToshowB\" [expanded]=\"false\" [cleanOnChange]=\"true\"></ngx-json-viewer>\r\n                                                </mat-card-content>\r\n                                        </mat-card> \r\n                                        </div>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Failures\">\r\n                      <div class=\"demo-tab-content\">\r\n                                <mat-card *ngIf=\"dataToshowC\" class=\"example-card\">\r\n                                                <mat-card-header>\r\n                                                  <mat-card-title>Failures</mat-card-title>\r\n                                                </mat-card-header>\r\n                                                <mat-card-content>\r\n                                                      <ngx-json-viewer [json]=\"dataToshowC\" [expanded]=\"false\" [cleanOnChange]=\"true\"></ngx-json-viewer>\r\n                                                </mat-card-content>\r\n                                        </mat-card>\r\n                      </div>  \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Bugs\">\r\n                        <div class=\"demo-tab-content\">\r\n                                        <div *ngFor=\"let Data of bugsFromDb; let i = index\">\r\n                                                        <mat-card class=\"example-card\">\r\n                                                                <mat-card-header>\r\n                                                                  <mat-card-title>Bug Report</mat-card-title>\r\n                                                                  <mat-card-subtitle>Name:{{bugsFromDb[i].name}}</mat-card-subtitle>\r\n                                                                  <mat-card-subtitle>Date:{{bugsFromDb[i].date}}</mat-card-subtitle>\r\n                                                                </mat-card-header>\r\n                                                                <mat-card-content>\r\n                                                                    <p>\r\n                                                                        {{bugsFromDb[i].description}}\r\n                                                                  </p>\r\n                                                                </mat-card-content>\r\n                                                        </mat-card>\r\n                                                </div>\r\n                        </div>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n                </mat-card-content>\r\n              </mat-card>"

/***/ }),

/***/ "../../../../../src/app/admin-page/admin-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngbd_modal_basic_ngbd_modal_basic_component__ = __webpack_require__("../../../../../src/app/ngbd-modal-basic/ngbd-modal-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connected_user_service__ = __webpack_require__("../../../../../src/app/connected-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(_dataService, dialogService, userService) {
        var _this = this;
        this._dataService = _dataService;
        this.dialogService = dialogService;
        this.userService = userService;
        this.showLoadingSpinner = false;
        this.showDrivesBool = false;
        this.showSystemsBool = false;
        this.showFailuresBool = false;
        this.showUserInfoBool = false;
        this.showBugReportBool = false;
        this.showBugsBool = false;
        this._dataService.getData().subscribe(function (data) {
            _this.jsons = data;
            _this.dataToshowA = data.data[0][0];
            _this.dataToshowB = data.data[0][1];
            _this.dataToshowC = data.data[0][2];
        });
        this.getUserInfo();
        this.getbugreportstempfunction();
    }
    AdminPageComponent.prototype.ngOnInit = function () {
    };
    AdminPageComponent.prototype.ngAfterViewInit = function () {
    };
    AdminPageComponent.prototype.getbugreportstempfunction = function () {
        var _this = this;
        this._dataService.getBugReports().subscribe(function (data) {
            _this.bugsFromDb = data;
            _this.bugsFromDb = JSON.parse(_this.bugsFromDb._body);
            _this.bugsFromDb = _this.bugsFromDb.data;
        });
    };
    AdminPageComponent.prototype.getUserInfo = function () {
        var data = this.userService.getData();
        this.isAdminConnected = data.A;
        this.userName = data.C;
    };
    AdminPageComponent.prototype.showDrives = function () {
        if (!this.showDrivesBool) {
            this.showSystemsBool = false;
            this.showDrivesBool = true;
            this.showFailuresBool = false;
            this.showUserInfoBool = false;
            this.showBugReportBool = false;
            this.showBugsBool = false;
        }
        else {
            this.showDrivesBool = false;
        }
    };
    AdminPageComponent.prototype.showSystems = function () {
        if (!this.showSystemsBool) {
            this.showSystemsBool = true;
            this.showDrivesBool = false;
            this.showFailuresBool = false;
            this.showUserInfoBool = false;
            this.showBugReportBool = false;
            this.showBugsBool = false;
        }
        else {
            this.showSystemsBool = false;
        }
    };
    AdminPageComponent.prototype.showFailures = function () {
        if (!this.showFailuresBool) {
            this.showSystemsBool = false;
            this.showDrivesBool = false;
            this.showFailuresBool = true;
            this.showUserInfoBool = false;
            this.showBugReportBool = false;
            this.showBugsBool = false;
        }
        else {
            this.showFailuresBool = false;
        }
    };
    AdminPageComponent.prototype.showUserInfo = function () {
        if (!this.showUserInfoBool) {
            this.showSystemsBool = false;
            this.showDrivesBool = false;
            this.showFailuresBool = false;
            this.showUserInfoBool = true;
            this.showBugReportBool = false;
            this.showBugsBool = false;
        }
        else {
            this.showUserInfoBool = false;
        }
    };
    AdminPageComponent.prototype.showBugReport = function () {
        this.dialogService.confirm("Enter Bug Details", "");
        if (!this.showBugReportBool) {
            this.showSystemsBool = false;
            this.showDrivesBool = false;
            this.showFailuresBool = false;
            this.showUserInfoBool = false;
            this.showBugReportBool = true;
            this.showBugsBool = false;
        }
        else {
            this.showBugReportBool = false;
        }
    };
    AdminPageComponent.prototype.showBugs = function () {
        if (!this.showBugsBool) {
            this.showSystemsBool = false;
            this.showDrivesBool = false;
            this.showFailuresBool = false;
            this.showUserInfoBool = false;
            this.showBugReportBool = false;
            this.showBugsBool = true;
        }
        else {
            this.showBugsBool = false;
        }
    };
    AdminPageComponent.prototype.doSomething = function () {
        console.log("clicked");
    };
    AdminPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-page',
            template: __webpack_require__("../../../../../src/app/admin-page/admin-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__ngbd_modal_basic_ngbd_modal_basic_component__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_3__connected_user_service__["a" /* ConnectedUserService */]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n    <body>\n        <div class=\"wrapper\">\n            <app-navbar></app-navbar>\n            <div id=\"content\">\n                    <router-outlet></router-outlet>\n            </div>\n        </div>\n    </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chartjs_chartjs_component__ = __webpack_require__("../../../../../src/app/chartjs/chartjs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngbd_modal_basic_ngbd_modal_basic_component__ = __webpack_require__("../../../../../src/app/ngbd-modal-basic/ngbd-modal-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_page_admin_page_component__ = __webpack_require__("../../../../../src/app/admin-page/admin-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_page_LoginRouteGuard__ = __webpack_require__("../../../../../src/app/admin-page/LoginRouteGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__connected_user_service__ = __webpack_require__("../../../../../src/app/connected-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_json_viewer__ = __webpack_require__("../../../../ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import the Http Module and our Data Service
















var appRoutes = [
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_7__chartjs_chartjs_component__["a" /* ChartjsComponent */] }, { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_13__admin_page_admin_page_component__["a" /* AdminPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__admin_page_LoginRouteGuard__["a" /* LoginRouteGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chartjs_chartjs_component__["a" /* ChartjsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ngbd_modal_basic_ngbd_modal_basic_component__["b" /* NgbdModalBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_page_admin_page_component__["a" /* AdminPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__form_form_component__["a" /* FormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_json_viewer__["a" /* NgxJsonViewerModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__ngbd_modal_basic_ngbd_modal_basic_component__["b" /* NgbdModalBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chartjs_chartjs_component__["a" /* ChartjsComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_9__ngbd_modal_basic_ngbd_modal_basic_component__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_15__admin_page_LoginRouteGuard__["a" /* LoginRouteGuard */],
                __WEBPACK_IMPORTED_MODULE_16__connected_user_service__["a" /* ConnectedUserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chartjs/chartjs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card{\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n    -webkit-margin-before: 10px;\r\n            margin-block-start: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chartjs/chartjs.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"../../assets/Chart.PieceLabel.js\"></script>\r\n<div>\r\n  <table>\r\n    <tr>\r\n      <td #chartCanvas *ngFor=\"let Data of onlyChartData; let i = index\">\r\n        <mat-card class=\"example-card\">\r\n          <mat-card-header>\r\n            <mat-card-title>{{systemName[i]}}</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <canvas id=\"canvas{{i}}\" width=\"300\" height=\"300\">{{charts}}</canvas>\r\n          </mat-card-content>\r\n      </mat-card>\r\n      </td>\r\n    </tr>\r\n    \r\n  </table>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/chartjs/chartjs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_piecelabel_js__ = __webpack_require__("../../../../chart.piecelabel.js/src/Chart.PieceLabel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_piecelabel_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_piecelabel_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngbd_modal_basic_ngbd_modal_basic_component__ = __webpack_require__("../../../../../src/app/ngbd-modal-basic/ngbd-modal-basic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent(_dataService, dialogService) {
        var _this = this;
        this._dataService = _dataService;
        this.dialogService = dialogService;
        this.charts = []; //will save all of the charts data to render them
        this.onlyChartData = []; //secondery array for the charts
        this.i = 0;
        this.systemName = []; //array of systems names
        this._dataService.getData().subscribe(function (data) {
            _this.jsons = data;
            _this.NumberOfSystems = _this.jsons.data[0][1].systems.length; //get number of systems
            _this.createChartsData(); //call the function
        });
    }
    ChartjsComponent.prototype.ngOnInit = function () {
    };
    ChartjsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(this.NumberOfSystems);
        this.ChartCanvas.changes.subscribe(function (c) {
            _this.ChartCanvas.toArray().forEach(function (item) {
                console.log(item + "-----" + _this.i);
                _this.createCharts(_this.onlyChartData, item, _this.i, _this.dialogService, _this.jsons); //build chart to each canvas
            });
            _this.putDatainChart(); //enter data 
        });
    };
    ChartjsComponent.prototype.createChartsData = function () {
        console.log(this.NumberOfSystems);
        for (var i = 0; i < this.NumberOfSystems; i++) {
            var pie = {
                type: 'doughnut',
                data: {
                    labels: ["Disks", "Mgmt", "Hardware", "FC", "Vols&Pools"],
                    datasets: [
                        {
                            backgroundColor: ["#008000", "#008000", "#008000", "#008000", "#008000"],
                            data: [20, 20, 20, 20, 20]
                        }
                    ]
                },
                options: {
                    pieceLabel: {
                        render: 'label',
                        showZero: true,
                        fontSize: 12,
                        fontColor: '#fff',
                        fontStyle: 'normal',
                        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        position: 'default',
                        overlap: true,
                    },
                    elements: {
                        center: {
                            text: 'Desktop',
                            color: '#36A2EB',
                            fontStyle: 'Helvetica',
                            sidePadding: 15 //Default 20 (as a percentage)
                        }
                    },
                    title: {
                        display: true
                    },
                    animations: true,
                    tooltips: {
                        enabled: false
                    },
                    legend: {
                        display: false
                    }
                }
            };
            this.onlyChartData.push(pie); //store it
        }
    };
    ChartjsComponent.prototype.createCharts = function (pieData, ctx, index, dialogService, jsons) {
        console.log(ctx.nativeElement.children[0].children[1].children[0]);
        var tempChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](ctx.nativeElement.children[0].children[1].children[0], pieData[index]);
        document.getElementById(ctx.nativeElement.children[0].children[1].children[0].id).onclick = function (evt) {
            var activePoints = tempChart.getElementAtEvent(evt);
            var firstPoint = activePoints[0]; //set click listeners to charts and assign actions
            if (firstPoint !== undefined) {
                if (firstPoint._index == 0) {
                    console.log("Drives: System #" + firstPoint._chart.config.options.title.text);
                    if (firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index] == "#ff0000") {
                        var NumOfFailDrives;
                        var errorID;
                        var failedDrive = [];
                        for (var x = 0; x < jsons.data[0][2].length; x++) {
                            if (jsons.data[0][2][x].failureType == "diskPoolDriveFailure") {
                                NumOfFailDrives = jsons.data[0][2][x].extraData.failedDrives.length;
                                console.log(NumOfFailDrives);
                                errorID = x;
                                for (var q = 0; q < NumOfFailDrives; q++) {
                                    failedDrive.push({ tray: jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.locationPosition, slot: jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.slot, status: jsons.data[0][2][errorID].extraData.failedDrives[q].status, capacity: jsons.data[0][2][errorID].extraData.failedDrives[q].rawCapacity, interfaceType: jsons.data[0][2][errorID].extraData.failedDrives[q].interfaceType.driveType, id: jsons.data[0][2][errorID].extraData.failedDrives[q].productID }); //the string to show
                                    console.log(q);
                                }
                            }
                        }
                        dialogService.confirm("Failed Drives", JSON.stringify(failedDrive)); //calling to function that open the modal
                    }
                }
                if (firstPoint._index == 1) {
                    console.log("Mgmt: System #" + firstPoint._chart.config.options.title.text);
                    if (firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index] == "#ff0000") {
                        dialogService.confirm("Mgmt", ""); //calling to function that open the modal
                    }
                }
                if (firstPoint._index == 2) {
                    console.log("Hardware: System #" + firstPoint._chart.config.options.title.text);
                    if (firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index] == "#ff0000") {
                        var outputMessage = "";
                        for (var x = 0; x < jsons.data[0][2].length; x++) {
                            if (jsons.data[0][2][x].failureType == "drawerDegraded") {
                                outputMessage += "drawerDegraded \n -----------------------";
                            }
                            if (jsons.data[0][2][x].failureType == "usmUnreadableSectorsExist") {
                                outputMessage += "\n usmUnreadableSectorsExist \n databasecount -> unreadablesectors \n -----------------------";
                            }
                        }
                        dialogService.confirm("Hardware", outputMessage); //calling to function that open the modal
                    }
                }
                if (firstPoint._index == 3) {
                    console.log("FC: System #" + firstPoint._chart.config.options.title.text);
                    if (firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index] == "#ff0000") {
                        dialogService.confirm("FC", "");
                    }
                }
                if (firstPoint._index == 4) {
                    console.log("VolsPols: System #" + firstPoint._chart.config.options.title.text);
                    if (firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index] == "#ff0000") {
                        var outputMessage = "";
                        for (var x = 0; x < jsons.data[0][2].length; x++) {
                            if (jsons.data[0][2][x].failureType == "diskPoolReconstructionDriveCountBelowThreshold") {
                                outputMessage += "diskPoolReconstructionDriveCountBelowThreshold -> Not Enough Spares \n Disk Pool:" + jsons.data[0][2][x].objectData.label + "\n Required Reserved Drive Count:" + jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCount + "\n Current Reserved Drive Count:" + jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCountCurrent + "\n -----------------------";
                            }
                            if (jsons.data[0][2][x].failureType == "diskPoolCapacityDepleted") {
                                outputMessage += "\n diskPoolCapacityDepleted \n Disk Pool:" + jsons.data[0][2][x].objectData.label + "\n Required Reserved Drive Count:" + jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCount + "\n Current Reserved Drive Count:" + jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCountCurrent + "\n Used Capacity:" + jsons.data[0][2][x].objectData.usedSpace + "\n Free Capacity:" + jsons.data[0][2][x].objectData.freeSpace + "\n -----------------------";
                            }
                            if (jsons.data[0][2][x].failureType == "degradedVolume") {
                                outputMessage += "\n degradedVolume \n Disk Pool:" + jsons.data[0][2][x].objectData.label + "Replace Disks Cyka Blyat \n -----------------------";
                            }
                        }
                        dialogService.confirm("Vols&Pools", outputMessage); //calling to function that open the modal
                    }
                }
            }
        };
        this.charts.push(tempChart); //store data
        this.i++; //store index
    };
    ChartjsComponent.prototype.putDatainChart = function () {
        if (this.jsons) {
            for (var k = 0; k < this.charts.length; k++) {
                if (this.jsons.data[0][1].systems[k].status != "optimal") {
                    console.log(this.jsons.data[0][1].systems[k].status);
                    for (var x = 0; x < this.jsons.data[0][2].length; x++) {
                        if (this.jsons.data[0][2][x].failureType == "diskPoolDriveFailure") {
                            console.log(k + "-diskToRed");
                            this.charts[k].config.data.datasets[0].backgroundColor[0] = "#ff0000";
                            this.charts[k].update();
                        }
                        if (this.jsons.data[0][2][x].failureType == "diskPoolReconstructionDriveCountBelowThreshold" || this.jsons.data[0][2][x].failureType == "diskPoolCapacityDepleted") {
                            console.log(k + "-volspolsToRed");
                            this.charts[k].config.data.datasets[0].backgroundColor[4] = "#ff0000";
                            this.charts[k].update();
                        }
                        if (this.jsons.data[0][2][x].failureType == "drawerDegraded" || this.jsons.data[0][2][x].failureType == "usmUnreadableSectorsExist") {
                            console.log(k + "-hardwareToRed");
                            this.charts[k].config.data.datasets[0].backgroundColor[2] = "#ff0000";
                            this.charts[k].update();
                        }
                    }
                }
                this.systemName.push(this.jsons.data[0][1].systems[k].name); //store system names
            }
        }
        else {
            console.log("jsons is empty");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])("chartCanvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* QueryList */])
    ], ChartjsComponent.prototype, "ChartCanvas", void 0);
    ChartjsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chartjs',
            template: __webpack_require__("../../../../../src/app/chartjs/chartjs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chartjs/chartjs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__ngbd_modal_basic_ngbd_modal_basic_component__["a" /* DialogService */]])
    ], ChartjsComponent);
    return ChartjsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/connected-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectedUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectedUserService = /** @class */ (function () {
    function ConnectedUserService() {
    }
    ConnectedUserService.prototype.setData = function (isAdminConnected, isGuest, UserName) {
        this.isAdminConnected = isAdminConnected;
        this.isGuest = isGuest;
        this.UserName = UserName;
    };
    ConnectedUserService.prototype.getData = function () {
        var array = { A: null, B: null, C: null };
        array.A = this.isAdminConnected;
        array.B = this.isGuest;
        array.C = this.UserName;
        return array;
    };
    ConnectedUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConnectedUserService);
    return ConnectedUserService;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var DataService = /** @class */ (function () {
    function DataService(_http, httpclient) {
        this._http = _http;
        this.httpclient = httpclient;
    }
    DataService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
    };
    ;
    DataService.prototype.getData = function () {
        console.log("asking for data");
        return this._http.get("/readFromMongo/data").map(function (res) { return res.json(); });
    };
    DataService.prototype.getUserInfo = function () {
        console.log("asking for user info");
        this.tempString = this._http.get("/AuthUser/UserInfo");
        return this.tempString;
    };
    DataService.prototype.sendBugReport = function (report) {
        console.log("sending bug report to server");
        return this.httpclient.post("/BugReport/SaveReport", report, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.getBugReports = function () {
        console.log("asking for bug reports");
        return this._http.get("/BugReport/AllBugs");
    };
    DataService.prototype.getAdminList = function () {
        console.log("asking for admin list");
        return this._http.get("/AuthUser/UserInfo/Admins");
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" #ReportForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Description\">Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"model.description\" name=\"description\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"submited()\">Submit</button>\n    <a *ngIf=\"isSubmited\">Sent</a>\n    <a *ngIf=\"launchEasterEgg\" href=\"/snake\" target=\"_blank\">\n        <img  src=\"../../assets/EasterEgg.png\" width=\"50\" height=\"50\" alt=\"/snake\"/>\n    </a>\n    \n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report__ = __webpack_require__("../../../../../src/app/report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(_dataService) {
        this._dataService = _dataService;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__report__["a" /* Report */]('Arad', 'report', new Date);
        this.isSubmited = false;
        this.submitted = false;
        this.launchEasterEgg = false;
    }
    FormComponent.prototype.onSubmit = function () {
        if (this.model.description != "AradTheKing") {
            console.log(this.model);
            this.submitted = true;
        }
        else {
            this.launchEasterEgg = true;
        }
    };
    Object.defineProperty(FormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.submited = function () {
        this.isSubmited = true;
        this._dataService.sendBugReport(this.model).subscribe(function (report) {
            console.log("sent to server");
        });
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTooltipModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTooltipModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar.fixed-bottom.navbar-dark.bg-dark{\r\n    height:50px;\r\n}\r\na.nav-link.active{\r\n    color: #23a4c0 !important;\r\n}\r\n:host >>> .tooltip-inner {\r\n    min-width: 250px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"../../assets/owl.png\" width=\"50\" height=\"50\" class=\"d-inline-block align-center\" alt=\"\"/>E-Series Dashboard</a>     \r\n  <ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"navbar-item\">\r\n    <a class=\"nav-link\" routerLink=\"/main\" routerLinkActive=\"active\">Main</a>\r\n  </li>\r\n</ul>  \r\n    <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block\">\r\n        <a *ngIf=\"userName; else elseBlock\" class=\"nav-link dropdown-toggle\" id=\"dropdownBasic1\" ngbDropdownToggle><font color=\"white\">{{userName}}</font></a>\r\n        <ng-template #elseBlock><a class=\"nav-link dropdown-toggle\" id=\"dropdownBasic1\" ngbDropdownToggle><font color=\"white\">Guest</font></a></ng-template>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n          <button *ngIf=\"isAdminConnected\" routerLink=\"/admin\" class=\"dropdown-item\">Admin Page</button>\r\n          <button class=\"dropdown-item\" (click)=\"BugReport()\">Bug Report</button>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<nav class=\"navbar fixed-bottom navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand mx-auto\"><font color=\"white\" >{{CurDate}}</font></a>\r\n  <a class=\"navbar-brand\">\r\n    <ng-template #tipContent  >\r\n      <div><a><h1>Vols&Pools:</h1>ניצולת האחסון בווליומים (שטח אחסון המוקצה למשתמש) תקלה פה אומרת שיש ווליום עם 100% תפוסה</a>\r\n        <a><h1>Disks:</h1>דיסק תקול , לא מספיק ספיירים</a>\r\n        <a><h1>FC:</h1>פרוטוקול תקשורת, תקבלה בFC, רכיב תקול</a>\r\n        <a><h1>Hardware:</h1>חיישנים, ספקי כוח תקולים</a>\r\n        <a><h1>Mgmt:</h1>שעון לא נכון, בעיה בתקשורת הניהול (ניהול מערכת)</a>\r\n      </div>\r\n        </ng-template>\r\n    <img src=\"../../assets/help.png\" class=\"d-inline-block align-center\" [ngbTooltip]=\"tipContent\" placement=\"top-right\"/></a>  \r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connected_user_service__ = __webpack_require__("../../../../../src/app/connected-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngbd_modal_basic_ngbd_modal_basic_component__ = __webpack_require__("../../../../../src/app/ngbd-modal-basic/ngbd-modal-basic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_dataService, userService, dialogService) {
        this._dataService = _dataService;
        this.userService = userService;
        this.dialogService = dialogService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getDate();
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        this.getUserInfo();
    };
    NavbarComponent.prototype.getUserInfo = function () {
        var _this = this;
        this._dataService.getUserInfo().subscribe(function (data) {
            _this.userinfo = JSON.parse(data._body); //parse it to JSON format
            _this.userName = _this.userinfo.DomainName + "//" + _this.userinfo.UserName; //build string to show
            _this.getadminlist();
        });
    };
    NavbarComponent.prototype.getadminlist = function () {
        var _this = this;
        this._dataService.getAdminList().subscribe(function (data) {
            _this.adminlist = data;
            _this.adminlist = JSON.parse(_this.adminlist._body); //parse to JSON format
            if (_this.adminlist.length > 0) {
                for (var i = 0; i < _this.adminlist.length; i++) {
                    if (_this.adminlist[i].id.includes(_this.userName)) {
                        console.log("admin connected");
                        _this.isAdminConnected = true;
                        _this.userService.setData(_this.isAdminConnected, false, _this.userName); //set the data to connected user service
                    }
                }
            }
            else {
                console.log(_this.userName + "NOT ADMIN, Compared to:" + _this.adminlist._body);
            }
        });
    };
    NavbarComponent.prototype.getDate = function () {
        this.CurDate = new Date().toDateString();
    };
    NavbarComponent.prototype.BugReport = function () {
        this.dialogService.confirm("Enter Bug Details", "");
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__connected_user_service__["a" /* ConnectedUserService */], __WEBPACK_IMPORTED_MODULE_3__ngbd_modal_basic_ngbd_modal_basic_component__["a" /* DialogService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngbd-modal-basic/ngbd-modal-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbdModalBasicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Import core
//Import ng-bootstrap dependencies






var NgbdModalBasicComponent = /** @class */ (function () {
    function NgbdModalBasicComponent(activeModal, changeRef) {
        this.activeModal = activeModal;
        this.changeRef = changeRef;
        this.isFailedDrives = false;
        this.isVolsPools = false;
        this.bugreportscreen = false;
        console.log("DialogComponent construct");
    }
    NgbdModalBasicComponent.prototype.ngOnInit = function () {
        console.log("DialogComponent init");
        if (this.title == "Failed Drives") {
            this.isFailedDrives = true;
            console.log("true");
        }
        if (this.title == "Vols&Pools") {
            this.isVolsPools = true;
            console.log("true");
        }
        if (this.title == "Enter Bug Details") {
            this.bugreportscreen = true;
            console.log("true");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgbdModalBasicComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NgbdModalBasicComponent.prototype, "message", void 0);
    NgbdModalBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{ title }}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n    <div *ngIf=\"isFailedDrives; else elseBlockA\">\n    <table class=\"table\">\n    <td>Tray</td><td>Slot</td><td>Status</td><td>Capacity</td><td>Interface Type</td><td>ID</td>\n    <tr *ngFor=\"let Data of failedDrivesInfo; let i = index\">\n    <td>{{failedDrivesInfo[i].tray}}</td>\n    <td>{{failedDrivesInfo[i].slot}}</td>\n    <td>{{failedDrivesInfo[i].status}}</td>\n    <td>{{failedDrivesInfo[i].capacity}}</td>\n    <td>{{failedDrivesInfo[i].interfaceType}}</td>\n    <td>{{failedDrivesInfo[i].id}}</td>\n    </tr>\n    </table>\n    </div>\n    <ng-template #elseBlockA><p *ngIf=\"bugreportscreen; else elseBlockB\"><app-form></app-form></ng-template>\n    <ng-template #elseBlockB><p *ngIf=\"isVolsPools; else elseBlockC\"><p *ngFor=\"let data of message; let i = index\">\n    {{message[i]}}\n    <br/>\n  </p></ng-template>\n    <ng-template #elseBlockC><p #inputTraget >{{message}}</p> </ng-template>   \n    </div>\n    <div class=\"modal-footer\">\n      <button mat-raised-button color=\"primary\" (click)=\"activeModal.close(true)\">Ok</button>\n    </div>\n  " //all of this code is actually the html file, but angular allow to write it here instead of a seperate file
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], NgbdModalBasicComponent);
    return NgbdModalBasicComponent;
}());

var DialogService = /** @class */ (function () {
    function DialogService(modalService) {
        this.modalService = modalService;
    }
    DialogService.prototype.confirm = function (callerTitle, callerMessage) {
        var modalRef = this.modalService.open(NgbdModalBasicComponent, { size: 'lg' });
        if (callerTitle == "Failed Drives") {
            callerMessage = JSON.parse(callerMessage);
            modalRef.componentInstance.failedDrivesInfo = callerMessage;
        }
        if (callerTitle == "Vols&Pools") {
            modalRef.componentInstance.title = callerTitle;
            modalRef.componentInstance.message = callerMessage.split("\n");
            modalRef.componentInstance.changeRef.markForCheck();
            return modalRef.result;
        }
        else {
            modalRef.componentInstance.title = callerTitle;
            modalRef.componentInstance.message = callerMessage;
            modalRef.componentInstance.changeRef.markForCheck();
            return modalRef.result;
        }
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "../../../../../src/app/report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = /** @class */ (function () {
    function Report(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
    }
    return Report;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map