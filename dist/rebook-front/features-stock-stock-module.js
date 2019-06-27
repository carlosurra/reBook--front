(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-stock-stock-module"],{

/***/ "./src/app/features/stock/shelves/shelves.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/stock/shelves/shelves.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showShelves === false\" class= \"container\">\n    </div>\n    <div *ngIf=\"showShelves === true\" class=\"global\">\n    <div *ngFor=\"let stock of libraryService.stock\">\n    <div class=\"card\" style=\"width: 21rem\">\n        <rb-cover [library]=\"stock.cover\"></rb-cover>\n        <div class=\"card-body\">\n            <h5 class=\"card-title text-info\">{{ stock.title }}</h5>\n            <h5 class=\"card-title text-info\">{{ stock.author }}</h5>\n            <p class=\"card-text text-white\">{{ stock.description }}</p>\n                </div>\n        </div>\n    </div>\n    \n  "

/***/ }),

/***/ "./src/app/features/stock/shelves/shelves.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/features/stock/shelves/shelves.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".global {\n  background-size: cover;\n  background-color: black;\n  margin: 3rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.card {\n  flex: 0 1 24%;\n  margin-top: 2rem;\n  padding: 2rem;\n  height: 35rem;\n  text-align: center;\n  border-color: #FFBF00;\n  background-color: black; }\n\n.btn {\n  margin-top: 1rem; }\n\n.btn:visited {\n  text-decoration: none;\n  padding: 10px 20px;\n  display: inline-block;\n  border-radius: 100px;\n  transition: all .2s;\n  position: relative; }\n\n.btn:hover {\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n  box-shadow: 0 10px 20px white; }\n\n.btn:active {\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: 0 10px 10px rgba(255, 191, 0, 0.75); }\n\n.btn-white {\n  background-color: #fff;\n  color: #FFBF00;\n  font-size: 14px;\n  border-radius: 100px; }\n\n@media screen and (min-width: 40em) {\n  .cards {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  .card {\n    flex: 0 1 calc(25% - 1em); } }\n\n@media (min-width: 768px) {\n  #max-height {\n    max-height: 32rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM4L0Rlc2t0b3AvcmVCb29rLS1mcm9udC9zcmMvYXBwL2ZlYXR1cmVzL3N0b2NrL3NoZWx2ZXMvc2hlbHZlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUV0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCLEVBQUE7O0FBRzlCO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDZCQUEwQyxFQUFBOztBQUc1QztFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsK0NBQStDLEVBQUE7O0FBR2pEO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0U7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QixFQUFBO0VBR2xDO0lBQ0kseUJBQXlCLEVBQUEsRUFDNUI7O0FBTUQ7RUFDRTtJQUNFLGlCQUFpQixFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvc3RvY2svc2hlbHZlcy9zaGVsdmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdsb2JhbCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgXG4gICAgLmNhcmQge1xuICAgICAgZmxleDogMCAxIDI0JTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgaGVpZ2h0OiAzNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGQkYwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgXG4gIH1cbiAgXG4gIC5idG4ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbiAgXG4gIC5idG46dmlzaXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5idG46aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cbiAgXG4gIC5idG46YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgyNTUsIDE5MSwgMCwgMC43NSk7XG4gIH1cbiAgXG4gIC5idG4td2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICNGRkJGMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgLmNhcmRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICBcbiAgICAuY2FyZCB7XG4gICAgICAgIGZsZXg6IDAgMSBjYWxjKDI1JSAtIDFlbSk7XG4gICAgfVxuICB9XG4gICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgIFxuICAgICAgI21heC1oZWlnaHQgeyAgXG4gICAgICAgIG1heC1oZWlnaHQ6IDMycmVtOyAgXG4gICAgICB9ICBcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/features/stock/shelves/shelves.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/stock/shelves/shelves.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const library_service_1 = __webpack_require__(/*! src/app/core/services/library.service */ "./src/app/core/services/library.service.ts");
let ShelvesComponent = class ShelvesComponent {
    constructor(router, libraryService) {
        this.router = router;
        this.libraryService = libraryService;
        this.showShelves = false;
    }
    ngOnInit() {
        this.libraryService
            .getStock()
            .subscribe((stock) => { if (stock.length > 0)
            this.showShelves = true; });
    }
};
ShelvesComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-shelves',
        template: __webpack_require__(/*! ./shelves.component.html */ "./src/app/features/stock/shelves/shelves.component.html"),
        styles: [__webpack_require__(/*! ./shelves.component.scss */ "./src/app/features/stock/shelves/shelves.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        library_service_1.LibraryService])
], ShelvesComponent);
exports.ShelvesComponent = ShelvesComponent;


/***/ }),

