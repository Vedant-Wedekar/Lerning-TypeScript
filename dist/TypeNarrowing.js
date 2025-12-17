"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @@@@@@@@@@    1-------------------------------
function lassi(flavour) {
    if (typeof flavour === "string") {
        // return `Wait a minute here is ur  ${lassi} lassi`
        console.log(`Wait a minute here is ur  ${flavour} lassi`);
    }
}
lassi("Badam");
function OrderDeJaldi(order) {
    switch (order.type) {
        case "amul-oreo":
            console.log("ab nahi mmilti wo ice cream");
            break;
        case "masala":
            console.log("Anushka ko pasand , mujhe utna nahi pasand");
            break;
        case "simple wali ":
            console.log("palak o pasand ");
            break;
        default:
            console.log("kuch nahi milega ");
            break;
    }
}
OrderDeJaldi({
    name: "Simple",
    type: "masala",
    Noofbhatura: 4
});
// @@@@@@@@@@    4-------------------------------
// @@@@@@@@@@    5-------------------------------
// @@@@@@@@@@    6-------------------------------
//# sourceMappingURL=TypeNarrowing.js.map