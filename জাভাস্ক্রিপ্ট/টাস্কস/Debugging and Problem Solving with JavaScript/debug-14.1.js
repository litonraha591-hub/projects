//Snippet A-----SyntaxError
function sayHi(name){
    // Here i have seen syntaxError: The closing parentheses for the console.log function has not been used here.
    // console.log("Hi, " +name)  //find the bug

}
sayHi("Mira");

//Snippet B--TypeError


//Here output is correct but no function have been used. 
function getUpperCase(word){
   return word.toUpperCase();
}
// console.log(getUpperCase("hello")); 

// Snippet C--logicalError

function square(num){
    // This function is used to calculate the square of a number. Here * multiplication sign should have been used. 
    return num*num;
}
console.log(square(4));

//Sarter Snippet (fix all three below)