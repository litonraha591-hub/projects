let user = {
    username: "coder123",
    adress:{
        city: "Austin",
        zip:"78701"
    }
}

console.log(user.adress.city);
user.adress.country = 'USA';
console.log(user.adress)
delete user.adress.zip;
console.log(user.adress)