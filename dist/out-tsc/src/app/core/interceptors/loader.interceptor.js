"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const operators_1 = require("rxjs/operators");
const loader_service_1 = require("../services/loader.service");
const rxjs_1 = require("rxjs");
let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.totalRequests = 0;
    }
    intercept(request, next) {
        this.totalRequests++;
        this.loaderService.setLoading(true);
        return next.handle(request).pipe(operators_1.tap(res => {
            if (res instanceof http_1.HttpResponse) {
                this.decreaseRequests();
            }
        }), operators_1.catchError(error => {
            this.decreaseRequests();
            return rxjs_1.throwError(error);
        }));
    }
    decreaseRequests() {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.loaderService.setLoading(false);
        }
    }
};
LoaderInterceptor = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [loader_service_1.LoaderService])
], LoaderInterceptor);
exports.LoaderInterceptor = LoaderInterceptor;
//# sourceMappingURL=loader.interceptor.js.map