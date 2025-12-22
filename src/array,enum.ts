// ***********************************1****************************************
const ice_cream : string[] = ['choco', 'vanila' , 'pista']
// console.log(ice_cream[1]);

// console.log(ice_cream);

const age : number[] = [12,34,56,78]

const rating : Array<number> = [4.3,3.4]



type tpp ={
    name :string,
    prices : number
}

const ice_gola :tpp[] = [
    {name:'choce',prices:10},
    {name:'choce',prices:10}
]

const uff : readonly tpp[] = [
{"name":"vedant","prices":10}
]


const city : number[][]= [
    [2,3,4],
    [2,4,5,6]
]


let bread : [string,number,boolean?] ;
    bread=["ved",20]

const book : readonly [string,string] = ['set','']
// book = ['fddv','']

const enum playboy{
    normy = 1,
    me = 2 ,
    africanCurrency = 2
}
