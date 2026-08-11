function generateLeaderboard(students){
    const newStudents = !students.some(element=> typeof element.score==="string")
    console.log(newStudents)
}





const result = [{name:"Rafi",score:"90"}]
console.log(generateLeaderboard(result))