/***/ "./src/app/features/stock/stock-footer/stock-footer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/stock/stock-footer/stock-footer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n        <div class=\"container\" \n            style=\"border-top:1px solid grey\">\n        <div class=\"d-flex\">\n            <ul class=\"list-inline mx-auto justify-content-center\">\n                                 \n                 <li class=\"list-inline-item\">\n                    <a href=\"#\">Home</a>\n                  </li>\n                       \n                  <li class=\"list-inline-item\">\n                     <a routerLink=\"/about\">About</a>\n                  </li>\n                  \n                  <li class=\"list-inline-item\">\n                        <a routerLink=\"/users\">Users</a>\n                     </li>  \n             </ul>\n        </div>\n        </div>\n    </footer>\n    "

/***/ }),

/***/ "./src/app/features/stock/stock-footer/stock-footer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/stock/stock-footer/stock-footer.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let StockFooterComponent = class StockFooterComponent {
};
StockFooterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-stock-footer',
        template: __webpack_require__(/*! ./stock-footer.component.html */ "./src/app/features/stock/stock-footer/stock-footer.component.html"),
        styles: ["\n        footer{\n            background-color: black;\n            padding: 20px 0px;\n        }\n        \n        footer ul{\n            list-style:none;\n            margin:0 auto;\n            display:inline-block;\n            padding-top:30px;\n        }\n        \n        footer ul li{\n            float:left;\n        }\n        \n        footer ul li a{\n            color:white;\n            padding:20px;\n        }\n        \n        footer ul li a:hover{\n            color:#FFBF00;\n            text-decoration:none;\n        }\n       \n        "]
    })
], StockFooterComponent);
exports.StockFooterComponent = StockFooterComponent;


/***/ }),

/***/ "./src/app/features/stock/stock-header/stock-header.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/stock/stock-header/stock-header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n\t\t<header class=\"header\">\n\t\t\t<div class=\"text-box d-flex align-items-center\">\n\t\t\t<h1 class=\"heading-primary d-flex align-items-center\">\n\t\t\t\t<rb-avatar class=\"avatar\" [user]=\"this.userService?.currentUser\"></rb-avatar>\n\t\t\t\t<span class=\"heading-primary-main text-dark\">Choose your favorite books<span class=\"heading-primary-sim\">/</span></span>\n\t\t\t\t<span class=\"heading-primary-sub\" > </span>\n\t\t\t</h1>\n\t\t\t<button id=\"popup\"\n\t\t\tclass=\"btn btn-white btn-animated text-info\" routerLink=\"/wall\" >MY LIBRARY</button>\t\t\t\n\n\t\t</div>\n\t</header>\n\t</div>"

/***/ }),

