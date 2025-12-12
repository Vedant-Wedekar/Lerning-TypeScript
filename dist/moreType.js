"use strict";
// @@@@@@@@@@    1-------------------------------
// type Response = unknown;
// let  numericlenght : number =  (Response as string).length;
Object.defineProperty(exports, "__esModule", { value: true });
// @@@@@@@@@@    2-------------------------------
// Any vs Unknown
let val;
val = 10;
val = "10";
val = "vedant";
console.log(val);
console.log(val.toUpperCase());
// output will be the last declared value  
// ===>
//     vedant 
//     VEDANT
// ---------
let newval;
newval = 10;
newval = "10";
newval = "vedant";
// console.log(newval.toUpperCase());  xxxxxxxxxxxxxxxxx
if (typeof newval === 'string') {
    console.log(newval.toUpperCase());
}
// @@@@@@@@@@    3-------------------------------
try {
    console.log('humza , rehman daiket/ baloch , alsi chaudary , bade sab ');
}
catch (e) {
    if (e instanceof Error) {
        console.log('error hai padhle ', e);
    }
    console.log(e);
}
function kontayt(role) {
    if (role === 'Amitbhai') {
        console.log("season wala mask hai bhai ke pass");
    }
    if (role === "ajjubhai") {
        console.log('op bhai op === ajju bhai pirate wala bundle pehn te hai  ');
    }
}
kontayt('ajjubhai');
// @@@@@@@@@@    5-------------------------------
//# sourceMappingURL=moreType.js.map