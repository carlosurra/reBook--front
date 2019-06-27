(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-wall-wall-module"],{

/***/ "./src/app/features/wall/library/library.component.html":
/*!**************************************************************!*\
  !*** ./src/app/features/wall/library/library.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div *ngIf=\"showBooks === false\" class= \"container\">\n  </div>\n  <div *ngIf=\"showBooks === true\" class=\"global\">\n  <div *ngFor=\"let library of libraryService.library\">\n  <div class=\"card\" style=\"width: 21rem\">\n      <rb-cover [library]=\"library.cover\"></rb-cover>\n      <div class=\"card-body\">\n          <h5 class=\"card-title text-info\">{{ library.title }}</h5>\n          <h5 class=\"card-title text-info\">{{ library.author }}</h5>\n          <p class=\"card-text text-white\">{{ library.description }}</p>\n          <div>\n              <i class=\"fas fa-trash-alt text-info\" (click)=\"deleteBook(library.id)\">DELETE</i> \n              </div>\n      </div>\n      <rb-add-cover [imageUrl]=\"library.cover\" [id]=\"library.id\"></rb-add-cover>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/features/wall/library/library.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/features/wall/library/library.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".global {\n  background-size: cover;\n  background-color: black;\n  margin: 3rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\ni {\n  cursor: pointer; }\n\n.card {\n  flex: 0 1 24%;\n  margin-top: 2rem;\n  padding: 2rem;\n  height: 35rem;\n  text-align: center;\n  border-color: #FFBF00;\n  background-color: black; }\n\n.btn {\n  margin-top: 1rem; }\n\n.btn:visited {\n  text-decoration: none;\n  padding: 10px 20px;\n  display: inline-block;\n  border-radius: 100px;\n  transition: all .2s;\n  position: relative; }\n\n.btn:hover {\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n  box-shadow: 0 10px 20px white; }\n\n.btn:active {\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: 0 10px 10px rgba(255, 191, 0, 0.75); }\n\n.btn-white {\n  background-color: #fff;\n  color: #FFBF00;\n  font-size: 14px;\n  border-radius: 100px; }\n\n@media screen and (min-width: 40em) {\n  .cards {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  .card {\n    flex: 0 1 calc(25% - 1em); } }\n\n@media (min-width: 768px) {\n  #max-height {\n    max-height: 32rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM4L0Rlc2t0b3AvcmVCb29rLS1mcm9udC9zcmMvYXBwL2ZlYXR1cmVzL3dhbGwvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQXNCO0VBRXRCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFFOUI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDZCQUEwQyxFQUFBOztBQUc1QztFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsK0NBQStDLEVBQUE7O0FBR2pEO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0U7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QixFQUFBO0VBR2xDO0lBQ0kseUJBQXlCLEVBQUEsRUFDNUI7O0FBTUQ7RUFDRTtJQUNFLGlCQUFpQixFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvd2FsbC9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5nbG9iYWwge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgLmNhcmQge1xuICAgIGZsZXg6IDAgMSAyNCU7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGhlaWdodDogMzVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGQkYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5idG46dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMjU1LCAxOTEsIDAsIDAuNzUpO1xufVxuXG4uYnRuLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNGRkJGMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgLmNhcmRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuY2FyZCB7XG4gICAgICBmbGV4OiAwIDEgY2FsYygyNSUgLSAxZW0pO1xuICB9XG59XG4gXG4gIFxuICBcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyAgXG4gICAgI21heC1oZWlnaHQgeyAgXG4gICAgICBtYXgtaGVpZ2h0OiAzMnJlbTsgIFxuICAgIH0gIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/features/wall/library/library.component.ts":
/*!************************************************************!*\
  !*** ./src/app/features/wall/library/library.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const library_service_1 = __webpack_require__(/*! src/app/core/services/library.service */ "./src/app/core/services/library.service.ts");
