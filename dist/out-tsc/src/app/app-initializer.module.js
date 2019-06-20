"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const user_service_1 = require("./core/services/user.service");
const notification_service_1 = require("./core/services/notification.service");
function getInitialData(userService) {
    return () => {
        if (localStorage.getItem('auth')) {
            return new Promise((resolve) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    yield userService.getUserProfile().toPromise();
                    return resolve();
                }
                catch (error) {
                    return resolve(error);
                }
            }));
        }
        return Promise.resolve();
    };
}
exports.getInitialData = getInitialData;
let AppInitializerModule = class AppInitializerModule {
};
AppInitializerModule = tslib_1.__decorate([
    core_1.NgModule({
        providers: [
            {
                provide: core_1.APP_INITIALIZER,
                useFactory: getInitialData,
                deps: [user_service_1.UserService, notification_service_1.NotificationService],
                multi: true
            }
        ]
    })
], AppInitializerModule);
exports.AppInitializerModule = AppInitializerModule;
//# sourceMappingURL=app-initializer.module.js.map