// #1----------------------------------------
type momo = {
    name:string,
    prices:number
}

                         // Required==========================================
const placeorder = (id: Required<momo>) =>{
    console.log(id);
    
}

console.log(placeorder({name:"fried",prices:90}));

                        //Pick=================================================
const order = (idd: Pick<momo,"prices">) =>{
    console.log(idd);
    
}

console.log(order({prices:100}));


                        //Omit================================================
const mangaKuch = (or: Omit<momo,'prices'>) =>{
    console.log(or);
    
}

console.log(mangaKuch({name:'cheese wale '}));

                         //Partial============================================
const leKarAaakuch = (dekho : Partial<momo>
)=>{
    console.log(dekho);
    
}
console.log(leKarAaakuch({name:'paneer momo  khale  ' , prices:130})
);




