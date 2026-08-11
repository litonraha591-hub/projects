const numbers = [10, 20,30,40,50,60]
const [ten, , thirty, , , sixty] = numbers;
console.log(ten,thirty,sixty)

const student ={

    name: "liton",
    roll: 20,
    age:30,
    marks: {
        physics: 90,
        chemistry: 90,
        social: 80
    }
}
const {name, age, marks: {physics}}= student;
console.log(age, name, student.roll, physics)