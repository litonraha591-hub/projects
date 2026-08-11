function generateLeaderboard(students) {
if(typeof students ==="string"){
    return "Invalid"
}
 
    if ((!Array.isArray == students)||(students.some(student=> !student.name || !student.score)||(students.length == 0))) {
        return "Invalid";
    }
    const newStudents = !students.some(element=> typeof element.score==="string")
    if(newStudents===false){
        return "Invalid"
    }
    


  
    const qualified = students.filter(student => student.score>=70) 
       


     const names = qualified.map(student=>student.name.toUpperCase())
    

    return names.slice(0, 3);
}
const result = [{name:"Rafi",score:90}]
console.log(generateLeaderboard(result))