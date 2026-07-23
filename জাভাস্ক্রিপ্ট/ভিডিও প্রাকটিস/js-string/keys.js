const person = {
    name : 'tobarek Ali',
    profession : 'Student',
    age : 21,
    isSingle : true
}
delete person.isSingle;
console.log(person)
const keys = Object.keys(person);
console.log(keys)
const values = Object.values(person);
console.log(values);