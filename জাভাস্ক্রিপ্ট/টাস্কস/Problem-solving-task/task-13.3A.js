function productOfDigits(num){
    let str = num.toString();
    let product = 1;
    // console.log(typeof str)
    for(let parts of str){
        product *=parts;
        // console.log(product)
    }

    
    let total=product*1;


    return total;
}

console.log(productOfDigits(123));
console.log(productOfDigits(4040));