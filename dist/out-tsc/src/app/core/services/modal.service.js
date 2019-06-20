"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let ModalService = class ModalService {
    constructor() {
        this.opened = false;
        this.title = '';
        this.content = '';
    }
    open(title, content) {
        this.opened = true;
        this.title = title;
        this.content = content;
    }
    close() {
        this.opened = false;
    }
};
ModalService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ModalService);
exports.ModalService = ModalService;
//# sourceMappingURL=modal.service.js.map