"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const modal_service_1 = require("./modal.service");
let NotificationService = class NotificationService {
    constructor(route, modalService) {
        this.route = route;
        this.modalService = modalService;
        this.route.queryParams.subscribe(params => {
            if (params.notification === 'account-activated') {
                this.modalService.open('Account activated!!', 'Please, log in and start enyoying our Social Network');
            }
            else if (params.notification === 'account-not-activated') {
                this.modalService.open('Account not activated', 'Sorry we cannot activate your account');
            }
        });
    }
};
NotificationService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
        modal_service_1.ModalService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map