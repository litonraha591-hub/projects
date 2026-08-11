// let sentence = "This is programming hero"

function countWords(sentence){
    let withoutSpace = sentence.replaceAll(" ",""); 
console.log(withoutSpace)
let count = 0;
for(let i =0; i<= withoutSpace.length-1; i++){
    // console.log(sentence[i])
    count++;
}

return count;
}

console.log(countWords("This is programming hero"));

//only words 
// let sentence = "this is a sentence"
function countWord(sentence){
    let newSentence =sentence.split(" ");
let count = 0;
for(let i = 0; i<= newSentence.length-1; i++){
    console.log(newSentence[i])
    count++;
}
return count;
}

console.log(countWord("this is my now sentence"))
console.log(countWord("this is my now sentence hi this is my"))
