const user = {
    name: "Liton",
    age: 26,
    something: [20,30,40,50],
   "my-address": "paithali",
    company: {
        name: "programming",
        address : {
           location: "mirpur",
           street: "122 mirpur"
        }
    }
}
const user2 = {
    name: "Liton",
    age: 26,
    something: [20,30,40,50],
   "my-address": "paithali",
    
}
const key ='company'
// console.log(user[key], user["my-address"])
//optional chaining

// console.log(user2?.company?.name)
// for (let key in user){
//     console.log(key, user[key])
// }