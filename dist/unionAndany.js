"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #1----------------------------------------
let subs = '10M';
let apiStatus = 'success';
// #2-----------------------------------------------------
let strangerThingsChar;
// #3----------------------------------------------
const orders = ["12", "20", "28", "42"
];
let currentOrder;
for (let or of orders) {
    if (or === "20") {
        currentOrder = or;
        break;
    }
    currentOrder = '11';
}
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map