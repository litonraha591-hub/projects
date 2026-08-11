// let name = "liton"
// let price = 200;
// let quantity  = 5;
// let location=`badda, dhaka`
// // let message = "Hello " + name + " your bill is " + price

// let message = `Hello, ${name} Your bill is ${price * quantity}        liton `
// console.log(message)
// let name = "liton"
// let amount = 500;
function admissionBill(name="guest",amount=500){

    let message = ` Hello, ${name}, your payment is successfull
                You bill is ${amount}`
                return message
}



console.log(admissionBill("Liton", 500))
console.log(admissionBill("Raha", 550))
console.log(admissionBill( ))