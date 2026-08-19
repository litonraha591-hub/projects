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


//Problem: 05

function bonusScore(scores) {
if(typeof scores === "string"){
    return "Invalid"
}
const newScores = !scores.some(item=>typeof item ==="string")

if(newScores===false){
return "Invalid"
}

if((Array.isArray(scores)===true) && (scores.length!= 0)||(newScores===false)){

const newArr = scores.map(extendScores=>extendScores+10)
const total = newArr.reduce((totalScores,score) => totalScores+score,0)
return total

  }
  else{
    return "Invalid"
  }
}
