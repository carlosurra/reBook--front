"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const addbook_service_1 = require("src/app/core/services/addbook.service");
const modal_service_1 = require("src/app/core/services/modal.service");
let AddBookComponent = class AddBookComponent {
    constructor(fb, router, addBookService, modalService) {
        this.fb = fb;
        this.router = router;
        this.addBookService = addBookService;
        this.modalService = modalService;
        this.addBookForm = this.fb.group({
            title: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            author: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            description: [''],
        });
    }
    addBook() {
        const { title, author, description } = this.addBookForm.value;
        if (this.addBookForm.valid) {
            this.addBookService
                .addBook({
                title,
                author,
                description
            })
                .subscribe(() => {
                this.addBookForm.reset();
                this.modalService.open('Another book added to your library!', 'Keep the community alive!');
                this.router.navigate(['/wall']);
            });
        }
    }
};
AddBookComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-add-book',
        templateUrl: './add-book.component.html',
        styleUrls: ['./add-book.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        addbook_service_1.AddBookService,
        modal_service_1.ModalService])
], AddBookComponent);
exports.AddBookComponent = AddBookComponent;
//# sourceMappingURL=add-book.component.js.map