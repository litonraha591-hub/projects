const numbers = [10,24,37,58,21,41,90];
let largest = numbers[0];
let smallest = numbers[0];
for(let i = 1; i< numbers.length; i++){
    if(numbers[i]>largest){
        largest = numbers[i];
    }
    if(numbers[i]<smallest){
        smallest = numbers[i];
    }
}
console.log("largest", largest);
console.log("smallest", smallest);