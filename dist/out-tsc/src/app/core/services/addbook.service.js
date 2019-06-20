"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const environment_1 = require("src/environments/environment");
let AddBookService = class AddBookService {
    constructor(http) {
        this.http = http;
        this.opened = false;
    }
    addBook({ title, author, description }) {
        return this.http.post(`${environment_1.environment.apiBaseUrl}/book`, {
            title,
            author,
            description
        });
    }
    open() {
        this.opened = true;
    }
    close() {
        this.opened = false;
    }
};
AddBookService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], AddBookService);
exports.AddBookService = AddBookService;
//# sourceMappingURL=addbook.service.js.map