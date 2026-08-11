//Rubber Duck Debugging
// LogicalError- In this function the condition should be str.length==0.
function isEmpty(str){
    if(str.length == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEmpty(""));
console.log(isEmpty("hi"));