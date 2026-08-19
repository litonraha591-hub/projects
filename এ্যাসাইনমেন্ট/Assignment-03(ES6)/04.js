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
