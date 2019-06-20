"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const modal_component_1 = require("./modal/modal.component");
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            modal_component_1.ModalComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule
        ],
        exports: [
            modal_component_1.ModalComponent
        ]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map