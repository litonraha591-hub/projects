// Problem-1
// let status = "Order Placed";
// for (let i=1 ; i<= 3; i++){
//     let status = "Processing Item" + i;
//     console.log(status);
// }
// console.log("Final status:", status);

//problem-02

/*
Receipt Generator(template string)
*/

function receiptGenerator(itemName, price, qty){
return `${itemName} x ${qty} = ${price*qty} taka`
}

console.log(receiptGenerator("Pen", 20,3))