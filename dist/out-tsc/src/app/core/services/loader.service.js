"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = false;
    }
    setLoading(isLoading) {
        setTimeout(() => {
            this.isLoading = isLoading;
        });
    }
};
LoaderService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], LoaderService);
exports.LoaderService = LoaderService;
//# sourceMappingURL=loader.service.js.map