// Syntax Error: 
//
function getOddNumbers(number){
    let odds = [];
    for(let i = 0; i<=number.length; i++){
        if(number[i] % 2==1){
            odds.push(number[i]);
        }
    }
    return odds;
}
console.log(getOddNumbers([1,2,3,4,5,6]));