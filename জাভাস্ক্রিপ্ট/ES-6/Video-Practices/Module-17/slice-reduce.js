let fruits = ["apple", "banana", "orange", "guava","grape"]
const sliced = fruits.slice(1,3)
// console.log(sliced)
let nums = [10,20,30,40,50];
let sum = nums.reduce((accumulator, elem)=>{
return accumulator+elem
}, 0 )
console.log(sum)