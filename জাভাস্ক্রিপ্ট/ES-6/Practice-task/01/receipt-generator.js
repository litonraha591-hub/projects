function generateReceipt(customerName,items,total){
// console.log(Array.isArray(items))
// console.log(items.length)
    if(items.length === 0 || (Array.isArray(items) == false) ){
        return "Invalid"
    }
    else{

        return `Receipt for${customerName}\nItems: ${[firstItem,secondItem]=items}\nTotal: ৳${total} `;
    }
}

// console.log(generateReceipt("Rakib", ["pen", "book"],150))
// console.log(generateReceipt("Sadia", ["milk"],150))
console.log(generateReceipt("Sadia", ["milk"],150))
console.log(generateReceipt("Sadia", ["pen", "book", "milk","eraser"],150))
console.log(generateReceipt("Sadia", [],150))


