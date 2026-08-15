const studentNameAndTotal= (student:string[]): number|string =>{
let totalStudents: number = 0;
for(let i = 0; i<student.length; i++){
 totalStudents+= student.length;
}
return `Total Student : ${totalStudents}`
}

const students:string[]= ["Amina","Rahim", "Karim", "Salam", "Rafi"]
console.log(studentNameAndTotal(students))