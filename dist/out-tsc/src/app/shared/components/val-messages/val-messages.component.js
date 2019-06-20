"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let ValMessagesComponent = class ValMessagesComponent {
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", forms_1.FormControl)
], ValMessagesComponent.prototype, "control", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", forms_1.FormGroup)
], ValMessagesComponent.prototype, "group", void 0);
ValMessagesComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-val-messages',
        templateUrl: './val-messages.component.html',
        styleUrls: ['./val-messages.component.scss']
    })
], ValMessagesComponent);
exports.ValMessagesComponent = ValMessagesComponent;
//# sourceMappingURL=val-messages.component.js.map