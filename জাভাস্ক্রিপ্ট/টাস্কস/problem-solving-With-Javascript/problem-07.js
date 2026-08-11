function checkPalindrom(str){
// let str = "madam"
let newStr = []
for(let i = str.length-1; i>=0 ; i--){
    // console.log(str[i])
    newStr.push(str[i])
}
let palindrom =newStr.join('');
// console.log(palindrom)

if(str === palindrom ){
    console.log( str,'Palindrom')
}
else{
    console.log(str,'Not a palindrom')
}

return palindrom;

}
checkPalindrom('Liton');
checkPalindrom('madam');
checkPalindrom('deed');