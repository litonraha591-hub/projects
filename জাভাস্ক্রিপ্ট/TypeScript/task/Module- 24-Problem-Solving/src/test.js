function calculateCartTotal(product){
const total = product.reduce((sum, current)=>sum+current.price,0);
return total
}


 
console.log(calculateCartTotal([
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
]));
