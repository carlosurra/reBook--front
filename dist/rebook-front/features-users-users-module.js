(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-users-users-module"],{

/***/ "./src/app/features/users/directory/directory.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/users/directory/directory.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div *ngIf=\"showUsers === false\" class=\"container\">\n      </div>\n      <div *ngIf=\"showUsers === true\" class=\"global\">\n        <div *ngFor=\"let users of userService.users\">\n        <div class=\"card align-middle\">\n          <h5 class=\"card-title text-info text-center\">{{ users.name }}</h5>\n          <h5 class=\"text-info text-center\">{{ users.city }}</h5>\n          <div>\n              <button \n              class=\"btn btn-white btn-animated\">\n              VISIT\n            </button>            \n            </div>\n\n          <rb-avatar class=\"avatar w-75\" [user]=\"users\"></rb-avatar>\n          </div>\n        </div>"

/***/ }),

/***/ "./src/app/features/users/directory/directory.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/features/users/directory/directory.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #100e17;\n  font-family: 'Open Sans', sans-serif; }\n\n.global {\n  background-size: cover;\n  background-color: black;\n  margin: 3rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.container {\n  position: absolute;\n  height: 300px;\n  width: 600px;\n  top: 60px;\n  left: calc(50% - 300px);\n  display: flex; }\n\n.card {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  height: 330px;\n  width: 200px;\n  background-color: black;\n  border-radius: 10px;\n  transition: 0.4s ease-out;\n  position: relative;\n  border-color: #FFBF00;\n  border-width: 0.5px; }\n\n.card:hover {\n  -webkit-transform: translateY(-20px);\n          transform: translateY(-20px);\n  transition: 0.4s ease-out; }\n\n.card:hover ~ .card {\n  position: relative;\n  left: 50px;\n  transition: 0.4s ease-out; }\n\n.card-title {\n  margin-top: 15px; }\n\n.avatar {\n  margin-top: 10px; }\n\n.bar {\n  position: absolute;\n  top: 100px;\n  left: 20px;\n  height: 5px;\n  width: 150px; }\n\n.filledbar {\n  position: absolute;\n  top: 0px;\n  z-index: 3;\n  width: 0px;\n  height: 100%;\n  background: #009ad9;\n  background: linear-gradient(90deg, #009ad9 0%, #d99300 65%, #ffba00 100%);\n  transition: 0.6s ease-out; }\n\n.card:hover .filledbar {\n  width: 120px;\n  transition: 0.4s ease-out; }\n\n.circle {\n  position: absolute;\n  top: 150px;\n  left: calc(50% - 60px); }\n\n.stroke {\n  stroke: white;\n  stroke-dasharray: 360;\n  stroke-dashoffset: 360;\n  transition: 0.6s ease-out; }\n\nsvg {\n  fill: #17141d;\n  stroke-width: 2px; }\n\n.card:hover .stroke {\n  stroke-dashoffset: 100;\n  transition: 0.6s ease-out; }\n\n.btn {\n  margin-top: 1rem; }\n\n.btn:visited {\n  text-decoration: none;\n  padding: 10px 20px;\n  display: inline-block;\n  border-radius: 100px;\n  transition: all .2s;\n  position: relative; }\n\n.btn:hover {\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n  box-shadow: 0 10px 20px white; }\n\n.btn:active {\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: 0 10px 10px rgba(255, 191, 0, 0.75); }\n\n.btn-white {\n  background-color: #fff;\n  color: #FFBF00;\n  font-size: 14px;\n  border-radius: 100px; }\n\n@media screen and (min-width: 40em) {\n  .cards {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM4L0Rlc2t0b3AvcmVCb29rLS1mcm9udC9zcmMvYXBwL2ZlYXR1cmVzL3VzZXJzL2RpcmVjdG9yeS9kaXJlY3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usc0JBQXNCO0VBRXRCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQUczQjtFQUNBLGdCQUFnQixFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUEwQjtFQUMxQix5RUFBdUc7RUFDdkcseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsNkJBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwrQ0FBK0MsRUFBQTs7QUFHakQ7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCLEVBQUEsRUFDakMiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy91c2Vycy9kaXJlY3RvcnkvZGlyZWN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDBlMTc7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgXG59XG4uZ2xvYmFsIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMwMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDMzMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1jb2xvcjogI0ZGQkYwMDtcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufVxuXG4uY2FyZDpob3ZlciB+IC5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufVxuXG4uY2FyZC10aXRsZSB7XG5tYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYXZhdGFye1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5cbi5maWxsZWRiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYigwLDE1NCwyMTcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwxNTQsMjE3LDEpIDAlLCByZ2JhKDIxNywxNDcsMCwxKSA2NSUsIHJnYmEoMjU1LDE4NiwwLDEpIDEwMCUpO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xufVxuXG4uY2FyZDpob3ZlciAuZmlsbGVkYmFyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDYwcHgpO1xufVxuXG4uc3Ryb2tlIHtcbiAgc3Ryb2tlOiB3aGl0ZTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzYwO1xuICBzdHJva2UtZGFzaG9mZnNldDogMzYwO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xufVxuXG5zdmcge1xuICBmaWxsOiAjMTcxNDFkO1xuICBzdHJva2Utd2lkdGg6IDJweDtcbn1cblxuLmNhcmQ6aG92ZXIgLnN0cm9rZSB7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZS1vdXQ7XG59XG5cbi5idG4ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYnRuOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCByZ2JhKDI1NSwgMTkxLCAwLCAwLjc1KTtcbn1cblxuLmJ0bi13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjRkZCRjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XG4gIC5jYXJkcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/features/users/directory/directory.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/users/directory/directory.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const user_service_1 = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
let DirectoryComponent = class DirectoryComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.showUsers = false;
    }
    ngOnInit() {
        this.userService
            .getUsers()
            .subscribe((users) => { if (users.length > 0)
            this.showUsers = true; });
        this.userService
            .getUserProfile()
            .subscribe(res => {
            console.log({ res });
        });
    }
};
DirectoryComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-directory',
        template: __webpack_require__(/*! ./directory.component.html */ "./src/app/features/users/directory/directory.component.html"),
        styles: [__webpack_require__(/*! ./directory.component.scss */ "./src/app/features/users/directory/directory.component.scss")]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService])
], DirectoryComponent);
exports.DirectoryComponent = DirectoryComponent;


