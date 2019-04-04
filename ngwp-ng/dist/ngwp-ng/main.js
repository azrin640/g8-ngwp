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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] }
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

module.exports = "<app-navigations></app-navigations>\n\n"

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navigations_navigations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigations/navigations.component */ "./src/app/navigations/navigations.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/post-service/post-service.service */ "./src/app/services/post-service/post-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_media_service_media_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/media-service/media-service.service */ "./src/app/services/media-service/media-service.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _navigations_navigations_component__WEBPACK_IMPORTED_MODULE_7__["NavigationsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"]
            ],
            providers: [
                _services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_9__["PostService"],
                _services_media_service_media_service_service__WEBPACK_IMPORTED_MODULE_13__["MediaService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"footer\">\n\n\n    <div class=\"footer__notes\">\n      <div class=\"footer__social\" fxLayout=\"row\">\n        <img class=\"footer__social-image\" src=\"../../assets/images/facebook.png\" alt=\"\">\n        <img class=\"footer__social-image\" src=\"../../assets/images/whatsapp.png\" alt=\"\">\n        <img class=\"footer__social-image\" src=\"../../assets/images/instagram.png\" alt=\"\">\n      </div>\n      <div class=\"footer__copyright\">\n        DIURUSKAN OLEH MAJLISKAMI.MY\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 40vh;\n  background: #96cff1;\n  background: linear-gradient(90deg, #96cff1 0%, #faf6a6 42%, #f7b3d0 100%); }\n  .footer__notes {\n    float: right;\n    padding-right: 10px; }\n  .footer__social-image {\n    margin-top: 30vh;\n    padding: 10px;\n    width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixtQkFBNEI7RUFDNUIseUVBQTZHLEVBQUE7RUFFN0c7SUFDSSxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUFHdkI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLDIwNywyNDEpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNTAsMjA3LDI0MSwxKSAwJSwgcmdiYSgyNTAsMjQ2LDE2NiwxKSA0MiUsIHJnYmEoMjQ3LDE3OSwyMDgsMSkgMTAwJSk7XG5cbiAgICAmX19ub3Rlc3tcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgICZfX3NvY2lhbC1pbWFnZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMzB2aDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"banner\">\n    <img class=\"banner__image\" src=\"../../assets/images/banner.png\" alt=\"\">\n  </div>\n\n  <div class=\"design\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"design__title\">\n      <h2>DESIGN TERBARU!</h2>\n    </div>\n\n    <div class=\"design__image\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n      <img class=\"design__item\" src=\"../../assets/images/hp.png\" alt=\"\">\n      <img class=\"design__item\" src=\"../../assets/images/hp.png\" alt=\"\">\n      <img class=\"design__item\" src=\"../../assets/images/hp.png\" alt=\"\">\n      <img class=\"design__item\" src=\"../../assets/images/hp.png\" alt=\"\">\n      <img class=\"design__item\" src=\"../../assets/images/hp.png\" alt=\"\">\n      <img class=\"design__item\" src=\"../../assets/images/hp.png\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"form__title\">\n      <h2>Jom cuba ecard kami!</h2>\n    </div>\n\n    <div class=\"form__input\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"50\" fxLayout fxLayoutAlign=\"center center\">\n        <div class=\"form__input\" fxLayout=\"column\">\n\n          <mat-label class=\"form__label\">Nama Anda</mat-label>  \n          <input type=\"text\" >\n\n        </div>\n      </div>\n\n      <div fxFlex=\"50\" fxLayout fxLayoutAlign=\"center center\">\n        <div class=\"form__input\" fxLayout=\"column\">\n\n          <mat-label class=\"form__label\">Nama Anda</mat-label>  \n          <input type=\"text\" >\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"form__title\">\n      <h2>Menjemput Anda ke </h2>\n      <h1 class=\"announce\">Majlis Kami</h1>      \n    </div>\n\n    <div class=\"button\">\n      <button mat-raised-button >PREVIEW!</button>\n    </div>\n\n  </div>\n\n  <div class=\"design\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"design__title\">\n      <h2>DESIGN CATEGORY</h2>\n    </div>\n\n    <div class=\"design__image\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n\n      <mat-card class=\"mat-elevation-z8\">\n          <img mat-card-image src=\"../../assets/images/floral.png\" alt=\"\">\n        <mat-card-title>\n          Floral\n        </mat-card-title>\n      </mat-card>\n\n      <mat-card class=\"mat-elevation-z8\">\n          <img mat-card-image src=\"../../assets/images/vintage.png\" alt=\"\">\n        <mat-card-title>\n          Vintage\n        </mat-card-title>\n      </mat-card>\n\n      <mat-card class=\"mat-elevation-z8\">\n          <img mat-card-image src=\"../../assets/images/islamic.png\" alt=\"\">\n        <mat-card-title>\n          Islamic\n        </mat-card-title>\n      </mat-card>\n\n      <mat-card class=\"mat-elevation-z8\">\n          <img mat-card-image src=\"../../assets/images/pattern.png\" alt=\"\">\n        <mat-card-title>\n          Pattern\n        </mat-card-title>\n      </mat-card>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner__image {\n  width: 100%;\n  height: auto; }\n\n.design {\n  padding-bottom: 10vh; }\n\n.design__title {\n    color: #E8308F;\n    padding-top: 10vh; }\n\n.design__item {\n    margin: 10px;\n    width: 150px;\n    height: auto;\n    box-shadow: 9px 13px 8px -6px rgba(0, 0, 0, 0.75);\n    border-radius: 20px; }\n\n.design__item2 {\n    margin: 10px;\n    width: 300px;\n    height: auto;\n    box-shadow: 9px 13px 8px -6px rgba(0, 0, 0, 0.75); }\n\n.design__item:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  box-shadow: 9px 13px 8px -6px rgba(0, 0, 0, 0.75); }\n\n.form {\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n  background: #96cff1;\n  background: linear-gradient(90deg, #96cff1 0%, #faf6a6 42%, #f7b3d0 100%); }\n\n.form__title {\n    color: #fff;\n    text-align: center; }\n\n.form__label {\n    color: #fff; }\n\n.form__input {\n    width: 60%; }\n\n::ng-deep .mat-form-field .mat-form-field-flex {\n  text-align: center; }\n\nmat-label {\n  text-align: center; }\n\ninput {\n  padding: 10px;\n  border-radius: 5px;\n  border-width: 0; }\n\n.announce {\n  font-size: 75px;\n  font-family: sans-serif; }\n\nbutton {\n  color: #99bfc7 !important; }\n\nmat-card:hover {\n  -webkit-transform: scale(1.08);\n          transform: scale(1.08); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJcEI7RUFFSSxvQkFBb0IsRUFBQTs7QUFFcEI7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7O0FBSXJCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBR1osaURBQThDO0lBQzlDLG1CQUFtQixFQUFBOztBQUd2QjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUdaLGlEQUE4QyxFQUFBOztBQUl0RDtFQUNJLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFHckIsaURBQThDLEVBQUE7O0FBR2xEO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBNEI7RUFDNUIseUVBQTZHLEVBQUE7O0FBRTdHO0lBQ0ksV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQUd0QjtJQUNJLFdBQVcsRUFBQTs7QUFHZjtJQUNJLFVBQVUsRUFBQTs7QUFJbEI7RUFFTSxrQkFBa0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcntcblxuICAgICZfX2ltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuLmRlc2lnbntcbiAgICBcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbiAgICBcbiAgICAmX190aXRsZXtcbiAgICAgICAgY29sb3I6ICNFODMwOEY7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHZoO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAmX19pdGVte1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDlweCAxM3B4IDhweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogOXB4IDEzcHggOHB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgYm94LXNoYWRvdzogOXB4IDEzcHggOHB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG5cbiAgICAmX19pdGVtMntcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA5cHggMTNweCA4cHggLTZweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDlweCAxM3B4IDhweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDlweCAxM3B4IDhweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgfVxufVxuXG4uZGVzaWduX19pdGVtOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA5cHggMTNweCA4cHggLTZweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogOXB4IDEzcHggOHB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBib3gtc2hhZG93OiA5cHggMTNweCA4cHggLTZweCByZ2JhKDAsMCwwLDAuNzUpO1xufVxuXG4uZm9ybXtcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUwLDIwNywyNDEpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNTAsMjA3LDI0MSwxKSAwJSwgcmdiYSgyNTAsMjQ2LDE2NiwxKSA0MiUsIHJnYmEoMjQ3LDE3OSwyMDgsMSkgMTAwJSk7XG5cbiAgICAmX190aXRsZXtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19sYWJlbHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJl9faW5wdXR7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxufVxuXG46Om5nLWRlZXAge1xuICAgIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtZmxleHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxubWF0LWxhYmVse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uYW5ub3VuY2V7XG4gICAgZm9udC1zaXplOiA3NXB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuYnV0dG9ue1xuICAgIGNvbG9yOiAjOTliZmM3ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59Il19 */"

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
/* harmony import */ var _services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post-service/post-service.service */ "./src/app/services/post-service/post-service.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
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

/***/ "./src/app/navigations/navigations.component.html":
/*!********************************************************!*\
  !*** ./src/app/navigations/navigations.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"logo\" fxLayout fxLayoutAlign=\"center center\">\n        <img fxFlex=\"50%\" src=\"../../assets/images/logo_g8-my.png\" alt=\"g8.my logo\">\n    </div>\n\n    <div class=\"menu\">\n        <mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <button mat-button routerLink=\"/\">Home</button>\n                <button mat-button routerLink=\"/contact\">Contact</button>\n        </mat-toolbar>    \n    </div>\n    <router-outlet></router-outlet>\n\n    <app-footer></app-footer>\n\n</div> \n\n\n\n\n"

/***/ }),

