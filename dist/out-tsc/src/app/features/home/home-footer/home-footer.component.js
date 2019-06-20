"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let HomeFooterComponent = class HomeFooterComponent {
};
HomeFooterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'rb-home-footer',
        templateUrl: './home-footer.component.html',
        styles: [
            `
        footer{
            background-color: black;
            padding: 20px 0px;
        }
        
        footer ul{
            list-style:none;
            margin:0 auto;
            display:inline-block;
            padding-top:30px;
        }
        
        footer ul li{
            float:left;
        }
        
        footer ul li a{
            color:#b1aca1;
            padding:20px;
        }
        
        footer ul li a:hover{
            color:#FFBF00;
            text-decoration:none;
        }
       
        `
        ]
    })
], HomeFooterComponent);
exports.HomeFooterComponent = HomeFooterComponent;
//# sourceMappingURL=home-footer.component.js.map