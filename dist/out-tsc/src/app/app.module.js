"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const animations_1 = require("@angular/platform-browser/animations");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const core_module_1 = require("./core/core.module");
const layout_module_1 = require("./layout/layout.module");
const shared_module_1 = require("./shared/shared.module");
const app_initializer_module_1 = require("./app-initializer.module");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_initializer_module_1.AppInitializerModule,
            animations_1.BrowserAnimationsModule,
            app_routing_module_1.AppRoutingModule,
            core_module_1.CoreModule,
            layout_module_1.LayoutModule,
            shared_module_1.SharedModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map