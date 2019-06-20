"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const router_1 = require("@angular/router");
const toast_service_1 = require("../services/toast.service");
const auth_service_1 = require("../services/auth.service");
let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService, router, toastService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(operators_1.catchError(error => {
            if (error.url.indexOf('/account/login') === -1 &&
                this.router.routerState.snapshot.url !== '/home' &&
                error.status === 401) {
                this.authService.logout();
            }
            else {
                this.toastService.addToast(error.error[0]);
            }
            return rxjs_1.throwError(error);
        }));
    }
};
ErrorInterceptor = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router,
        toast_service_1.ToastService])
], ErrorInterceptor);
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=error.interceptor.js.map