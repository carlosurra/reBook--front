"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const modal_service_1 = require("src/app/core/services/modal.service");
let ModalComponent = class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
};
ModalComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [modal_service_1.ModalService])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map