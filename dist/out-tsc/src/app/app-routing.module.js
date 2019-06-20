"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const page_not_found_component_1 = require("./shared/components/page-not-found/page-not-found.component");
const register_component_1 = require("./shared/components/register/register.component");
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './features/home/home.module#HomeModule',
    },
    {
        path: 'wall',
        loadChildren: './features/wall/wall.module#WallModule'
    },
    {
        path: 'about',
        loadChildren: './features/about/about.module#AboutModule'
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map