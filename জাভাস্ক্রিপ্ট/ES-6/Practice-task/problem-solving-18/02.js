const buildProfileCard=(user)=>{
return `${user.name} ${user.title} at ${user.company}`
}

console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }))