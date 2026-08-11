let numbers = [2,3,4,5,6];
const double = numbers.map(function (elem){
    return elem*2;
})
// console.log(double)

const tripple = numbers.map((elem)=>elem*3);
// console.log(tripple)

let rolls = [10,20,30,40,50]
rolls.forEach((elem, ind, arr)=>{
    // console.log(elem, ind, arr)
})

//Filter
let prices = [100,200,300,400,500,600,800]
let expensiveProducts = prices.filter((elem)=> elem >=200 )
// console.log(expensiveProducts)
let prices2 = [100,200,300,400,500,600,800]
let expensiveProduct = prices.find((elem)=> elem >=200 )
// console.log(expensiveProduct)

let phone = [
    {
        model: "iphone 15",
        price: 72000
    },
    {
        model: "iphone 16",
        price: 82000
    },
    {
        model: "S25 Ultra",
        price: 100000
    },
    {
        model: "Techno",
        price: 20000
    },
     {
        model: "samgsung A13",
        price: 25000
    }
]

// expensive phones : 50000>=
// cheapest phones: 20000<=
let expensivePhones = phone.filter(phones=> phones.price >= 50000)
let cheapestePhones = phone.filter(phones=> phones.price < 50000)
console.log(expensivePhones)
console.log(cheapestePhones)