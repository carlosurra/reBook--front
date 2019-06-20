"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let ValAddBookComponent = class ValAddBookComponent {
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", forms_1.FormControl)
], ValAddBookComponent.prototype, "control", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", forms_1.FormGroup)
], ValAddBookComponent.prototype, "group", void 0);
ValAddBookComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-val-book-messages',
        templateUrl: './val-book-messages.component.html',
    })
], ValAddBookComponent);
exports.ValAddBookComponent = ValAddBookComponent;
//# sourceMappingURL=val-book-messages.component.js.map