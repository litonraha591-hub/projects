//Starter Snippet (buggy)
//logical error. Logic should have been score>= 50 .

function checkScore(score){
    if(score>=50){
        return "Pass";
    }
    else{
        return "Fail";
    }
}

console.log(checkScore(50));
console.log(checkScore(40));
console.log(checkScore(80));
console.log(checkScore(30));