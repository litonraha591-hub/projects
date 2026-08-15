const availabilityStore = (productName:string, productPrice:number, productAvailability:boolean)=>{
return `${productName} cost ${productPrice} and is available: ${productAvailability}`
}


const naame: string= "Laptop"
const price: number = 45000
const isAvailable:boolean = true
console.log(availabilityStore(naame,price,isAvailable))