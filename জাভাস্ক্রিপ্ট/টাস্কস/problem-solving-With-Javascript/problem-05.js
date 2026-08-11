// let str = "programming"
// console.log(str)
// let newStr = str.split('');
// let reversedStr = newStr.reverse();
// console.log(reversedStr)

//using push 

function reversedString(str){
    
let newStr =[]
for(let i = str.length-1; i >= 0; i--){
    newStr.push(str[i]);
}
console.log(newStr.join(''))
}
reversedString("programming");

//using normal process

function reverseWords(str){
    let reverseWord= "";
for(let i = str.length-1; i>=0; i--){
    let letter = str[i]
    console.log("i=> ", i,letter);
    reverseWord = reverseWord+letter;
}
return reverseWord;
}
console.log(reverseWords("Hello"));