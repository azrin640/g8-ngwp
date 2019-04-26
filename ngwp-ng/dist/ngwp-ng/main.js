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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promotions/promotions.component */ "./src/app/promotions/promotions.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'promotions', component: _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_7__["PromotionsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngwp-ng';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_test_test_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/test/test.service */ "./src/app/services/test/test.service.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./promotions/promotions.component */ "./src/app/promotions/promotions.component.ts");
/* harmony import */ var _tester_tester_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tester/tester.component */ "./src/app/tester/tester.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _tester_tester_component__WEBPACK_IMPORTED_MODULE_19__["ExDialog"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_18__["PromotionsComponent"],
                _tester_tester_component__WEBPACK_IMPORTED_MODULE_19__["TesterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            providers: [
                _services_test_test_service__WEBPACK_IMPORTED_MODULE_8__["TestService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _services_products_products_service__WEBPACK_IMPORTED_MODULE_16__["ProductsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _tester_tester_component__WEBPACK_IMPORTED_MODULE_19__["ExDialog"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"bannner\">\n    <img src=\"../../assets/images/banner.png\" alt=\"banner\">\n  </div>\n\n  <div class=\"design\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"design__title\">\n      <h2>Design Terbaru</h2>\n    </div>\n    <div class=\"design_phone\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n      <img src=\"../../assets/images/phone.png\" alt=\"\">\n      <img src=\"../../assets/images/phone.png\" alt=\"\">\n      <img src=\"../../assets/images/phone.png\" alt=\"\">\n      <img src=\"../../assets/images/phone.png\" alt=\"\">\n      <img src=\"../../assets/images/phone.png\" alt=\"\">\n      <img src=\"../../assets/images/phone.png\" alt=\"\">\n      <img src=\"../../assets/images/phone.png\" alt=\"\">\n    </div>\n  </div>\n\n  <app-tester></app-tester>\n\n  <div class=\"category\">\n    <h2 class=\"category__title\">Design Category</h2>\n    <div class=\"category__card\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n      <mat-card>\n        <img mat-card-image src=\"../../assets/images/floral.png\" alt=\"\">\n        <mat-card-title>Floral</mat-card-title>\n      </mat-card>\n\n      <mat-card>\n        <img mat-card-image src=\"../../assets/images/vintage.png\" alt=\"\">\n        <mat-card-title>Vintage</mat-card-title>\n      </mat-card>\n\n      <mat-card>\n        <img mat-card-image src=\"../../assets/images/islamic.png\" alt=\"\">\n        <mat-card-title>Islamic</mat-card-title>\n      </mat-card>\n\n      <mat-card>\n        <img mat-card-image src=\"../../assets/images/pattern.png\" alt=\"\">\n        <mat-card-title>Pattern</mat-card-title>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 600px) {\n  .test {\n    margin-top: 15vh;\n    background: #96cff1;\n    background: linear-gradient(90deg, #96cff1 0%, #faf6a6 42%, #f7b3d0 100%);\n    position: relative; }\n    .test__input {\n      padding: 10px;\n      border-radius: 5px; }\n    .test__img {\n      position: absolute;\n      z-index: 2;\n      -webkit-transform: scaleZ(1.2);\n              transform: scaleZ(1.2);\n      overflow: hidden;\n      right: 10%; }\n    .test__button {\n      padding-bottom: 10px; } }\n\n@media only screen and (max-width: 599px) {\n  .test {\n    margin-top: 15vh;\n    background: #96cff1;\n    background: linear-gradient(90deg, #96cff1 0%, #faf6a6 42%, #f7b3d0 100%); }\n    .test__input {\n      padding: 10px;\n      border-radius: 5px; }\n    .test__button {\n      padding-bottom: 10px; } }\n\n.category {\n  padding-top: 10vh; }\n\n.category__title {\n    text-align: center; }\n\nmat-card-title {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQTRCO0lBQzVCLHlFQUE2RztJQUM3RyxrQkFBa0IsRUFBQTtJQUVsQjtNQUNJLGFBQWE7TUFDYixrQkFBa0IsRUFBQTtJQUd0QjtNQUNJLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsVUFBVSxFQUFBO0lBR2Q7TUFDSSxvQkFBb0IsRUFBQSxFQUN2Qjs7QUFJVDtFQUNJO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUE0QjtJQUM1Qix5RUFBNkcsRUFBQTtJQUU3RztNQUNJLGFBQWE7TUFDYixrQkFBa0IsRUFBQTtJQUd0QjtNQUNJLG9CQUFvQixFQUFBLEVBQ3ZCOztBQUtUO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRWpCO0lBQ0ksa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLnRlc3R7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxNTAsMjA3LDI0MSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNTAsMjA3LDI0MSwxKSAwJSwgcmdiYSgyNTAsMjQ2LDE2NiwxKSA0MiUsIHJnYmEoMjQ3LDE3OSwyMDgsMSkgMTAwJSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmX19pbnB1dHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pbWd7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVooMS4yKTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fYnV0dG9ue1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAudGVzdHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDE1MCwyMDcsMjQxKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE1MCwyMDcsMjQxLDEpIDAlLCByZ2JhKDI1MCwyNDYsMTY2LDEpIDQyJSwgcmdiYSgyNDcsMTc5LDIwOCwxKSAxMDAlKTtcbiAgICBcbiAgICAgICAgJl9faW5wdXR7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICZfX2J1dHRvbntcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbi5jYXRlZ29yeXtcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcblxuICAgICZfX3RpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5tYXQtY2FyZC10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Hello</h1>\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var user = {
            username: 'azrin640',
            password: 'Engine1@'
        };
        this.authService.getLogin(user)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");


// Angular Material Modules
































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"logo\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n    <img src=\"../../assets/images/logo_g8-my.png\" alt=\"logo\">\n  </div>\n\n  <div class=\"menu\">\n      <mat-toolbar>  \n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <div class=\"menu__item\" *ngFor=\"let menu of menus\">\n              <button mat-button  [routerLink]=\"menu.link\">\n                <h3>{{ menu.name }}</h3>\n              </button>\n            </div>\n        </mat-toolbar-row>\n      </mat-toolbar>\n  </div>\n  \n  <router-outlet></router-outlet>\n\n  <div class=\"footer\" fxLayout=\"column\" fxLayoutAlign=\"end\">\n    <div class=\"footer__social\" fxLayout=\"row\" fxLayoutAlign=\"end\">\n      <img class=\"footer__social-item\" src=\"../../assets/images/facebook.png\" alt=\"\">\n      <img class=\"footer__social-item\" src=\"../../assets/images/instagram.png\" alt=\"\">\n      <img class=\"footer__social-item\" src=\"../../assets/images/whatsapp.png\" alt=\"\">\n    </div>\n    <div class=\"footer__copyright\" fxLayout fxLayoutAlign=\"end\">\n      DIURUSKAN OLEH MAJLISKAMI.MY\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding-top: 15vh;\n  background: #96cff1;\n  background: linear-gradient(90deg, #96cff1 0%, #faf6a6 42%, #f7b3d0 100%); }\n  .footer__social-item {\n    margin: 5px;\n    padding-right: 10px; }\n  .footer__copyright {\n    margin: 5px;\n    padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBNEI7RUFDNUIseUVBQTZHLEVBQUE7RUFFN0c7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFHdkI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBwYWRkaW5nLXRvcDogMTV2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLDIwNywyNDEpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNTAsMjA3LDI0MSwxKSAwJSwgcmdiYSgyNTAsMjQ2LDE2NiwxKSA0MiUsIHJnYmEoMjQ3LDE3OSwyMDgsMSkgMTAwJSk7XG5cbiAgICAmX19zb2NpYWwtaXRlbXtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fY29weXJpZ2h0e1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.menus = [
            { name: 'Home', link: '/' },
            { name: 'Products', link: '/products' },
            { name: 'Promotions', link: '/promotions' },
            { name: 'Login', link: '/login' }
        ];
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"title\" fxLayout=\"row start\" fxLayoutAlign=\" center\">\n    <button mat-mini-fab color=\"accent\" (click)=\"openSideMenu(opened)\">\n      <mat-icon *ngIf=\"opened\">keyboard_arrow_left</mat-icon>\n      <mat-icon *ngIf=\"!opened\">keyboard_arrow_right</mat-icon>\n    </button>\n    <h2 class=\"title__title\">{{ title }}</h2>\n    \n  </div>\n\n  <mat-drawer-container class=\"product__card mat-elevation-z8\" >\n\n    <mat-drawer mode=\"side\" [opened]=\"opened\">\n      <mat-list>\n\n        <mat-list-item>\n          <button class=\"category__button\" mat-button>Product Categories</button>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item *ngFor=\"let category of categories\" >\n            <button class=\"category__button\" mat-button matBadge=\"{{ category.count }}\" matBadgeColor=\"accent\" (click)=\"filterProducts(category.id)\" (click)=\"openSideMenu(opened)\">\n              {{ category.name }}\n            </button>          \n        </mat-list-item>\n\n      </mat-list>      \n    </mat-drawer>\n\n    <mat-drawer-content>\n      <div class=\"products\" *ngIf=\"products\">\n        <div class=\"products\" fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" fxLayoutGap=\"10px\">\n          <div class=\"product\" *ngFor=\"let product of products\" >\n              <mat-card class=\"product__card mat-elevation-z8\" fxFlex=\"200px\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n\n                <img mat-card-image src=\"{{ product.images[0].src }}\" alt=\"\">\n\n                <mat-card-title-group>\n                  <mat-card-title>\n                    {{ product.name }}\n                     </mat-card-title>\n                  <mat-card-subtitle> \n                    <div class=\"product__subtitle\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                      <div class=\"product__fav\" *ngIf=\"product.rating_count\">\n                        Favorites <mat-icon matBadge=\"{{ product.rating_count }}\" color=\"primary\" matBadgeColor=\"accent\">favorite</mat-icon> \n                      </div>\n                      <div class=\"product__sale\" *ngIf=\"product.on_sale\">\n                        <p>On Sale <mat-icon color=\"accent\">money_off</mat-icon> {{ ((product.regular_price - product.sale_price) / product.regular_price) | percent}} off</p>\n                      </div>\n                    </div>                                   \n                  </mat-card-subtitle>                  \n                </mat-card-title-group>\n                <mat-card-content>\n                  <div class=\"product__short-description\" [innerHTML]=\"product.short_description\"></div>\n                </mat-card-content>               \n                \n                <mat-card-footer class=\"product__footer\">  \n                  <div class=\"product__tags\" *ngIf=\"product.tags\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">                    \n                    <mat-chip-list *ngFor=\"let tag of product.tags\" >\n                      <div class=\"product__tag\">\n                        <mat-chip color=\"primary\" selected><em>{{ tag.name }}</em></mat-chip>\n                      </div>                        \n                    </mat-chip-list>\n                  </div>    \n                  <div class=\"product__price\" >\n                    <div class=\"product__price-no-sale\" *ngIf=\"!product.on_sale\" fxLayout=\"row\" fxLayoutAlign=\"center\" >\n                      <p><mat-icon color=\"primary\">monetization_on</mat-icon>{{ product.regular_price | currency: \"RM\"}}</p>\n                    </div>\n                    <div class=\"product__price-no-sale\" *ngIf=\"product.on_sale\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n                        <p><mat-icon color=\"primary\">monetization_on</mat-icon><span class=\"product__price-cross\">{{ product.regular_price | currency: \"RM\"}}</span></p>\n                        <p><mat-icon color=\"accent\">monetization_on</mat-icon>{{ product.sale_price | currency: \"RM\"}}</p>\n                    </div>\n\n                  </div>              \n                  <mat-card-actions>\n                    <div class=\"product__actions\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n                      <button fxFlex=\"50\" mat-icon-button color=\"accent\" (click)=\"favoriteProduct(product.id)\">\n                        <mat-icon>favorite_border</mat-icon>\n                      </button>\n                      <button fxFlex=\"50\" mat-icon-button color=\"accent\" (click)=addProduct(product.id)>\n                        <mat-icon>shopping_cart</mat-icon>\n                      </button>\n                    </div>\n                  </mat-card-actions> \n                                   \n                </mat-card-footer>\n                \n\n              </mat-card>\n          </div>\n        </div>\n      </div>\n\n    </mat-drawer-content>\n\n  </mat-drawer-container>\n\n  \n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title__title {\n  margin-left: 10px; }\n\n.content {\n  padding: 10px; }\n\nmat-drawer {\n  width: 170px; }\n\n.category__button {\n  width: 100%;\n  text-align: center; }\n\n.product {\n  margin: 10px; }\n\n.product__subtitle {\n    text-align: center; }\n\n.product__sale {\n    color: #ff4081;\n    text-align: center; }\n\n.product__tag {\n    margin: 5px; }\n\n.product__footer {\n    bottom: 0; }\n\n.product__price-cross {\n    text-decoration: line-through; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxhQUFhLEVBQUE7O0FBSWpCO0VBQ0ksWUFBWSxFQUFBOztBQUtaO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUcxQjtFQUNJLFlBQVksRUFBQTs7QUFFWjtJQUNJLGtCQUFrQixFQUFBOztBQUd0QjtJQUNJLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7SUFDSSxXQUFXLEVBQUE7O0FBR2Y7SUFDSSxTQUFTLEVBQUE7O0FBR2I7SUFDSSw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuXG4gICAgJl9fdGl0bGV7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH0gICAgXG59XG5cbi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxubWF0LWRyYXdlcntcbiAgICB3aWR0aDogMTcwcHg7XG59XG5cbi5jYXRlZ29yeXtcblxuICAgICZfX2J1dHRvbntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4ucHJvZHVjdHtcbiAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAmX19zdWJ0aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICZfX3NhbGV7XG4gICAgICAgIGNvbG9yOiAjZmY0MDgxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICZfX3RhZ3tcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuXG4gICAgJl9fZm9vdGVye1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl9fcHJpY2UtY3Jvc3N7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products/products.service */ "./src/app/services/products/products.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, authService, snackBar) {
        this.productsService = productsService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.title = 'Products';
        this.categoryMode = false;
        this.opened = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getCatogories()
            .subscribe(function (res) {
            _this.categories = res;
            console.log(res);
        });
        this.productsService.getProducts()
            .subscribe(function (response) {
            console.log(response);
            _this.products = response;
            _this.initialProducts = response;
        });
    };
    ProductsComponent.prototype.openSideMenu = function (state) {
        state ? (this.opened = false) : (this.opened = true);
    };
    ProductsComponent.prototype.filterProducts = function (productId) {
        var products = this.initialProducts;
        var filteredProducts = products.filter(function (product) { return product.categories.find(function (category) { return category.id === productId; }); });
        this.products = filteredProducts;
    };
    ProductsComponent.prototype.favoriteProduct = function (productId) {
        var isLoggedIn = this.authService.isLoggedIn();
        if (!isLoggedIn)
            this.snackBar.open('Only registered User can favorite', 'Close', { duration: 7000 });
    };
    ProductsComponent.prototype.addProduct = function (productId) {
        console.log(productId);
        if (productId)
            this.snackBar.open('Product added to cart', 'Close', { duration: 7000 });
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/promotions/promotions.component.html":
/*!******************************************************!*\
  !*** ./src/app/promotions/promotions.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <div class=\"banner\">\n    <img src=\"../../assets/images/banner.png\" alt=\"\">\n  </div>\n\n  <div class=\"intro\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <h1>Sebab Apa Saya Gunakan</h1>\n    <h1>Kad Undangan Digital?</h1>\n    <div class=\"intro__blurps\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n\n      <div class=\"intro__card-container\" fxFlex=\"30%\">\n        <mat-card class=\"intro__card mat-elevation-z8\"  fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <mat-card-title class=\"intro__card-title\">\n              Saya tak nak tetamu yang nak datang tersesat ke\n          </mat-card-title>\n          <img class=\"intro__card-logo\" mat-card-image src=\"../../assets/images/majlis-kami.png\" alt=\"Majlis Kami\">\n          <img class=\"intro__card-image\" mat-card-image src=\"../../assets/images/hp.png\" alt=\"hp\">\n        \n          <mat-card-actions class=\"intro__card-action\"><button  mat-raised-button color=\"accent\">video lokasi</button></mat-card-actions>\n        </mat-card>\n      </div>\n\n      <div class=\"intro__card-container\" fxFlex=\"30%\">\n        <mat-card class=\"intro__card mat-elevation-z8\"  fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <mat-card-title class=\"intro__card-title\">\n              Tetamu saya boleh terus call untuk dapatkan info tentang\n          </mat-card-title>\n          <img class=\"intro__card-logo\" mat-card-image src=\"../../assets/images/majlis-kami.png\" alt=\"Majlis Kami\">\n          <img class=\"intro__card-image\" mat-card-image src=\"../../assets/images/hp.png\" alt=\"hp\">\n        \n          <mat-card-actions class=\"intro__card-action\"><button  mat-raised-button color=\"accent\">video call</button></mat-card-actions>\n        </mat-card>\n      </div>\n\n      <div class=\"intro__card-container\" fxFlex=\"30%\">\n        <mat-card class=\"intro__card mat-elevation-z8\"  fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <mat-card-title class=\"intro__card-title\">\n              Simpan terus dalam kalendar. Saya tak nak tetamu terlupa\n          </mat-card-title>\n          <img class=\"intro__card-logo\" mat-card-image src=\"../../assets/images/majlis-kami.png\" alt=\"Majlis Kami\">\n          <img class=\"intro__card-image\" mat-card-image src=\"../../assets/images/hp.png\" alt=\"hp\">\n        \n          <mat-card-actions class=\"intro__card-action\"><button  mat-raised-button color=\"accent\">video calendar</button></mat-card-actions>\n        </mat-card>\n      </div>\n\n    </div>\n    <h1>Mudah Sangat Dengan</h1>\n    <img src=\"../../assets/images/logo-majlis-kami.png\" class=\"intro__footer\" alt=\"\">\n  </div>\n\n  <div class=\"tester\" id=\"tester\">\n    <app-tester></app-tester>\n  </div>\n\n  <div class=\"promotions\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <h1>Dapatkan <span class=\"promotions__title\">PROMOSI TERHAD</span></h1>\n    <h1><span class=\"promotions__title\">Majlis Kami</span> Sekarang</h1>\n    <img src=\"../../assets/images/flash-sale.png\" alt=\"\">\n    <div class=\"promotions__countdown\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n        <div class=\"\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n          <mat-card class=\"promotions__countdown-card mat-elevation-z8\">\n            <mat-card-title>\n              <span class=\"promotions__clock-title\">{{ hours | async}} </span>\n            </mat-card-title>\n            <mat-card-subtitle>\n              <span class=\"promotions__clock-subtitle\">hours</span>\n            </mat-card-subtitle>\n            </mat-card>\n          <mat-card class=\"promotions__countdown-card mat-elevation-z8\">\n            <mat-card-title>\n              <span class=\"promotions__clock-title\">{{ minutes | async }}</span>\n            </mat-card-title>\n            <mat-card-subtitle>\n              <span class=\"promotions__clock-subtitle\">minutes</span>\n            </mat-card-subtitle>\n          </mat-card>\n          <mat-card class=\"promotions__countdown-card mat-elevation-z8\">\n            <mat-card-title>\n              <span class=\"promotions__clock-title\">{{ seconds| async }}</span>\n            </mat-card-title>\n            <mat-card-subtitle>\n              <span class=\"promotions__clock-subtitle\">seconds</span>\n            </mat-card-subtitle>\n          </mat-card>\n        </div>             \n    </div>\n    <div class=\"promotions__cta\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n      <button mat-raised-button color=\"accent\" routerLink=\"/products\">Buy Now</button>\n      <button mat-raised-button color=\"primary\" routerLink=\"#tester\">Preview</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/promotions/promotions.component.scss":
/*!******************************************************!*\
  !*** ./src/app/promotions/promotions.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 3rem;\n  line-height: 1rem; }\n\n.intro {\n  padding: 5vh 5vw 5vh 5vw; }\n\n.intro__card {\n    padding: 10px; }\n\n.intro__card-title {\n    text-align: center; }\n\n.intro__card-logo {\n    width: 200px; }\n\n.intro__card-image {\n    width: 180px; }\n\n.intro__card-action {\n    margin-bottom: 20px; }\n\n.promotions {\n  padding: 10vh 5vw 10vh 5vw; }\n\n.promotions__title {\n    font-size: 5rem; }\n\n.promotions__countdown {\n    padding: 10vh 5vw 10vh 5vw; }\n\n.promotions__countdown-card {\n    font-size: 2rem; }\n\n.promotions__clock-title {\n    font-size: 5rem;\n    text-align: center; }\n\n.promotions__clock-subtitle {\n    font-size: 2rem;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvcHJvbW90aW9ucy9wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUtyQjtFQUVJLHdCQUF3QixFQUFBOztBQUV4QjtJQUNJLGFBQWEsRUFBQTs7QUFHakI7SUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7SUFDSSxZQUFZLEVBQUE7O0FBR2hCO0lBQ0ksWUFBWSxFQUFBOztBQUdoQjtJQUNJLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLDBCQUEwQixFQUFBOztBQUUxQjtJQUNJLGVBQWUsRUFBQTs7QUFHbkI7SUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7SUFDSSxlQUFlLEVBQUE7O0FBR25CO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQixFQUFBOztBQUd0QjtJQUNJLGVBQWU7SUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb21vdGlvbnMvcHJvbW90aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcblxufVxuXG5cbi5pbnRyb3tcblxuICAgIHBhZGRpbmc6IDV2aCA1dncgNXZoIDV2dztcblxuICAgICZfX2NhcmR7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fY2FyZC10aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbiAgICB9XG5cbiAgICAmX19jYXJkLWxvZ297XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG5cbiAgICAmX19jYXJkLWltYWdle1xuICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgfVxuXG4gICAgJl9fY2FyZC1hY3Rpb257XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuXG4ucHJvbW90aW9uc3tcbiAgICBwYWRkaW5nOiAxMHZoIDV2dyAxMHZoIDV2dztcblxuICAgICZfX3RpdGxle1xuICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgfVxuXG4gICAgJl9fY291bnRkb3due1xuICAgICAgICBwYWRkaW5nOiAxMHZoIDV2dyAxMHZoIDV2dztcbiAgICB9XG5cbiAgICAmX19jb3VudGRvd24tY2FyZHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cblxuICAgICZfX2Nsb2NrLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jbG9jay1zdWJ0aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/promotions/promotions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/promotions/promotions.component.ts ***!
  \****************************************************/
/*! exports provided: PromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function() { return PromotionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
        this.hours = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setInterval(function () {
                var countDownDate = 1559145600000;
                var now = Date.now();
                var distance = countDownDate - now;
                observer.next(Math.floor(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
            }, 1000);
        });
        this.minutes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setInterval(function () {
                var countDownDate = 1559145600000;
                var now = Date.now();
                var distance = countDownDate - now;
                observer.next(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            }, 1000);
        });
        this.seconds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setInterval(function () {
                var countDownDate = 1559145600000;
                var now = Date.now();
                var distance = countDownDate - now;
                observer.next(Math.floor((distance % (1000 * 60)) / 1000));
            }, 1000);
        });
    }
    PromotionsComponent.prototype.ngOnInit = function () {
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = 
    };
    PromotionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotions',
            template: __webpack_require__(/*! ./promotions.component.html */ "./src/app/promotions/promotions.component.html"),
            styles: [__webpack_require__(/*! ./promotions.component.scss */ "./src/app/promotions/promotions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromotionsComponent);
    return PromotionsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"form\">\n        <button mat-raised-button (click)=\"register()\">Register</button>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var user = {
            username: 'azrindinamik',
            email: 'azrindinamik@gmail.com',
            password: 'Engine1@'
        };
        this.authService.register(user)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getLogin = function (user) {
        console.log(user);
        return this.http.post('/api/hwp/user/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        return token ? true : false;
    };
    AuthService.prototype.register = function (user) {
        return this.http.post('/api/hwp/user/register', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/products/products.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/products/products.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get('/api/products')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    ProductsService.prototype.getCatogories = function () {
        return this.http.get('/api/products/categories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/test/test.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/test/test.service.ts ***!
  \***********************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var TestService = /** @class */ (function () {
    function TestService(http) {
        this.http = http;
    }
    TestService.prototype.getHome = function () {
        return this.http.get('api/home')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error); }));
    };
    TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/tester/tester.component.html":
/*!**********************************************!*\
  !*** ./src/app/tester/tester.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"test\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"test__form\" fxFlex=\"60\">\n\n      <form [formGroup]=\"form\" #formInput>\n        <h2 style=\"text-align: center\">Jom cuba e-card kami</h2>\n        <div class=\"test__form-container\" fxLayout=\"row\">\n          <div class=\"test__form-name\" fxFlex=\"50\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n              <h3 style=\"text-align: center\">Nama Anda</h3>  \n              <input class=\"test__input\" name=\"name\" matInput [formControl]=\"form.get('name')\" type=\"text\" > \n          </div>\n          <div class=\"test__form-name\" fxFlex=\"50\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n              <h3 style=\"text-align: center\">Nama Pasangan Anda</h3>  \n              <input class=\"test__input\" name=\"partner\" matInput [formControl]=\"form.get('partner')\" type=\"text\" > \n          </div>\n        </div>\n      </form>\n\n      <h2 style=\"text-align: center\">Menjemput Anda ke</h2>\n      <h1 style=\"text-align: center; font-size: 5em;\">majlis kami</h1>\n      <div class=\"test__button\" fxLayout fxLayoutAlign=\"center center\">\n        <button mat-raised-button color=\"accent\" (click)=\"onSubmit()\">PREVIEW</button>\n      </div>\n      \n\n    </div>\n    <div class=\"test__img\" fxFlex=\"40\" fxLayout fxLayoutAlign=\"center center\"> \n        <img src=\"../../assets/images/phone_big.png\" alt=\"\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tester/tester.component.scss":
/*!**********************************************!*\
  !*** ./src/app/tester/tester.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 600px) {\n  .test {\n    margin-top: 15vh;\n    background: #96cff1;\n    background: linear-gradient(90deg, #96cff1 0%, #faf6a6 42%, #f7b3d0 100%);\n    position: relative; }\n    .test__input {\n      padding: 10px;\n      border-radius: 5px; }\n    .test__img {\n      position: absolute;\n      z-index: 2;\n      -webkit-transform: scaleZ(1.2);\n              transform: scaleZ(1.2);\n      overflow: hidden;\n      right: 10%; }\n    .test__button {\n      padding-bottom: 10px; } }\n\n@media only screen and (max-width: 599px) {\n  .test {\n    margin-top: 15vh;\n    background: #96cff1;\n    background: linear-gradient(90deg, #96cff1 0%, #faf6a6 42%, #f7b3d0 100%); }\n    .test__input {\n      padding: 10px;\n      border-radius: 5px; }\n    .test__button {\n      padding-bottom: 10px; } }\n\n.category {\n  padding-top: 10vh; }\n\n.category__title {\n    text-align: center; }\n\nmat-card-title {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvdGVzdGVyL3Rlc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUE0QjtJQUM1Qix5RUFBNkc7SUFDN0csa0JBQWtCLEVBQUE7SUFFbEI7TUFDSSxhQUFhO01BQ2Isa0JBQWtCLEVBQUE7SUFHdEI7TUFDSSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLFVBQVUsRUFBQTtJQUdkO01BQ0ksb0JBQW9CLEVBQUEsRUFDdkI7O0FBSVQ7RUFDSTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBNEI7SUFDNUIseUVBQTZHLEVBQUE7SUFFN0c7TUFDSSxhQUFhO01BQ2Isa0JBQWtCLEVBQUE7SUFHdEI7TUFDSSxvQkFBb0IsRUFBQSxFQUN2Qjs7QUFLVDtFQUNJLGlCQUFpQixFQUFBOztBQUVqQjtJQUNJLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzdGVyL3Rlc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAudGVzdHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDE1MCwyMDcsMjQxKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE1MCwyMDcsMjQxLDEpIDAlLCByZ2JhKDI1MCwyNDYsMTY2LDEpIDQyJSwgcmdiYSgyNDcsMTc5LDIwOCwxKSAxMDAlKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICZfX2lucHV0e1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2ltZ3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWigxLjIpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmX19idXR0b257XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIC50ZXN0e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLDIwNywyNDEpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTUwLDIwNywyNDEsMSkgMCUsIHJnYmEoMjUwLDI0NiwxNjYsMSkgNDIlLCByZ2JhKDI0NywxNzksMjA4LDEpIDEwMCUpO1xuICAgIFxuICAgICAgICAmX19pbnB1dHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJl9fYnV0dG9ue1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cblxuLmNhdGVnb3J5e1xuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xuXG4gICAgJl9fdGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbm1hdC1jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tester/tester.component.ts":
/*!********************************************!*\
  !*** ./src/app/tester/tester.component.ts ***!
  \********************************************/
/*! exports provided: TesterComponent, ExDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterComponent", function() { return TesterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExDialog", function() { return ExDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TesterComponent = /** @class */ (function () {
    function TesterComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            partner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    TesterComponent.prototype.ngOnInit = function () {
    };
    TesterComponent.prototype.onSubmit = function () {
        var name = this.form.get('name').value;
        var partner = this.form.get('partner').value;
        if (name && partner) {
            var dialogRef = this.dialog.open(ExDialog, {
                width: '300px',
                data: { name: name, partner: partner }
            });
        }
        else {
            this.snackBar.open('Sila masukkan nama dan nama pasangan', 'Close', { duration: 7000 });
        }
    };
    TesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tester',
            template: __webpack_require__(/*! ./tester.component.html */ "./src/app/tester/tester.component.html"),
            styles: [__webpack_require__(/*! ./tester.component.scss */ "./src/app/tester/tester.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], TesterComponent);
    return TesterComponent;
}());

var ExDialog = /** @class */ (function () {
    function ExDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ExDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ExDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-dialog',
            template: " \n    <div class=\"card\" style=\"text-align: center; position: relative; background-color: #fff;\">\n      <div class=\"card__image\">\n        <img src=\"../../assets/images/phone_big.png\">\n        <div class=\"card__writings\" \n          style=\"\n            z-index: 2;\n            position: absolute;\n            top: 38%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          \">\n          <h2 style=\"font-size: 30px; background-color: #fff; padding: 10px;\">{{ data.name }} <br>\n            & <br>\n            {{ data.partner }}\n          </h2>\n        </div>\n      </div>\n      \n    </div>\n  ",
            styles: [__webpack_require__(/*! ./tester.component.scss */ "./src/app/tester/tester.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ExDialog);
    return ExDialog;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/azrin/project/g8/ngwp/ngwp-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map