/***/ "./src/app/navigations/navigations.component.scss":
/*!********************************************************!*\
  !*** ./src/app/navigations/navigations.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  padding-top: 10vh;\n  padding-bottom: 5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL3Byb2plY3QvZzgvbmd3cC9uZ3dwLW5nL3NyYy9hcHAvbmF2aWdhdGlvbnMvbmF2aWdhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9ucy9uYXZpZ2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/navigations/navigations.component.ts":
/*!******************************************************!*\
  !*** ./src/app/navigations/navigations.component.ts ***!
  \******************************************************/
/*! exports provided: NavigationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationsComponent", function() { return NavigationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_media_service_media_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/media-service/media-service.service */ "./src/app/services/media-service/media-service.service.ts");



var NavigationsComponent = /** @class */ (function () {
    function NavigationsComponent(mediaService) {
        this.mediaService = mediaService;
    }
    NavigationsComponent.prototype.ngOnInit = function () {
        this.mediaService.getMedia(17).subscribe(function (response) {
            console.log(response);
        });
    };
    NavigationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigations',
            template: __webpack_require__(/*! ./navigations.component.html */ "./src/app/navigations/navigations.component.html"),
            styles: [__webpack_require__(/*! ./navigations.component.scss */ "./src/app/navigations/navigations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_media_service_media_service_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"]])
    ], NavigationsComponent);
    return NavigationsComponent;
}());



/***/ }),

/***/ "./src/app/services/media-service/media-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/media-service/media-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MediaService = /** @class */ (function () {
    function MediaService(http) {
        this.http = http;
    }
    MediaService.prototype.getMedia = function (id) {
        console.log(id);
        return this.http.get("http://localhost:8000/wp-json/wp/v2/media/" + id);
    };
    MediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "./src/app/services/post-service/post-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/post-service/post-service.service.ts ***!
  \***************************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getPosts = function () {
        return this.http.get('http://localhost:8000/api/v2/getposts');
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
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