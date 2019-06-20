"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const auth_service_1 = require("src/app/core/services/auth.service");
const mail_validator_1 = require("../../validators/mail.validator");
const router_1 = require("@angular/router");
const user_service_1 = require("src/app/core/services/user.service");
let LoginComponent = class LoginComponent {
    constructor(fb, router, authService, userService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required, mail_validator_1.MailValidator]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(7)]]
        });
    }
    login() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(() => {
                this.userService.getUserProfile().subscribe();
                console.log(this.authService, this.userService);
            }, () => this.loginForm.get('password').setValue(''));
            this.router.navigate(['/wall']);
        }
    }
};
LoginComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        auth_service_1.AuthService,
        user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map