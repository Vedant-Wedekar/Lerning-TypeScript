// #1----------------------------------------
type sambarWadiRecipe = {
    favlour : string,
    feelingQuat : number
}
class VedantKichen implements sambarWadiRecipe{
    favlour = "garlic";
    feelingQuat= 5;
}
// #2----------------------------------------
type Shawarma = "ek half " | "ek full" //hardcore value 
interface biryani { order : "ek half " | "ek full" }//hardcore value 
class momipura implements biryani {
    order : "ek half " | "ek full"="ek full"
}
// #3----------------------------------------
type strangerthing = "max" | "nancy" | "El" 

function milfs(girly?:strangerthing){
    console.log(girly);
    
}
milfs("max");

// #4----------------------------------------

type ign1 = {chickenpiece : number}
type ign2 = {butter:number}
type butterChicken = ign1  & ign2 

const hostel : butterChicken = {
    chickenpiece:5 ,
    butter:10
}
console.log(hostel.chickenpiece);

// #5----------------------------------------