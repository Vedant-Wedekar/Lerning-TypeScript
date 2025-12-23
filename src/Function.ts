// ------------------------------------1----------------------------------------------
function orderfromstrangerthings(char:string,powerlevel:number){
    console.log(
        `hey mf u choose ${char} likely is ur fave character here is her power level ${powerlevel}`
    );
    
}

// orderfromstrangerthings('EL',17);

// -----------------------------------------2--------------------------------------

function zomato(order:string){
    if(!order){
        return null
    }
    else console.log(order);   
}
// zomato('vd')

// ================================3=======================================================

function merabacha(type : string = 'cutie'){
    console.log(`haa teri hi baat kar raha hu meri bachu ${type}`);
}
merabacha('cutie')
merabacha()
merabacha('moti')

// --------------------------------------------4----------------------------------------

function senorita(
    song:boolean,
    nickname:string,
    type:'song ' | 'nickname'
){
    console.log(`heyy tujhe kya lagta hai ye song hai ${song} yaa fir kisika nickname ${nickname} yaa shayad dono hi to nahi tume kya lagta hai , ${type}`);
    
}
senorita(true,'nahi',"song ")





