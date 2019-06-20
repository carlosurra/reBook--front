"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const home_form_component_1 = require("./home-form/home-form.component");
const home_media_component_1 = require("./home-media/home-media.component");
const shared_module_1 = require("src/app/shared/shared.module");
const home_header_component_1 = require("./home-header/home-header.component");
const home_footer_component_1 = require("./home-footer/home-footer.component");
const routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            home_component_1.HomeComponent,
            home_form_component_1.HomeFormComponent,
            home_media_component_1.HomeMediaComponent,
            home_header_component_1.HomeHeaderComponent,
            home_footer_component_1.HomeFooterComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule,
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map