"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MailValidator(control) {
    const EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value) {
        if (control.value.indexOf('@') === -1) {
            return { missingArroba: true };
        }
        if (!EMAIL_REGEX.test(control.value)) {
            return { malformedMail: true };
        }
    }
    return null;
}
exports.MailValidator = MailValidator;
//# sourceMappingURL=mail.validator.js.map