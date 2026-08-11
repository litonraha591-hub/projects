function greet(name = "guest"){

    return  "hello " + name
}
console.log(greet("Liton"))
console.log(greet())

function makeCoffee(sugar = 1){

    return "Coffee is prepared with " + sugar +" spon sugar"

}
console.log(makeCoffee(3))
console.log(makeCoffee())

function calculateTotal(price, tax= 5){
    return price + tax;
}

console.log(calculateTotal(100))