const user_service_1 = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
let LibraryComponent = class LibraryComponent {
    constructor(router, libraryService, userService) {
        this.router = router;
        this.libraryService = libraryService;
        this.userService = userService;
        this.showBooks = false;
    }
    ngOnInit() {
        this.libraryService
            .getLibrary()
            .subscribe((library) => { if (library.length > 0)
            this.showBooks = true; });
    }
    deleteBook(id) {
        this.libraryService
            .deleteBook(id)
            .subscribe();
    }
    uploadCover() {
        this.libraryService
            .getLibrary()
            .subscribe();
    }
    refresh() {
        window.location.reload();
    }
};
LibraryComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-library',
        template: __webpack_require__(/*! ./library.component.html */ "./src/app/features/wall/library/library.component.html"),
        styles: [__webpack_require__(/*! ./library.component.scss */ "./src/app/features/wall/library/library.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        library_service_1.LibraryService,
        user_service_1.UserService])
], LibraryComponent);
exports.LibraryComponent = LibraryComponent;


/***/ }),

/***/ "./src/app/features/wall/wall-footer/wall-footer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/wall/wall-footer/wall-footer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer>    \n        <div class=\"container\" \n            style=\"border-top:1px solid grey\">\n        <div class=\"d-flex\">\n            <ul class=\"list-inline mx-auto justify-content-center\">\n                                 \n                 <li class=\"list-inline-item\">\n                    <a href=\"#\">Home</a>\n                  </li>\n                       \n                  <li class=\"list-inline-item\">\n                     <a routerLink=\"/about\">About</a>\n                  </li>\n                  \n                  <li class=\"list-inline-item\">\n                        <a routerLink=\"/users\">Users</a>\n                     </li>  \n             </ul>\n        </div>\n        </div>\n    </footer>\n    "

/***/ }),

/***/ "./src/app/features/wall/wall-footer/wall-footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/wall/wall-footer/wall-footer.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let WallFooterComponent = class WallFooterComponent {
};
WallFooterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-wall-footer',
        template: __webpack_require__(/*! ./wall-footer.component.html */ "./src/app/features/wall/wall-footer/wall-footer.component.html"),
        styles: ["\n        footer{\n            background-color: black;\n            padding: 20px 0px;\n        }\n        \n        footer ul{\n            list-style:none;\n            margin:0 auto;\n            display:inline-block;\n            padding-top:30px;\n        }\n        \n        footer ul li{\n            float:left;\n        }\n        \n        footer ul li a{\n            color:white;\n            padding:20px;\n        }\n        \n        footer ul li a:hover{\n            color:#FFBF00;\n            text-decoration:none;\n        }\n       \n        "]
    })
], WallFooterComponent);
exports.WallFooterComponent = WallFooterComponent;


/***/ }),

/***/ "./src/app/features/wall/wall-header/wall-header.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/wall/wall-header/wall-header.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n\t\t<header class=\"header\">\n\t\t\t<div class=\"text-box d-flex align-items-center\">\n\t\t\t<h1 class=\"heading-primary d-flex align-items-center\">\n\t\t\t\t<rb-avatar class=\"avatar  \" [user]=\"this.userService?.currentUser\"></rb-avatar>\n\t\t\t\t<span class=\"heading-primary-sim\">/</span>\n\t\t\t\t<span class=\"heading-primary-main text-dark\">{{ this.userService.currentUser.name }}</span>\n\t\t\t</h1>\n\t\t\t<button id=\"popup\"\n\t\t\tclass=\"btn btn-white btn-animated text-info\" routerLink=\"/addbook\" >ADD BOOK</button>\t\t\t\n\t\t</div>\n\t</header>\n\t</div>"

/***/ }),

