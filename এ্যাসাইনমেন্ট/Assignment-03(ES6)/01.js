function studentIntroduction(student) {
let keys = Object.keys(student)

 if((typeof student==="object" && ([...keys].includes("name"))&&([...keys].includes("age"))&&([...keys].includes("course"))))
    {    
     return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
 }
  else{
    return "Invalid"
  }
}

// console.log(studentIntroduction({name: "Rafi", age:18,course:"JavaScript"}))
//  console.log(studentIntroduction({}))
//   console.log(studentIntroduction({name: "Liton Kumar", age:30 ,course:"JavaScript"}))
