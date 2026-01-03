
// #1----------------------------------------
let subs : number | string = '10M';
 
let apiStatus : 'pending'  | 'success' | 'error'  = 'success'

// #2-----------------------------------------------------

let strangerThingsChar : 'Will' | "Mick" | "Nancy" | "Steve"

// #3----------------------------------------------

const orders = ["12","20","28","42"
]
let currentOrder :string | undefined ; 

for(let or of orders){
    if(or === "20"){
        currentOrder = or;
        break;
    }
    currentOrder = '11';
}
console.log(currentOrder);






