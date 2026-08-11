const calculateShipping = (orderAmount, shippingFee=60)=>{
// if(orderAmount>=1000){
//     return "Free Shipping"
// }
// else{
//     return `Shipping Fee: ${shippingFee}` ;
// }
return (orderAmount>=1000) ? "Free Shipping": `Shipping Fee: ${shippingFee}`
};

console.log(calculateShipping(1200))
console.log(calculateShipping(200))
console.log(calculateShipping(200,100))