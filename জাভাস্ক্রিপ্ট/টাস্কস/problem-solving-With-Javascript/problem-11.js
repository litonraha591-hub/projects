
function avgArray(arr){

    let sum =0;
for(i=0; i<arr.length; i++){

// console.log(arr[i])
sum = sum+arr[i]

}
let avg = Math.floor(sum/arr.length);
return avg;

}

console.log(avgArray([10, 20, 30]))
console.log(avgArray([100, 100, 100]))
console.log(avgArray([10.5, 20.7, 30]))