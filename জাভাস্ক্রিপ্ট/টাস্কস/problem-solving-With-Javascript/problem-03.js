

function facttorialOfNumber(number){
let fact = 1;
if(fact === 0){
    console.log(fact)
}
else{
    for(let i = 1; i<=number; i++ ){
        fact = fact*i
       
    }
     return fact;
}
}
console.log(facttorialOfNumber(5));


