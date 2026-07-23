const numbers = [12, 4, 6, 18, 56];

let sum =0;
for(const num of numbers){
    sum = sum + num;
    // console.log(num, sum);

}
// console.log(sum);

function sumOfArray(array){
    console.log('inside the function',array);
    let sum = 0;
    for(const num of array){
        console.log(num);
        sum = sum + num;
        
    }
    return sum;
}

const result = sumOfArray(numbers);
console.log('sum of array', result);