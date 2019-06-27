(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "./src/app/features/home/home-footer/home-footer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/home/home-footer/home-footer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\" \n        style=\"border-top:1px solid grey\">\n    <div class=\"d-flex\">\n        <ul class=\"list-inline mx-auto justify-content-center\">\n                             \n             <li class=\"list-inline-item\">\n                <a href=\"#\">Home</a>\n              </li>\n                   \n              <li class=\"list-inline-item\">\n                 <a routerLink=\"/about\">About</a>\n              </li>          \n         </ul>\n    </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/features/home/home-footer/home-footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/home/home-footer/home-footer.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HomeFooterComponent = class HomeFooterComponent {
};
HomeFooterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-home-footer',
        template: __webpack_require__(/*! ./home-footer.component.html */ "./src/app/features/home/home-footer/home-footer.component.html"),
        styles: ["\n        footer{\n            background-color: black;\n            padding: 20px 0px;\n        }\n        \n        footer ul{\n            list-style:none;\n            margin:0 auto;\n            display:inline-block;\n            padding-top:30px;\n        }\n        \n        footer ul li{\n            float:left;\n        }\n        \n        footer ul li a{\n            color:#b1aca1;\n            padding:20px;\n        }\n        \n        footer ul li a:hover{\n            color:#FFBF00;\n            text-decoration:none;\n        }\n       \n        "]
    })
], HomeFooterComponent);
exports.HomeFooterComponent = HomeFooterComponent;


/***/ }),

/***/ "./src/app/features/home/home-form/home-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/home/home-form/home-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>   \n    \n      <rb-login></rb-login>\n    \n</section>\n  "

/***/ }),

/***/ "./src/app/features/home/home-form/home-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/home/home-form/home-form.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HomeFormComponent = class HomeFormComponent {
};
HomeFormComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-home-form',
        template: __webpack_require__(/*! ./home-form.component.html */ "./src/app/features/home/home-form/home-form.component.html")
    })
], HomeFormComponent);
exports.HomeFormComponent = HomeFormComponent;


/***/ }),

/***/ "./src/app/features/home/home-header/home-header.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/home/home-header/home-header.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n\t<header class=\"header\">\n\t\t<div class=\"text-box\">\n\t\t<h1 class=\"heading-primary\">\n\t\t\t<span class=\"heading-primary-main text-dark\">RECYCLE <span class=\"heading-primary-sim\">/</span></span>\n\t\t\t<span class=\"heading-primary-sub text-dark\">SHARE CULTURE</span>\n\t\t</h1>\n\t\t<button id=\"popup\"\n\t\tclass=\"btn btn-white btn-animated text-info\" routerLink=\"/register\" >REGISTER</button>\n\t\t\n\n\t\t\n\t\t\n\t</div>\n</header>\n</div>"

/***/ }),

/***/ "./src/app/features/home/home-header/home-header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/home/home-header/home-header.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HomeHeaderComponent = class HomeHeaderComponent {
};
HomeHeaderComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-home-header',
        template: __webpack_require__(/*! ./home-header.component.html */ "./src/app/features/home/home-header/home-header.component.html"),
        styles: ["\n        \n        \n        .header-container{\n            background-color: black;\n          }\n          \n          .header {\n            height: 55vh;\n            background-image: \n            linear-gradient(to right bottom, \n            rgba(204, 227, 233, 0.8),\n            rgba(6, 6, 7, 0.3)),   \n            url('https://media.giphy.com/media/Gf5pzZxHdyTcs/giphy.gif');  \n            background-size: 10rem;\n            background-repeat: round;\n            background-position: inherit;\n            position: relative;\n            background-clip: black;\n            clip-path: polygon(0 0, 100% 0, 100% 35vh, 0 100%);\n          }\n          \n          .brand { \n            font-size: 20px; \n            color:black;\n          }\n          \n          .brand2{\n            font-size: 30px;\n            color:#FFBF00;\n          }\n          \n          .text-box {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            text-align: center;\n          }\n          \n          .heading-primary {\n            color: #fff;\n            text-transform: uppercase;\n            backface-visibility: hidden;\n            margin-bottom: 30px;\n          }\n          \n          .heading-primary-sim{\n            color: #FFBF00;\n            font-weight: bold;\n            font-size: 40px;\n          }\n          \n          .heading-primary-main {\n            display: block;\n            font-size: 26px;\n            font-weight: 400;\n            letter-spacing: 5px;\n          }\n          \n          .heading-primary-sub {\n            display: block;\n            font-size: 18px;\n            font-weight: 700;\n            letter-spacing: 7.4px;\n          }\n\n          #popup {\n            border-radius: 100px;\n\n          }\n          \n          .btn:link,\n          .btn:visited {\n            text-transform: uppercase;\n            text-decoration: none;\n            padding: 10px 20px;\n            display: inline-block;\n            transition: all .2s;\n            position: relative;\n          }\n          \n          .btn:hover {\n            transform: translateY(-3px);\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 1);\n          }\n          \n          .btn:active {\n            transform: translateY(-1px);\n            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n          }\n          \n          .btn-white {\n            background-color: #fff;\n            font-size: 14px;\n          }\n        "]
    })
], HomeHeaderComponent);
exports.HomeHeaderComponent = HomeHeaderComponent;


