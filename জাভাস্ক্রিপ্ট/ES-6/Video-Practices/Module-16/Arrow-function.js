// function sayGreet(name){
//     return `Hello ${name}, Good Morning`
// }



// const sayGreet = ()=>{ return something}

const sayGreet = (name)=> { return `Hello ${name}, Good Morning`};

console.log(sayGreet("Liton"))

const sumFirstThenMultiply= (a,b)=>{
    const sum = a+b;
    const multiply = sum*3;
    return multiply;
};

console.log(sumFirstThenMultiply(3,4))

const student = {
    name: "liton",
    age: 30,
    showName: function(){
        return ` name: ${this.name}. Age: ${this.age}`
    },
    showAge: ()=>{
        return `Age:${ student.age}`
    }
}
console.log(student.showName())
console.log(student.showAge())