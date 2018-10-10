(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div style=\"text-align:center\">\n  \n        <div>\n            <h2>{{hello}}</h2>\n            <h3>\n                    <div style=\"margin-top: 10%\">\n                            <label for=\"addnew\"> Enter Name: </label>\n                            <input type=\"text\" #addnew>\n                            <button (click)=\"addnewValue(addnew.value)\">Add</button>\n                        </div>\n\n                        <div style=\"margin-top: 2%\">\n                            <label for=\"hello\"> Enter Name: </label>\n                            <input type=\"text\" [(ngModel)]=\"hello\" name=\"hello\">\n                    </div>\n    \n            </h3>\n               \n        \n        </div>\n          \n\n         <div style=\"margin-top: 10%\">\n                <button (click)=\"onclick($event)\">Add</button>\n\n                <a routerLink = \"user\">New component</a>\n            <h3>\n                    Name:     {{mydata[0].name}} \n                    Email:     {{mydata[1].email}}\n                    All Data:{{mydata1}}\n                    <h2 style=\"margin-top: 5%\">List data ........</h2>\n                    <li *ngFor=\"let myalldata of datas\">\n                        {{myalldata}}\n                    </li>\n                    other list data....\n                    <h5 style=\"margin-right: 5%\">\n                        <li *ngFor=\"let condata of mydata\">\n\n                            {{condata.name}} or {{condata.email}}\n                        </li>\n                    </h5>                   \n            </h3>          \n         </div>         \n</div>\n\n-->\n\n<app-table></app-table>\n<br>\n<app-stable></app-stable>\n\n<div style=\"text-align: center\">\n    {{todaydate}}\n  <!-- \n    <h3 style=\"margin-top:10%\">\n            <a routerLink = \"user\" style=\"margin-right: 20%\">user</a>\n        <a routerLink = \"login\" style=\"margin-right: 20%\">Login</a>\n        <a routerLink = \"signup\">sign up</a>\n    </h3>-->\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, adata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adata", function() { return adata; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';

//
//import { catchError, map, tap } from 'rxjs/operators';
var AppComponent = /** @class */ (function () {
    function AppComponent(myservice) {
        this.myservice = myservice;
        this.title = 'app';
        //ngOnInit() {this.hello="hello ngoninit is using there now..";}
        this.datas = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.mydata1 = this.datas[0];
        this.alldata = [
            new adata('aaa', 'aa@aa'),
            new adata('bbb', 'bb@bb'),
            new adata('ccc', 'cc@cc'),
            new adata('ddd', 'dd@dd'),
            new adata('eee', 'ee@ee')
        ];
        this.mydata = this.alldata;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todaydate = this.myservice.showTodayDate();
    };
    AppComponent.prototype.onclick = function (event) {
        //alert('hello angular 4');
        this.datas.push('this is new data'); //using push there
    };
    AppComponent.prototype.addnewValue = function (addnew) {
        this.datas.splice(addnew); //using unshift method is there
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_1__["MyserviceService"]])
    ], AppComponent);
    return AppComponent;
}());

