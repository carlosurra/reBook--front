"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const environment_1 = require("src/environments/environment");
const http_1 = require("@angular/common/http");
const operators_1 = require("rxjs/operators");
const core_1 = require("@angular/core");
const auth_service_1 = require("./auth.service");
let UserService = class UserService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getUserProfile() {
        return this.http
            .get(`${environment_1.environment.apiBaseUrl}/user`)
            .pipe(operators_1.tap((user) => (this.currentUser = user)));
    }
};
UserService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map