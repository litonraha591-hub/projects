function extractUserInfo(userObj){
const{name,age}=userObj.user
console.log(name)
const [firstHobby,secondHobby] =userObj.hobbies;
console.log(firstHobby)

// if(userObj.user.name === undefined){
//     return "Invalid"
// }
// else{
//     return `${userObj.user.name} (${userObj.user.age}) likes ${userObj.hobbies[0]}`
// }
 }

console.log(extractUserInfo({user:{name:"Sadia", age: 22}, hobbies: ["reading", "coding"]}))
console.log(extractUserInfo({user:{name:"Rafi", age: 22}, hobbies: []}))
// console.log(extractUserInfo({user:{age: 22}, hobbies: []}))