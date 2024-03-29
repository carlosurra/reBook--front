(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-about-about-module"],{

/***/ "./src/app/features/about/about.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/about/about.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const about_component_1 = __webpack_require__(/*! ./about/about.component */ "./src/app/features/about/about/about.component.ts");
const routes = [
    {
        path: '',
        component: about_component_1.AboutComponent
    }
];
let AboutModule = class AboutModule {
};
AboutModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            about_component_1.AboutComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes)
        ]
    })
], AboutModule);
exports.AboutModule = AboutModule;


/***/ }),

/***/ "./src/app/features/about/about/about.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/about/about/about.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n      <div class=\"container d-flex flex-column bg-dark\">\n        <div class=\"p-2 logo d-flex justify-content-center\">reBook</div>\n        <main>\n            <p>It's a smart social networking site. It's a place where books take on a new life. <em class=\"text-info\">reBook</em> is the act of sharing culture and thus connecting with readers tuned to your tastes.</p>\n            <p>Give a new life to those old books you have collecting dust on the shelves. Pass them on to another reader.  Our system will allow members to connect with other readers.</p>\n            <p>To become a <em class=\"text-info\">reBooker</em> you just have to register and you can start sharing those forgotten literary treasures or looking for books shared by other <em class=\"text-info\">reBookers</em>. </p>\n            <p>Once you have become a <em class=\"text-info\">reBokker</em>, you will be able to know what was from your shared books and exchange opinions with other users. <em class=\"text-info\" >reBook</em> is free to join and play. So don't keep your books, read and share!</p>\n            \n          </main>\n          <div class=\"d-flex\">\n              <ul class=\"list-inline mx-auto justify-content-center\">\n                                   \n                   <li class=\"list-inline-item m-5\">\n                      <a href=\"#\" class=\"btn text-info btn-white btn-animated\">SIGN IN</a>\n                    </li>                         \n                    <li class=\"list-inline-item\">\n                        <a href=\"/wall\" class=\"btn text-info btn-white btn-animated\">STAY CONNECTED</a>\n                    </li>          \n               </ul>\n          </div>\n      </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/features/about/about/about.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/features/about/about/about.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  height: 100%; }\n\nbody {\n  background-color: black;\n  position: relative; }\n\nmain {\n  min-width: 300px;\n  max-width: 500px;\n  margin: auto; }\n\np {\n  font-size: 1em;\n  line-height: 1.75em;\n  border-top: 3px solid;\n  -o-border-image: linear-gradient(to right, #ffffff 0%, #FFBF00 100%);\n     border-image: linear-gradient(to right, #ffffff 0%, #FFBF00 100%);\n  border-image-slice: 1;\n  border-width: 3px;\n  margin: 0;\n  padding: 40px;\n  counter-increment: section;\n  position: relative;\n  color: #c5c6c7; }\n\np:before {\n    content: counter(section);\n    position: absolute;\n    text-align: center;\n    line-height: 1.25em;\n    color: #FFBF00;\n    font-size: 1em; }\n\np:nth-child(odd) {\n  border-right: 3px solid;\n  padding-left: 0; }\n\np:nth-child(odd):before {\n    left: 100%;\n    margin-left: -20px; }\n\np:nth-child(even) {\n  border-left: 3px solid;\n  padding-right: 0; }\n\np:nth-child(even):before {\n    right: 100%;\n    margin-right: -20px; }\n\np:first-child {\n  border-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\np:last-child {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.logo {\n  background: url(\"https://media.giphy.com/media/crSSpUUchMHlK/giphy.gif\") repeat;\n  background-size: 9rem;\n  background-repeat: round;\n  background-position: center;\n  position: relative;\n  -webkit-background-clip: text;\n  color: transparent;\n  font-size: 160px;\n  font-family: Helvetica;\n  font-weight: bold;\n  background-position-x: 52%;\n  background-position-y: 48px; }\n\n.lorem {\n  font-family: Helvetica;\n  color: white;\n  justify-content: center;\n  width: 60%; }\n\n.btn:link,\n.btn:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  background-color: white;\n  padding: 10px 20px;\n  display: inline-block;\n  border-radius: 100px;\n  transition: all .2s;\n  position: relative;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n\n.btn:hover {\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px);\n  box-shadow: 0 10px 20px white; }\n\n.btn:active {\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n\n.btn-white {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM4L0Rlc2t0b3AvcmVCb29rLS1mcm9udC9zcmMvYXBwL2ZlYXR1cmVzL2Fib3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQVVwQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsb0VBQWlFO0tBQWpFLGlFQUFpRTtFQUNqRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixjQXBCd0IsRUFBQTs7QUFTMUI7SUFlSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUZqQjtJQUtJLFVBQVU7SUFDVixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBS0ksV0FBVztJQUNYLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLGFBQWE7RUFDYiwwQkFBeUI7RUFDekIseUJBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsNkJBQTRCO0VBQzVCLDRCQUEyQixFQUFBOztBQUk3QjtFQUNFLCtFQUE4RTtFQUM5RSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNuQixnQkFBZTtFQUNkLHNCQUFxQjtFQUN0QixpQkFBZ0I7RUFDZiwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBSTdCO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUlaOztFQUVFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsNkJBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hYm91dC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIge1xuXG59XG5cbiRibGFjazogcmdiKDE5NywgMTk4LCAxOTkpO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG5tYWluIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZDtcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMCUsICNGRkJGMDAgMTAwJSk7XG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNDBweDtcbiAgY291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb247XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICRibGFjaztcbiAgXG4gIC8vbnVtYmVyc1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogY291bnRlcihzZWN0aW9uKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gICAgY29sb3I6ICNGRkJGMDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbi8vb2RkIG51bWJlciBib3JkZXJzXG5wOm50aC1jaGlsZChvZGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgXG4gICY6YmVmb3JlIHtcbiAgICBsZWZ0OiAxMDAlOyBcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIH1cbn1cbi8vZXZlbiBudW1iZXIgYm9yZGVyc1xucDpudGgtY2hpbGQoZXZlbikge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBcbiAgJjpiZWZvcmUge1xuICAgIHJpZ2h0OiAxMDAlOyBcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICB9XG59XG4vL2hhbmRsZSBmaXJzdCBhbmQgbGFzdFxucDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtcbn1cbnA6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtcbn1cblxuXG4ubG9nb3tcbiBcdGJhY2tncm91bmQ6dXJsKFwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvY3JTU3BVVWNoTUhsSy9naXBoeS5naWZcIikgcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDlyZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gXHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuXHRmb250LXNpemU6MTYwcHg7XG4gIGZvbnQtZmFtaWx5OkhlbHZldGljYTtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MiU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNDhweDtcbn1cblxuXG4ubG9yZW0ge1xuICBmb250LWZhbWlseTpIZWx2ZXRpY2E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG5cbn1cblxuLmJ0bjpsaW5rLFxuLmJ0bjp2aXNpdGVkIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYnRuLXdoaXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/features/about/about/about.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/about/about/about.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AboutComponent = class AboutComponent {
};
AboutComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-about',
        template: __webpack_require__(/*! ./about.component.html */ "./src/app/features/about/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/features/about/about/about.component.scss")]
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;


/***/ })

}]);
//# sourceMappingURL=features-about-about-module.js.map