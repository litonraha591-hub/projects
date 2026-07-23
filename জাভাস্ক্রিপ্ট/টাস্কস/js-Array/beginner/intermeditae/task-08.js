const numbers = [2,24,35,34,45,76];
console.log(numbers);
let total = 0;
for(let i = 0; i< numbers.length ; i++){
    total = total+numbers[i];
}
console.log(`total`, total);