function createCounter(){
    let counter = 0;
    return function (){
        counter ++
        return counter;
    }
}
let counter = createCounter();
// console.log(counter())
// console.log(counter())


function cashRegister(){
    let amount = 0;
    return function(payableAmount){
        // console.log(payableAmount);
        amount+=payableAmount;
        return amount;
    };
}
let coffeShopCashCounter = cashRegister();
let restaurantCashCounter = cashRegister();
console.log("conffeeshop:", coffeShopCashCounter(200))
console.log(coffeShopCashCounter(300))
console.log(coffeShopCashCounter(400))
console.log(restaurantCashCounter(40))
console.log(restaurantCashCounter(50))
console.log(coffeShopCashCounter(300))
