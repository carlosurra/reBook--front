"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let AboutComponent = class AboutComponent {
    constructor() {
        this.title = 'Hey there!! 👋';
        this.subtitle = 'My name is Yago';
        this.description = `I'm a frontend developer and love to create beautiful websites !!. You can check more about me in the followings sites:`;
        this.links = [
            { url: 'http://linkedin.com/yagopv', name: 'LinkedIn' },
            { url: 'http://github.com/yagopv', name: 'Github' },
            { url: 'http://portfolio.yagoperez.com', name: 'Portfolio' },
            { url: 'http://twitter.com/yperezva', name: 'Twitter' }
        ];
        this.contact = {
            description: 'If you want to contact with me you can send me an email to:',
            mail: 'yagoperez@outlook.com'
        };
    }
};
AboutComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map