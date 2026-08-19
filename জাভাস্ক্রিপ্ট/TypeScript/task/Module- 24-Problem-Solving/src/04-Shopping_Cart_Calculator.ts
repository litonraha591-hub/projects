type Product ={    
    name: string;
    price: number;
};
    
function calculateCartTotal(products: Product[]): number {
 
  const totalCart = products.reduce((sum:number, current:Product):number=> sum+ current.price,0)
 return totalCart
}

 const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
 
console.log(calculateCartTotal(products));

const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
 
console.log(calculateCartTotal(products2));

// calculateCartTotal(products);
// function calculateCartTotal(product){
// const total = product.reduce((sum, current)=>sum+current.price,0);
// return total
// }

// console.log(calculateCartTotal([
//     { name: "Keyboard", price: 1500 },
//     { name: "Mouse", price: 800 },
//     { name: "USB Cable", price: 300 }
// ]));
