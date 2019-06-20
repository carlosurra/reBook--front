"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_service_1 = require("../services/auth.service");
let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, snapshot) {
        if (this.authService && this.authService.authInfo) {
            const { accessToken } = this.authService.authInfo;
            if (accessToken) {
                return true;
            }
        }
        this.router.navigate(['/wall']);
        return false;
    }
};
AuthGuard = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map