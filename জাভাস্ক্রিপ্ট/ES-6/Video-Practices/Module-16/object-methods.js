let user = {
    name: "Liton",
    age: 35,
    id: 4003
}
delete user.name
// console.log(user)
// const keys = Object.keys(user);
// const values = Object.values(user);
// const entries = Object.entries(user)
// console.log(keys, values, entries);

// for (let elem of keys){
//     console.log(elem, user[elem])
// }
// for(let elem of entries){
//     const [key, value]= elem;
//     console.log(keys, value);
// }

// delete user.age;
// console.log(user)

// seal and freeze
const bankAccount = {
    accountNumber : "01234",
    name: "Liton",
    balance: 5000
}
Object.seal(bankAccount);
delete bankAccount.accountNumber;
bankAccount.balance=400
// console.log(bankAccount)

let birthCirtificate = {
    name: "liton",
    cirtificateNumber: 3434254281,
    date:"22/10/1995",
}
Object.freeze (birthCirtificate)
delete birthCirtificate.name;
console.log(birthCirtificate)