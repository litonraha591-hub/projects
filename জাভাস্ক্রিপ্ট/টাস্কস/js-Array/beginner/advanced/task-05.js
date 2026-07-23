const numbers = [10, 20, 30, 40, 50];
const first = numbers[0];
for(let i = 0; i < numbers.length-1; i++){
    numbers[i] = numbers[i+1];
}
numbers[numbers.length-1] = first;
console.log(numbers)