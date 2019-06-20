"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const about_component_1 = require("./about/about.component");
const routes = [
    {
        path: '',
        component: about_component_1.AboutComponent
    }
];
let AboutModule = class AboutModule {
};
AboutModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            about_component_1.AboutComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes)
        ]
    })
], AboutModule);
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map