// let number = [10, 20, 30,500, 40, 50]
// // console.log(...number);
// // console.log(10,20,30,40);

// // console.log(...students);

// // let maxNumber =  Math.max(100, 200,20,300, 1000, 30, 20,50)
// // console.log(maxNumber);

// let maxNumber = Math.min(...number);
// console.log(maxNumber)

// let number2 = [...number, 234,3432,5454];
// console.log(number2)

// let students = {
//     name: "liton",
//     age: 26
// }
// let student2 ={...students, gpa: 4.00}
// students.something = "test"
// console.log(student2)

// rest operator
function sum(a,b,c, ...numbers){
    let sum = 0;
    for(let number of numbers){
        sum+=number;
    }

    return a+b+c+sum
}
console.log(sum(10,20,30,20,100,20))