/***/ }),

/***/ "./src/app/features/home/home-media/home-media.component.html":
/*!********************************************************************!*\
  !*** ./src/app/features/home/home-media/home-media.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"typewriter\">\n\t\t<h1>Welcome to reBook</h1>\n\t  </div>"

/***/ }),

/***/ "./src/app/features/home/home-media/home-media.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/home/home-media/home-media.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HomeMediaComponent = class HomeMediaComponent {
};
HomeMediaComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-home-media',
        template: __webpack_require__(/*! ./home-media.component.html */ "./src/app/features/home/home-media/home-media.component.html"),
        styles: ["div {\n            margin-top: 5rem;\n            margin-left: 9rem;\n            text-align: center;\n        }\n          .typewriter h1 {\n            color: #fff;\n            font-family: monospace;\n            overflow: hidden;\n            border-right: .15em solid yellow; \n            white-space: nowrap; \n            margin: 0 auto; \n            letter-spacing: .10em; \n            animation: \n              typing 3.5s steps(30, end),\n              blink-caret .5s step-end infinite;\n          }\n          \n          @keyframes typing {\n            from { width: 0 }\n            to { width: 100% }\n          }\n          \n          @keyframes blink-caret {\n            from, to { border-color: transparent }\n            50% { border-color: orange }\n          }  \n  \n         "]
    })
], HomeMediaComponent);
exports.HomeMediaComponent = HomeMediaComponent;


/***/ }),

/***/ "./src/app/features/home/home.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const home_component_1 = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home/home.component.ts");
const home_form_component_1 = __webpack_require__(/*! ./home-form/home-form.component */ "./src/app/features/home/home-form/home-form.component.ts");
const home_media_component_1 = __webpack_require__(/*! ./home-media/home-media.component */ "./src/app/features/home/home-media/home-media.component.ts");
const shared_module_1 = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
const home_header_component_1 = __webpack_require__(/*! ./home-header/home-header.component */ "./src/app/features/home/home-header/home-header.component.ts");
const home_footer_component_1 = __webpack_require__(/*! ./home-footer/home-footer.component */ "./src/app/features/home/home-footer/home-footer.component.ts");
const routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            home_component_1.HomeComponent,
            home_form_component_1.HomeFormComponent,
            home_media_component_1.HomeMediaComponent,
            home_header_component_1.HomeHeaderComponent,
            home_footer_component_1.HomeFooterComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule,
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/features/home/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/features/home/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n    <rb-home-header></rb-home-header>\n<main class=\"d-flex justify-content-around w-80\">\n  <div>\n    <rb-home-media></rb-home-media>\n  </div>\n  <div class=\"col-5\">\n   <rb-home-form></rb-home-form>\n  </div>\n</main>\n  <div>\n  <rb-home-footer></rb-home-footer>\n</div>\n\n</div>\n  "

/***/ }),

/***/ "./src/app/features/home/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/features/home/home/home.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HomeComponent = class HomeComponent {
};
HomeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/home/home/home.component.html"),
        styles: ["\n      .home-container{\n        background: black;\n        height: 100vh;\n\n      }\n    "]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ })

}]);
//# sourceMappingURL=features-home-home-module.js.map