/***/ "./src/app/features/stock/stock-header/stock-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/stock/stock-header/stock-header.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const user_service_1 = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
let StockHeaderComponent = class StockHeaderComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService
            .getUserProfile()
            .subscribe(res => {
            console.log({ res });
        });
    }
};
StockHeaderComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-stock-header',
        template: __webpack_require__(/*! ./stock-header.component.html */ "./src/app/features/stock/stock-header/stock-header.component.html"),
        styles: ["\n        \n        .header-container{\n          background-color: black;\n        }\n        .header {\n          height: 55vh;\n          background-image: \n          linear-gradient(to right bottom, \n          rgba(204, 227, 233, 0.8),\n          rgba(6, 6, 7, 0.3)),   \n          url('https://media.giphy.com/media/Gf5pzZxHdyTcs/giphy.gif');  \n          background-size: 10rem;\n          background-repeat: round;\n          background-position: inherit;\n          position: relative;\n          background-clip: black;\n          clip-path: polygon(0 0, 100% 0, 100% 35vh, 0 100%);\n        }\n        \n        .brand { \n          font-size: 20px; \n          color:black;\n        }\n        \n        .brand2{\n          font-size: 30px;\n          color:#FFBF00;\n        }\n        \n        .text-box {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          text-align: center;\n        }\n        \n        .heading-primary {\n          color: #fff;\n          text-transform: uppercase;\n          backface-visibility: hidden;\n          margin-bottom: 30px;\n        }\n        \n        .heading-primary-sim{\n          color: #FFBF00;\n          font-weight: bold;\n          font-size: 40px;\n        }\n        \n        .heading-primary-main {\n          display: block;\n          font-size: 26px;\n          font-weight: 400;\n          letter-spacing: 5px;\n        }\n        \n        .heading-primary-sub {\n          display: block;\n          font-size: 18px;\n          font-weight: 700;\n          letter-spacing: 7.4px;\n        }\n\n        #popup {\n          border-radius: 100px;\n\n        }\n        \n        .btn:link,\n        .btn:visited {\n          text-transform: uppercase;\n          text-decoration: none;\n          padding: 10px 20px;\n          display: inline-block;\n          transition: all .2s;\n          position: relative;\n        }\n        \n        .btn:hover {\n          transform: translateY(-3px);\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 1);\n        }\n        \n        .btn:active {\n          transform: translateY(-1px);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n        }\n        \n        .btn-white {\n          background-color: #fff;\n          font-size: 14px;\n        }\n         "]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService])
], StockHeaderComponent);
exports.StockHeaderComponent = StockHeaderComponent;


/***/ }),

/***/ "./src/app/features/stock/stock.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/stock/stock.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const shared_module_1 = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
const stock_component_1 = __webpack_require__(/*! ./stock/stock.component */ "./src/app/features/stock/stock/stock.component.ts");
const stock_header_component_1 = __webpack_require__(/*! ./stock-header/stock-header.component */ "./src/app/features/stock/stock-header/stock-header.component.ts");
const stock_footer_component_1 = __webpack_require__(/*! ./stock-footer/stock-footer.component */ "./src/app/features/stock/stock-footer/stock-footer.component.ts");
const shelves_component_1 = __webpack_require__(/*! ./shelves/shelves.component */ "./src/app/features/stock/shelves/shelves.component.ts");
const routes = [
    {
        path: '',
        component: stock_component_1.StockComponent
    }
];
let StockModule = class StockModule {
};
StockModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            stock_component_1.StockComponent,
            stock_header_component_1.StockHeaderComponent,
            stock_footer_component_1.StockFooterComponent,
            shelves_component_1.ShelvesComponent,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule,
        ]
    })
], StockModule);
exports.StockModule = StockModule;


/***/ }),

/***/ "./src/app/features/stock/stock/stock.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/stock/stock/stock.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"global d-flex flex-column\">\n    <div>\n        <rb-stock-header></rb-stock-header>\n    </div>\n    <main>\n    <div>\n        <rb-shelves></rb-shelves>\n    </div>\n    <div class=\"p-2\">\n    </div>\n    </main>\n    <div class=\"p-2\">\n        <rb-stock-footer></rb-stock-footer>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/features/stock/stock/stock.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/stock/stock/stock.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let StockComponent = class StockComponent {
};
StockComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-stock',
        template: __webpack_require__(/*! ./stock.component.html */ "./src/app/features/stock/stock/stock.component.html"),
        styles: ["\n        .global {\n          background: black;\n        }\n      "]
    })
], StockComponent);
exports.StockComponent = StockComponent;


/***/ })

}]);
//# sourceMappingURL=features-stock-stock-module.js.map