/***/ "./src/app/features/wall/wall-header/wall-header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/wall/wall-header/wall-header.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const user_service_1 = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
let WallHeaderComponent = class WallHeaderComponent {
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
WallHeaderComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-wall-header',
        template: __webpack_require__(/*! ./wall-header.component.html */ "./src/app/features/wall/wall-header/wall-header.component.html"),
        styles: ["\n        \n        .header-container{\n          background-color: black;\n        }\n        .avatar {\n          margin: 2rem;\n        }\n        .header {\n          height: 55vh;\n          background-image: \n          linear-gradient(to right bottom, \n          rgba(204, 227, 233, 0.8),\n          rgba(6, 6, 7, 0.3)),   \n          url('https://media.giphy.com/media/Gf5pzZxHdyTcs/giphy.gif');  \n          background-size: 10rem;\n          background-repeat: round;\n          background-position: inherit;\n          position: relative;\n          background-clip: black;\n          clip-path: polygon(0 0, 100% 0, 100% 35vh, 0 100%);\n        }\n        \n        .brand { \n          font-size: 20px; \n          color:black;\n        }\n        \n        .brand2{\n          font-size: 30px;\n          color:#FFBF00;\n        }\n        \n        .text-box {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          text-align: center;\n        }\n        \n        .heading-primary {\n          color: #fff;\n          text-transform: uppercase;\n          backface-visibility: hidden;\n          margin-bottom: 30px;\n        }\n        \n        .heading-primary-sim{\n          color: #FFBF00;\n          font-weight: bold;\n          font-size: 40px;\n        }\n        \n        .heading-primary-main {\n          display: block;\n          font-size: 26px;\n          font-weight: 400;\n          letter-spacing: 5px;\n        }\n        \n        .heading-primary-sub {\n          display: block;\n          font-size: 18px;\n          font-weight: 700;\n          letter-spacing: 7.4px;\n        }\n\n        #popup {\n          border-radius: 100px;\n\n        }\n        \n        .btn:link,\n        .btn:visited {\n          text-transform: uppercase;\n          text-decoration: none;\n          padding: 10px 20px;\n          display: inline-block;\n          transition: all .2s;\n          position: relative;\n        }\n        \n        .btn:hover {\n          transform: translateY(-3px);\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 1);\n        }\n        \n        .btn:active {\n          transform: translateY(-1px);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n        }\n        \n        .btn-white {\n          background-color: #fff;\n          font-size: 14px;\n        }\n         "]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService])
], WallHeaderComponent);
exports.WallHeaderComponent = WallHeaderComponent;


/***/ }),

/***/ "./src/app/features/wall/wall.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/wall/wall.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const wall_component_1 = __webpack_require__(/*! ./wall/wall.component */ "./src/app/features/wall/wall/wall.component.ts");
const shared_module_1 = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
const wall_footer_component_1 = __webpack_require__(/*! ./wall-footer/wall-footer.component */ "./src/app/features/wall/wall-footer/wall-footer.component.ts");
const wall_header_component_1 = __webpack_require__(/*! ./wall-header/wall-header.component */ "./src/app/features/wall/wall-header/wall-header.component.ts");
const library_component_1 = __webpack_require__(/*! ./library/library.component */ "./src/app/features/wall/library/library.component.ts");
const routes = [
    {
        path: '',
        component: wall_component_1.WallComponent
    }
];
let WallModule = class WallModule {
};
WallModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            wall_component_1.WallComponent,
            wall_footer_component_1.WallFooterComponent,
            wall_header_component_1.WallHeaderComponent,
            library_component_1.LibraryComponent,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule,
        ]
    })
], WallModule);
exports.WallModule = WallModule;


/***/ }),

/***/ "./src/app/features/wall/wall/wall.component.html":
/*!********************************************************!*\
  !*** ./src/app/features/wall/wall/wall.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"global d-flex flex-column\">\n        <div>\n            <rb-wall-header></rb-wall-header>\n        </div>\n        <main>\n        <div>\n            <rb-library></rb-library>\n        </div>\n        <div class=\"p-2\">\n        </div>\n        </main>\n        <div class=\"p-2\">\n            <rb-wall-footer></rb-wall-footer>\n        </div>\n      </div>\n  \n    "

/***/ }),

/***/ "./src/app/features/wall/wall/wall.component.ts":
/*!******************************************************!*\
  !*** ./src/app/features/wall/wall/wall.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let WallComponent = class WallComponent {
};
WallComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-wall',
        template: __webpack_require__(/*! ./wall.component.html */ "./src/app/features/wall/wall/wall.component.html"),
        styles: ["\n        .global {\n          background: black;\n        }\n      "]
    })
], WallComponent);
exports.WallComponent = WallComponent;


/***/ })

}]);
//# sourceMappingURL=features-wall-wall-module.js.map