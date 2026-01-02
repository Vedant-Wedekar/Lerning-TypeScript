// @@@@@@@@@@    1-------------------------------
function lassi(flavour:string|number){
    if(typeof flavour === "string"){
        // return `Wait a minute here is ur  ${lassi} lassi`
        console.log(`Wait a minute here is ur  ${flavour} lassi`);
    }
}

lassi("Badam")

                                    // Same as above



// @@@@@@@@@@    2-------------------------------

// type chai =  {
//     name: string,
//     fav : string,
//     ingrident :[string]
// }

// @@@@@@@@@@    3-------------------------------
type cholebhature = { name : "Simple", type : 'masala', Noofbhatura:Number}

type ice_cream = { type:'amul-oreo',fav:'chocolate',sizeincen:Number}

type pavBhaji = { type:'simple wali ', fav:'extra chess' , portion:Number
}

type favsnacks = cholebhature | ice_cream | pavBhaji
    
function OrderDeJaldi(order :favsnacks){
    switch (order.type){
            case "amul-oreo":
                console.log("ab nahi mmilti wo ice cream")
                break;

            case "masala":
                console.log("Anushka ko pasand , mujhe utna nahi pasand");
                break ;
            case "simple wali ":
                console.log("palak o pasand ");
                break;

            default :
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

