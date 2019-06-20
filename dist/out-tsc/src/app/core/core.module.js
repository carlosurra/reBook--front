"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const http_1 = require("@angular/common/http");
const jwt_interceptor_1 = require("./interceptors/jwt.interceptor");
const error_interceptor_1 = require("./interceptors/error.interceptor");
const loader_interceptor_1 = require("./interceptors/loader.interceptor");
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [],
        imports: [common_1.CommonModule, http_1.HttpClientModule],
        providers: [
            { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JWTInterceptor, multi: true },
            { provide: http_1.HTTP_INTERCEPTORS, useClass: error_interceptor_1.ErrorInterceptor, multi: true },
            { provide: http_1.HTTP_INTERCEPTORS, useClass: loader_interceptor_1.LoaderInterceptor, multi: true }
        ]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map