"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let ToastService = class ToastService {
    constructor() {
        this.toasts = [];
    }
    addToast(toastData, delay = 5000) {
        if ('message' in toastData) {
            this.toasts.unshift(toastData);
        }
        else {
            this.toasts.unshift({
                title: 'Error',
                message: this.getErrorMessage(toastData),
                variant: 'danger'
            });
        }
        this.delayAndRemove(delay);
    }
    getErrorMessage({ detail, data }) {
        if (detail) {
            return detail;
        }
        if (data) {
            return `You ${data.label} is wrong`;
        }
    }
    isErrorToast(toast) {
        if (toast.variant === 'error') {
            return true;
        }
        return false;
    }
    delayAndRemove(milliseconds) {
        setTimeout(() => {
            this.toasts.pop();
        }, milliseconds);
    }
    remove(index) {
        if (index) {
            this.toasts.splice(index, 1);
        }
        else {
            this.toasts.pop();
        }
    }
};
ToastService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ToastService);
exports.ToastService = ToastService;
//# sourceMappingURL=toast.service.js.map