const userNameEmail=(user:{name: string, email?:string}) =>{
if(user.email===undefined){
    return "Email: Not provided"
}
return user

}



const user:{name:string,email?:string} ={ name: "Amina", email:"liton@gmail.com"}
console.log(userNameEmail(user))