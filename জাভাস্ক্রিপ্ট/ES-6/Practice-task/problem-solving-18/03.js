let getLowestPrice=(prices)=>{
 
console.log(prices)
let lowestPrice= Math.min(...prices)
return lowestPrice

}
console.log(getLowestPrice([340,120,5,560,90,10]))