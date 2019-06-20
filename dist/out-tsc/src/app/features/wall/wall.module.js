"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const wall_component_1 = require("./wall/wall.component");
const shared_module_1 = require("src/app/shared/shared.module");
const book_form_component_1 = require("./book-form/book-form.component");
const routes = [
    {
        path: '',
        component: wall_component_1.WallComponent
    }
];
let WallModule = class WallModule {
};
WallModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            wall_component_1.WallComponent,
            book_form_component_1.BookFormComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule,
        ]
    })
], WallModule);
exports.WallModule = WallModule;
//# sourceMappingURL=wall.module.js.map