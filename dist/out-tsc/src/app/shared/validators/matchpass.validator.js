"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MatchPassValidator(group) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    if (password !== confirmPassword) {
        return { paaswordMismatch: true };
    }
    return null;
}
exports.MatchPassValidator = MatchPassValidator;
//# sourceMappingURL=matchpass.validator.js.map