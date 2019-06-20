"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const page_not_found_component_1 = require("./components/page-not-found/page-not-found.component");
const login_component_1 = require("./components/login/login.component");
const register_component_1 = require("./components/register/register.component");
const val_messages_component_1 = require("./components/val-messages/val-messages.component");
const marktouched_directive_1 = require("./directives/marktouched.directive");
const forms_1 = require("@angular/forms");
const add_book_component_1 = require("./components/add-book/add-book.component");
const val_book_messages_component_1 = require("./components/val-book-messages/val-book-messages.component");
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            page_not_found_component_1.PageNotFoundComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            val_messages_component_1.ValMessagesComponent,
            marktouched_directive_1.MarkAsTouchedDirective,
            add_book_component_1.AddBookComponent,
            val_book_messages_component_1.ValAddBookComponent,
        ],
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule
        ],
        exports: [
            page_not_found_component_1.PageNotFoundComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            val_messages_component_1.ValMessagesComponent,
            marktouched_directive_1.MarkAsTouchedDirective,
            val_book_messages_component_1.ValAddBookComponent,
            add_book_component_1.AddBookComponent,
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map