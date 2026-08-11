/**
 * Advanced error (1): Chained Method Call
 * 
 * an array, then return that array.
 * Bugs: 1 bug-chaining .push() onto a method chain silently breaks the type
 * Expected: getUpperCaseWords(["javascript", "debugging"])
 * 
 * 
 */
// function getUpperCaseWords(words){
//     return words.join(", ").toUpperCase().split(", ");
// }


// let result = getUpperCaseWords(["javascript", "debugging"]);
// // console.log(result);

// /**
//  * Advanced Error (2): Nested Object Bug
//  * purpose: should calculate a student`s average score across their subjects.
//  * bugs: 1 bug- code assumes a property exists on
//  * Expected: calculateAverage(student) -> 85.00 (average of 80 and 90)
//  */

// function calculateAverage(student){
   
//     let total =0;
//     let count = 0;
//     for(key in student.marks){
        
//         total = total+student.marks[key]
//         count++
//     }
    
//  return (total/count)
    
// }
// let student = {

//     marks: {
//         math: 80,
//         physics: 90,
//         chemistry: 100,
//         bangla:0
//     }
// }
// // console.log(calculateAverage(student));

// //**
// // Advanced Error (3): Array of Objects + Acumulator

// //  (quantity*price), skipping anything with 0 quantity.


// // expected: getTotalStockValue(inventory)-. 700

// // (5*100+0*50(skipped))+4*50 = 500+200
// // 
// // */

// function getTotalStockValue(inventory){
//     let totalValue = 0;

//     for(let i =0; i < inventory.length; i++){
//         // console.log(inventory[i])
//         let item =inventory[i];
//         // console.log(item.quantity)
//         // console.log(item.price)
//         if(item.quantity > 0){
//             totalValue += item.quantity * item.price
         
//         }
//     //    console.log(totalValue)
//     }
//     return totalValue;

// }
// let inventory = [
//     {name: "keyboard", quantity:5, price:100},
//     {neme: "mouse", quantity: 0, price: 50},
//     {name: "monitor", quantity: 4, price: 50},
//     {name: "headphone", quantity: 5, price: 100},
// ]
// console.log(getTotalStockValue(inventory));

/* 14-6: Using VS code debugger (1) */
function findAverage(numbers){
    let total =0;
    // console.log(numbers.length)
    // console.log(numbers)
    for(let i = 0; i< numbers.length; i++){
        //  console.log(numbers[i])
        total = total + numbers[i]
    }
 
     let average = total/numbers.length;
     return average;
}

//  console.log(findAverage([10, 20, 30,100]));

//Sum of EvenNumbers
function sumEvenNumbers(prices){
    let total = 0;
    // console.log(prices)
    for (let i =0; i< prices.length; i++){
        if(prices [i] %2 === 0){
            total += prices[i];
            
        } 
    }
    return total;
}

console.log(sumEvenNumbers([20, 61, 15, 80,20,25,101,200]));