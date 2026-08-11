//Problem-01

// function calculateTotal(discount,...prices){
// let totalAmount = prices.reduce((accumulator, currentValue)=>accumulator+currentValue,0)
// let discountAmount = (totalAmount*discount)/100;
// let totalAmountAfterDiscount= totalAmount-discountAmount;
// return totalAmountAfterDiscount

// }
// console.log(calculateTotal(5,100,200,300))

//Problem-02
// function mergeDeduplicateArray(){

// }
// console.log(mergeDeduplicateArray([1,2,3,4],[3,4,5,6]))
let arr1 = [1,2,3,4]
let arr2 = [3,4,5,6]
let mergedArr = [...arr1,...arr2]
let newArr = [...new Set(mergedArr)]
// for(let i = 0;i<mergedArr.length; i++){
//     if(!newArr.includes(mergedArr[i])){
//         newArr.push(mergedArr[i])
            

//     }
   
// }
 console.log(newArr)