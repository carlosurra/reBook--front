"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const environment_1 = require("src/environments/environment");
const router_1 = require("@angular/router");
const operators_1 = require("rxjs/operators");
let LibraryService = class LibraryService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.library = [];
    }
    getLibrary() {
        return this.http
            .get(`${environment_1.environment.apiBaseUrl}/library`).pipe(operators_1.tap((library) => {
            this.library = library;
            console.log(this.library);
        }));
    }
};
LibraryService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
], LibraryService);
exports.LibraryService = LibraryService;
//# sourceMappingURL=library.service.js.map