/***/ }),

/***/ "./src/app/features/users/users-footer/users-footer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/users/users-footer/users-footer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n        <div class=\"container\" \n            style=\"border-top:1px solid grey\">\n        <div class=\"d-flex\">\n            <ul class=\"list-inline mx-auto justify-content-center\">\n                                 \n                 <li class=\"list-inline-item\">\n                    <a href=\"#\">Home</a>\n                  </li>\n                       \n                  <li class=\"list-inline-item\">\n                     <a routerLink=\"/about\">About</a>\n                  </li>\n                  \n                  <li class=\"list-inline-item\">\n                        <a routerLink=\"/stock\">Library</a>\n                     </li>  \n             </ul>\n        </div>\n        </div>\n    </footer>\n    "

/***/ }),

/***/ "./src/app/features/users/users-footer/users-footer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/users/users-footer/users-footer.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let UsersFooterComponent = class UsersFooterComponent {
};
UsersFooterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-users-footer',
        template: __webpack_require__(/*! ./users-footer.component.html */ "./src/app/features/users/users-footer/users-footer.component.html"),
        styles: ["\n        footer{\n            background-color: black;\n            padding: 20px 0px;\n        }\n        \n        footer ul{\n            list-style:none;\n            margin:0 auto;\n            display:inline-block;\n            padding-top:30px;\n        }\n        \n        footer ul li{\n            float:left;\n        }\n        \n        footer ul li a{\n            color:white;\n            padding:20px;\n        }\n        \n        footer ul li a:hover{\n            color:#FFBF00;\n            text-decoration:none;\n        }\n       \n        "]
    })
], UsersFooterComponent);
exports.UsersFooterComponent = UsersFooterComponent;


/***/ }),

/***/ "./src/app/features/users/users-header/users-header.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/users/users-header/users-header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n\t\t<header class=\"header\">\n\t\t\t<div class=\"text-box d-flex align-items-center\">\n\t\t\t<h1 class=\"heading-primary d-flex align-items-center\">\n\t\t\t\t<rb-avatar class=\"avatar\" [user]=\"this.userService?.currentUser\"></rb-avatar>\n\t\t\t\t<span class=\"heading-primary-main text-dark\">Visit other libraries<span class=\"heading-primary-sim\">/</span></span>\n\t\t\t\t<span class=\"heading-primary-sub\" > </span>\n\t\t\t</h1>\n\t\t\t<button id=\"popup\"\n\t\t\tclass=\"btn btn-white btn-animated text-info\" routerLink=\"/wall\" >MY LIBRARY</button>\t\t\t\n\n\t\t</div>\n\t</header>\n\t</div>"

