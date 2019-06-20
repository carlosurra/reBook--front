"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("@angular/animations");
exports.fadeAnimation = animations_1.trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    animations_1.transition('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        animations_1.query(':enter', [animations_1.style({ opacity: 0 })], { optional: true }),
        animations_1.query(':leave', 
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [animations_1.style({ opacity: 1 }), animations_1.animate('0.3s', animations_1.style({ opacity: 0 }))], { optional: true }),
        animations_1.query(':enter', [animations_1.style({ opacity: 0 }), animations_1.animate('0.3s', animations_1.style({ opacity: 1 }))], { optional: true })
    ])
]);
//# sourceMappingURL=animations.js.map