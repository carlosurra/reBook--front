"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const auth_service_1 = require("../services/auth.service");
let JWTInterceptor = class JWTInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        if (this.authService && this.authService.authInfo) {
            const { accessToken } = this.authService.authInfo;
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }
        return next.handle(request);
    }
};
JWTInterceptor = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], JWTInterceptor);
exports.JWTInterceptor = JWTInterceptor;
//# sourceMappingURL=jwt.interceptor.js.map