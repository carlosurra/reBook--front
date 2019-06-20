"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const animations_1 = require("./animations");
const loader_service_1 = require("./core/services/loader.service");
let AppComponent = class AppComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.title = 'rebook-front';
    }
};
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        animations: [animations_1.fadeAnimation]
    }),
    tslib_1.__metadata("design:paramtypes", [loader_service_1.LoaderService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map