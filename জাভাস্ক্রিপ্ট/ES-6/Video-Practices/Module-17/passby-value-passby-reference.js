//    function changeValue(num){
//     num =10;
//    }
//    let a = 10;
//    changeValue(a);
//    console.log(a)

//    function changeObj(obj){
//     obj.name = "Changed";
//    }
//    let person= {
//     name: "Rafi"
//    }
//    changeObj(person);
//    console.log(person.name);

// let name = "Liton"
// let age = 26
// function myFunc(myName, myAge){
// myName = "Raha"
//     console.log(myName,myAge);
// }
// myFunc(name)
// console.log(name,age)
let student = {
    name: "Liton",
    roll: 29
}

function myFunc2(data){
    data.name = "Liton Raha"
    console.log(data);
}
myFunc2(student)
console.log(student)