var adata = /** @class */ (function () {
    function adata(name, email) {
        this.name = name;
        this.email = email;
    }
    return adata;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _click_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-me.component */ "./src/app/click-me.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _stable_stable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stable/stable.component */ "./src/app/stable/stable.component.ts");
/* harmony import */ var _stable_stable_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stable/stable.service */ "./src/app/stable/stable.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// const appRoutes: Routes = [
//   { path: 'user', component: UserComponent }
// ];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _click_me_component__WEBPACK_IMPORTED_MODULE_2__["ClickMeComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"], _stable_stable_component__WEBPACK_IMPORTED_MODULE_12__["StableComponent"]
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
                    { path: 'Table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"] },
                ]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"]
            ],
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_5__["MyserviceService"], _stable_stable_service__WEBPACK_IMPORTED_MODULE_13__["StableDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/click-me.component.ts":
/*!***************************************!*\
  !*** ./src/app/click-me.component.ts ***!
  \***************************************/
/*! exports provided: ClickMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickMeComponent", function() { return ClickMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClickMeComponent = /** @class */ (function () {
    function ClickMeComponent() {
        this.clickMessage = ' hello angular 4';
        this.message1 = 'this is message 1';
        this.message2 = 'this is message 2';
    }
    ClickMeComponent.prototype.onClickMe = function () {
        // this.clickMessage = 'It is angular js 4!';
        this.message2 = 'hello this is message2';
    };
    ClickMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-click-me',
            template: "\n    <button (click)=\"onClickMe()\">Click me!</button>\n    {{clickMessage}} <h3>{{message2}}</h3>"
        })
    ], ClickMeComponent);
    return ClickMeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n<div class=\"container\">\n  <h1 style=\"margin-top: 9%\">Login Page </h1>\n <!-- <div>\n          <h3 style=\"margin-top: 2%\">\n              User Id<input type=\"text\" name=\"username\">\n              Password<input type=\"password\" name=\"password\">\n              <button style=\"margin-left: 1%\">submit</button>\n          </h3>\n </div>-->\n <form #loginData=\"ngForm\" (ngSubmit)=\"onclickLogin(loginData.value)\">\n\n        <div class=\"form-group\">\n        <label for=\"name\">User Id</label>\n        <input type=\"text\" class=\"form-control\" name=\"id\" placeholder=\"User Id\"  ngModel>\n        </div>\n\n     <div class=\"form-group\">\n       <label for=\"password\">Password</label>\n       <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" ngModel>\n     </div>\n\n     <button type=\"submit\" class=\"btn btn-success\" >Log in</button>\n\n   </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onclickLogin = function (data) {
        alert("this is login " + data.id);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyserviceService = /** @class */ (function () {
    function MyserviceService() {
    }
    MyserviceService.prototype.showTodayDate = function () {
        var ndate = new Date();
        return ndate;
    };
    MyserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n<!--\n    <h1 style=\"margin-top: 9%\">Sign Up Page </h1>\n    <div style=\"margin-top: 2%\">\n        <h3>\n            User Id:<input type=\"text\" name=\"username\">\n            Name:<input type=\"text\" name=\"name\">\n            Email:<input type=\"email\" name=\"email\">\n            <button style=\"margin-left: 1%\">submit</button>\n        </h3>\n</div>-->\n<div class=\"container\" style=\"margin-top: 2%\">\n        <h1>Sign Up Page</h1>\n        <form #userData=\"ngForm\" (ngSubmit)=\"onclickSubmit(userData.value)\">\n\n             <div class=\"form-group\">\n             <label for=\"name\">User Id</label>\n            <input type=\"text\" class=\"form-control\" name=\"userId\" placeholder=\"User Id\"  ngModel>\n            </div>\n\n             <div class=\"form-group\">\n             <label for=\"name\">Id</label>\n             <input type=\"text\" class=\"form-control\" name=\"id\" placeholder=\"User Id\"  ngModel>\n             </div>\n\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"Name\" ngModel>\n          </div>\n     \n          <div class=\"form-group\">\n            <label for=\"alterEgo\">Email Id</label>\n            <input type=\"text\" class=\"form-control\" name=\"body\" placeholder=\"Email Id\"   ngModel> \n          </div>\n     \n          <button type=\"submit\" class=\"btn btn-success\" >Submit</button>\n     \n        </form>\n        <ul style=\"text-align: left\">\n            <li>\n                    user Id:{{dataId}}\n            </li>\n            <li>\n                    Name: {{Username}}\n            </li>\n             <li>\n                    Email.id:{{Useremail}}\n            </li>\n        </ul>\n        {{datajson}}\n\n\n        \n<button  class=\"btn btn-success\" (click)=\"onclickShow()\" >Show Data</button>\n<table border=\"2\">\n    <tr><th>userId</th><th>id</th><th>title</th><th>body</th></tr>\n    <tr *ngFor=\"let postdata of httpdatashow\"><td>{{postdata.userId}}</td><td>{{postdata.id}}</td><td>{{postdata.title}}</td><td>{{postdata.body}}</td></tr>\n</table>        \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';

var SignupComponent = /** @class */ (function () {
    function SignupComponent(http) {
        this.http = http;
        this.dataId = '';
        this.datajson = '';
        this.Username = '';
        this.Useremail = '';
        this.httpdatashow = '';
    }
    SignupComponent.prototype.ngOnInit = function () { };
    /* onclickSubmit(data:Data)
     {
       alert("click here " +data.title);
       this.dataId=data.id;
       this.Username=data.title;
       this.Useremail=data.body;
      // console.log(data.id);
      // console.log(data.Name);
      //console.log(data.emailid);
      this.datajson= JSON.stringify(data);
   
   
      this.http.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(data))
      .subscribe(status=> console.log(JSON.stringify(status)));
   
     }*/
    SignupComponent.prototype.onclickShow = function () {
        var _this = this;
        alert("show data");
        this.http.get("https://jsonplaceholder.typicode.com/posts")
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { _this.displaydata(data); });
    };
    SignupComponent.prototype.displaydata = function (data) { this.httpdatashow = data; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/stable/stable.component.css":
/*!*********************************************!*\
  !*** ./src/app/stable/stable.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stable/stable.component.html":
/*!**********************************************!*\
  !*** ./src/app/stable/stable.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n                                       \n  <div class=\"dropdown\">\n\n<div class=\"container\">\n  <div class=\"border border-dark\">\n  <div class=\"table table-responsive\">\n  <table  class=\"table table-hover \">\n    \n<thead>\n      <tr>\n        <th>Year\n       </th>\n        <th>Team</th>\n        <th> Player Name\n         </th>\n         <th>240\n          </th>\n         <th>Pos\n          </th>\n        <th>Hit\n         </th>\n         <th>Delete\n        </th>\n    </thead>\n   <tbody>\n      \n      <tr *ngFor = \"let data of httpdata\">\n          <td> {{data.session}}</td>\n         <td> {{data.team}}</td>\n          <td> {{data.position_1}}</td>\n          <td> {{data.score}}</td>\n          <td> {{data.first_name}}</td>\n        \n         <td> {{data.height}}</td>\n         <td> <button (click)=\"deletePersion(data.id,data.position_1)\">Delete</button>\n        </td>\n      </tr> \n    </tbody>\n  </table>\n</div>\n</div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"border border-dark\">\n  <div class=\"table table-responsive\" >\n  <table  class=\"table table-hover \" >\n    \n<thead>\n      <tr>\n        <th>year\n<select [(ngModel)]=\"selectedDevice\" (change)=\"onChange($event)\">\n    <option *ngFor=\"let data of httpdata\">{{data.session}}</option>\n</select>\n       </th>\n       <th>team\n          <select [(ngModel)]=\"selectDevic\" (change)=\"onChange($event)\">\n             <option *ngFor = \"let data of httpdata\">{{data.team}}</option>\n         </select>\n       </th>\n       <th>Plyear name\n          <select [(ngModel)]=\"selectDevi\" (change)=\"onChange($event)\">\n             <option *ngFor = \"let data of httpdata\">{{data.position_1}}</option>\n         </select>\n       </th>\n       <th>240\n          <select [(ngModel)]=\"selectDev\" (change)=\"onChange($event)\">\n             <option *ngFor = \"let data of httpdata\">{{data.score}}</option>\n         </select>\n       </th>\n       <th>pos\n          <select [(ngModel)]=\"selectDe\" (change)=\"onChange($event)\">\n             <option *ngFor = \"let data of httpdata\">{{data.first_name}}</option>\n         </select>\n       </th>\n       <th>hit\n          <select [(ngModel)]=\"selectD\" (change)=\"onChange($event)\">\n             <option *ngFor = \"let data of httpdata\">{{data.height}}</option>\n         </select>\n       </th>\n       \n     </thead>\n   <tbody>\n      \n      <tr>\n          <td> {{selectedDevice}}</td>\n         <td> {{selectDevic}}</td>\n          <td> {{selectDevi}}</td>\n          <td> {{selectDev}}</td>\n          <td> {{selectDe}}</td>\n        \n         <td> {{selectD}}</td>\n         <td>\n           \n           <button (click)=\"addPersion(selectedDevice,selectDevic,selectDevi,selectDev,selectDe,selectD)\">Add</button>\n         </td>\n      </tr> \n    </tbody>\n  </table>\n\n<!--\n\n\n<div class=\"container\">\n  <div class=\"bsorder border-dark\">\n  <div class=\"table table-responsive\" >-->\n  <!--<table  class=\"table table-hover\">\n    \n<thead>\n      <tr>\n        <th>Year</th>\n        <th>team</th>\n        <th> Player Name</th>\n         <th>240</th>\n         <th>Pos</th>\n        <th>hit</th>\n    </thead>-->\n   <!-- <tbody>-->\n      <!--//testing coding here\n      <tr *ngFor = \"let data of httpdata\">\n          <td> {{data.session}}</td>\n         <td> {{data.team}}</td>\n          <td> {{data.position_1}}</td>\n          <td> {{data.score}}</td>\n          <td> {{data.first_name}}</td>\n        \n         <td> {{data.height}}</td>\n      </tr>--> \n    <!--</tbody>\n  </table>--><!--\n</div>\n</div>\n</div>-->\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/stable/stable.component.ts":
/*!********************************************!*\
  !*** ./src/app/stable/stable.component.ts ***!
  \********************************************/
/*! exports provided: StableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StableComponent", function() { return StableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _stable_stable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stable/stable.service */ "./src/app/stable/stable.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {Observable} from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';

var StableComponent = /** @class */ (function () {
    function StableComponent(http, stableData) {
        this.http = http;
        this.stableData = stableData;
    }
    //sdataid=2;
    StableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.http.get("http://jsonplaceholder.typicode.com/users")
        this.http.get("http://ddpradhan.com/football/")
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            console.log(data, 'getting from server data');
            _this.displaydata(data);
        });
    };
    StableComponent.prototype.displaydata = function (data) { this.httpdata = data; };
    StableComponent.prototype.onChange = function ($event) {
        // I want to do something here for new selectedDevice, but what I
        // got here is always last selection, not the one I just select.
    };
    StableComponent.prototype.addPersion = function (data1, data2, data3, data4, data5, data6) {
        if (data1 != null && data2 != null) {
            alert('Add new persion here');
            var postData = { "year": data1, "team": data2, "Player": data3, "gread": data4, "Pos": data5, "hit": data6 };
            console.log(JSON.stringify(postData));
            this.stableData.postDataToUrl(JSON.stringify(postData));
        }
        else {
            alert('Select All Data');
        }
    };
    StableComponent.prototype.deletePersion = function (id, name) {
        alert('Id=' + id + 'Player_Name=' + name);
    };
    StableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stable',
            template: __webpack_require__(/*! ./stable.component.html */ "./src/app/stable/stable.component.html"),
            styles: [__webpack_require__(/*! ./stable.component.css */ "./src/app/stable/stable.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _stable_stable_service__WEBPACK_IMPORTED_MODULE_3__["StableDataService"]])
    ], StableComponent);
    return StableComponent;
}());



/***/ }),

