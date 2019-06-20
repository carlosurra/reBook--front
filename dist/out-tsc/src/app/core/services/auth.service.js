"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const environment_1 = require("src/environments/environment");
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const router_1 = require("@angular/router");
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.authInfo = JSON.parse(localStorage.getItem('auth'));
    }
    login({ email, password }) {
        return this.http
            .post(`${environment_1.environment.apiBaseUrl}/account/login`, {
            email,
            password
        })
            .pipe(operators_1.tap((info) => {
            this.authInfo = info;
            localStorage.setItem('auth', JSON.stringify(info));
        }));
    }
    register({ name, email, password }) {
        return this.http.post(`${environment_1.environment.apiBaseUrl}/account`, {
            name,
            email,
            password
        });
    }
    logout() {
        localStorage.removeItem('auth');
        this.authInfo = null;
        this.router.navigate(['/home']);
    }
};
AuthService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map