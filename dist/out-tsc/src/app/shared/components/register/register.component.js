"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const matchpass_validator_1 = require("../../validators/matchpass.validator");
const auth_service_1 = require("src/app/core/services/auth.service");
const modal_service_1 = require("src/app/core/services/modal.service");
const router_1 = require("@angular/router");
let RegisterComponent = class RegisterComponent {
    constructor(fb, router, authService, modalService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.modalService = modalService;
        this.registerForm = this.fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', [forms_1.Validators.required]],
        }, { validators: matchpass_validator_1.MatchPassValidator });
    }
    register() {
        const { name, email, password } = this.registerForm.value;
        if (this.registerForm.valid) {
            this.authService
                .register({
                name,
                email,
                password
            })
                .subscribe(() => {
                this.registerForm.reset();
                this.modalService.open("It's almost done!", "Check your email and follow the activation instructions!");
                this.router.navigate(['/home']);
            });
        }
    }
};
RegisterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        auth_service_1.AuthService,
        modal_service_1.ModalService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map