/***/ }),

/***/ "./src/app/features/users/users-header/users-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/users/users-header/users-header.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const user_service_1 = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
let UsersHeaderComponent = class UsersHeaderComponent {
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
UsersHeaderComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-users-header',
        template: __webpack_require__(/*! ./users-header.component.html */ "./src/app/features/users/users-header/users-header.component.html"),
        styles: ["\n        \n        .header-container{\n          background-color: black;\n        }\n        .header {\n          height: 55vh;\n          background-image: \n          linear-gradient(to right bottom, \n          rgba(204, 227, 233, 0.8),\n          rgba(6, 6, 7, 0.3)),   \n          url('https://media.giphy.com/media/Gf5pzZxHdyTcs/giphy.gif');  \n          background-size: 10rem;\n          background-repeat: round;\n          background-position: inherit;\n          position: relative;\n          background-clip: black;\n          clip-path: polygon(0 0, 100% 0, 100% 35vh, 0 100%);\n        }\n        \n        .brand { \n          font-size: 20px; \n          color:black;\n        }\n        \n        .brand2{\n          font-size: 30px;\n          color:#FFBF00;\n        }\n        \n        .text-box {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          text-align: center;\n        }\n        \n        .heading-primary {\n          color: #fff;\n          text-transform: uppercase;\n          backface-visibility: hidden;\n          margin-bottom: 30px;\n        }\n        \n        .heading-primary-sim{\n          color: #FFBF00;\n          font-weight: bold;\n          font-size: 40px;\n        }\n        \n        .heading-primary-main {\n          display: block;\n          font-size: 26px;\n          font-weight: 400;\n          letter-spacing: 5px;\n        }\n        \n        .heading-primary-sub {\n          display: block;\n          font-size: 18px;\n          font-weight: 700;\n          letter-spacing: 7.4px;\n        }\n\n        #popup {\n          border-radius: 100px;\n\n        }\n        \n        .btn:link,\n        .btn:visited {\n          text-transform: uppercase;\n          text-decoration: none;\n          padding: 10px 20px;\n          display: inline-block;\n          transition: all .2s;\n          position: relative;\n        }\n        \n        .btn:hover {\n          transform: translateY(-3px);\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 1);\n        }\n        \n        .btn:active {\n          transform: translateY(-1px);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n        }\n        \n        .btn-white {\n          background-color: #fff;\n          font-size: 14px;\n        }\n         "]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService])
], UsersHeaderComponent);
exports.UsersHeaderComponent = UsersHeaderComponent;


/***/ }),

/***/ "./src/app/features/users/users.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/users/users.module.ts ***!
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
const directory_component_1 = __webpack_require__(/*! src/app/features/users/directory/directory.component */ "./src/app/features/users/directory/directory.component.ts");
const users_footer_component_1 = __webpack_require__(/*! ./users-footer/users-footer.component */ "./src/app/features/users/users-footer/users-footer.component.ts");
const users_component_1 = __webpack_require__(/*! ./users/users.component */ "./src/app/features/users/users/users.component.ts");
const users_header_component_1 = __webpack_require__(/*! ./users-header/users-header.component */ "./src/app/features/users/users-header/users-header.component.ts");
const routes = [
    {
        path: '',
        component: users_component_1.UsersComponent
    }
];
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            directory_component_1.DirectoryComponent,
            users_footer_component_1.UsersFooterComponent,
            users_component_1.UsersComponent,
            users_header_component_1.UsersHeaderComponent,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule,
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/app/features/users/users/users.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/users/users/users.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"global d-flex flex-column\">\n        <div>\n            <rb-users-header></rb-users-header>\n        </div>\n        <main>\n        <div>\n            <rb-directory></rb-directory>\n        </div>\n        <div class=\"p-2\">\n        </div>\n        </main>\n        <div class=\"p-2\">\n            <rb-users-footer></rb-users-footer>\n        </div>\n      </div>\n  "

/***/ }),

/***/ "./src/app/features/users/users/users.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/users/users/users.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let UsersComponent = class UsersComponent {
};
UsersComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-users',
        template: __webpack_require__(/*! ./users.component.html */ "./src/app/features/users/users/users.component.html"),
        styles: ["\n        .global {\n          background: black;\n        }\n      "]
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;


/***/ })

}]);
//# sourceMappingURL=features-users-users-module.js.map