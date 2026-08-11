
function reversedNumber(number){

let newNumber = number.toString();
newNumber.split();
let reversedNumber=[]

for(let i = newNumber.length-1; i >= 0 ; i--){
   reversedNumber.push(newNumber[i])
}
return reversedNumber.join('');
}
console.log(reversedNumber(1234))
console.log(reversedNumber(7))
