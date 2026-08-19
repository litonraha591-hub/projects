
type User = {
    name: string,
    age: number,
    city: string
};

function formatUserProfile(user: User): String {
return `${user.name} is ${user.age} years old and lives in ${user.city}.`
}
// formatUserProfile({
//     name: "Fahim",
//     age: 22,
//     city: "Dhaka"
// });
 
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}))