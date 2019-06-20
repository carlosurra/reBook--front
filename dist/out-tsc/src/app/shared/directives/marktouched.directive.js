"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let MarkAsTouchedDirective = class MarkAsTouchedDirective {
    onSubmit(event) {
        Object.values(this.rbMarkAsTouched.controls).forEach(control => control.markAsTouched());
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", forms_1.FormGroup)
], MarkAsTouchedDirective.prototype, "rbMarkAsTouched", void 0);
tslib_1.__decorate([
    core_1.HostListener('submit', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MarkAsTouchedDirective.prototype, "onSubmit", null);
MarkAsTouchedDirective = tslib_1.__decorate([
    core_1.Directive({
        selector: '[rbMarkAsTouched]'
    })
], MarkAsTouchedDirective);
exports.MarkAsTouchedDirective = MarkAsTouchedDirective;
//# sourceMappingURL=marktouched.directive.js.map