/***/ "./src/app/stable/stable.service.ts":
/*!******************************************!*\
  !*** ./src/app/stable/stable.service.ts ***!
  \******************************************/
/*! exports provided: StableDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StableDataService", function() { return StableDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StableDataService = /** @class */ (function () {
    function StableDataService(http) {
        this.http = http;
        this.dataChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    StableDataService.prototype.postDataToUrl = function (data) {
        debugger;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3001/index' + data, { headers: headers });
    };
    StableDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], StableDataService);
    return StableDataService;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin-left: 20px;\r\n}\r\n\r\n/* Float four columns side by side */\r\n\r\n.column {\r\n  float: left;\r\n  width: 33%;\r\n  padding: 0 5px;\r\n}\r\n\r\n/* Remove extra left and right margins, due to padding */\r\n\r\n.row {margin: 0 8px;\r\nmargin-top: 20px;}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* Responsive columns */\r\n\r\n@media screen and (max-width: 600px) {\r\n  .column {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 6px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div style=\"overflow-x:auto;\">\n\n\t<div class=\"row\">\n  <div class=\"column\">\n    <div class=\"card\">\n  <table>\n    <tr>\n      <th>Qtr1</th>\n      <th>0-4</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td> {{data.last_name}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr1</th>\n      <th>4-8</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td> {{data.position_1}}</td>\n    </tr>\n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr1</th>\n      <th>8-12</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td> {{data.position_2}}</td>\n    </tr>\n    \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr2</th>\n      <th>12-16</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td> {{data.position_3}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr2</th>\n      <th>16-20</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.status}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr2</th>\n      <th>20-24</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.name}}</td>\n    </tr>\n   </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr3</th>\n      <th>24-28</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.status}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr3</th>\n      <th>28-32</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.position_3}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr3</th>\n      <th>32-36</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.name}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr4</th>\n      <th>36-40</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.name}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr4</th>\n      <th>40-44</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.position_2}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"card\">\n    \t<table>\n    <tr>\n      <th>Qtr4</th>\n      <th>44-48</th>\n    </tr>\n   <tr *ngFor = \"let data of httpdata\">\n      <td>{{data.first_name}}</td>\n      <td>{{data.position_1}}</td>\n    </tr>\n   \n  </table>\n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';

var TableComponent = /** @class */ (function () {
    function TableComponent(http) {
        this.http = http;
    }
    //sdataid=2;
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.http.get("http://jsonplaceholder.typicode.com/users")
        this.http.get("http://ddpradhan.com/football/")
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            console.log(data, 'getting from server data');
            _this.displaydata(data);
        });
    };
    TableComponent.prototype.displaydata = function (data) { this.httpdata = data; };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n\n\n    <h1 style=\"margin-top: 10%\">This is the user Page</h1>\n\n\n    <div>    \n        <table border=\"2\" style=\"margin-left: 20%\" width=\"60%\" height=\"20%\">\n           \n                <tr><th style=\"text-align:center\">User Id</th><th style=\"text-align:center\">Name</th><th style=\"text-align: center\">Email</th><th style=\"text-align: center\">Session</th></tr>\n              <tr *ngFor = \"let data of httpdata\"><td>{{data.id}}</td><td>{{data.first_name}}</td><td>{{data.email}}</td><td>{{data.session}}</td></tr>  \n        </table>    \n        <!--    <ul *ngFor = \"let data of httpdata\">\n    <li>Id:{{data.id}} Name:{{data.name}} Email:{{data.email}}</li>\n             </ul>-->\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Observable} from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';

var UserComponent = /** @class */ (function () {
    function UserComponent(http) {
        this.http = http;
    }
    //sdataid=2;
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.http.get("http://jsonplaceholder.typicode.com/users")
        this.http.get("http://ddpradhan.com/football/")
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            console.log(data, 'getting from server data');
            _this.displaydata(data);
        });
    };
    UserComponent.prototype.displaydata = function (data) { this.httpdata = data; };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Len\Desktop\New folder\crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map