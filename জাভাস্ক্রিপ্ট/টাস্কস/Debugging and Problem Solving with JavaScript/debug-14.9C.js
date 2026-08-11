function repeatString(str, times){
    let result = "";
    for(let i = 0; i<times; i++){
        result += str;
    }
    return result;
}
console.log(repeatString("ab",3));