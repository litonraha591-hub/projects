// let str = "programming hero"


 function isVowel(str){
let vowel = 0;
for(let i = 0; i <= str.length-1; i++){
    
  
  if(str[i]==='a' || str[i]==='A' || str[i]==='e' || str[i]==='E' || str[i]==='i' || str[i]==='I' || str[i]==='o' || str[i]==='O' || str[i]==='u' || str[i]==='U' ){
    vowel= vowel+1;
   
   }
  
}
 return vowel;
 }
 
//  console.log(isVowel("Hi i am liton"));


//  using includes
function isVowel2(str1){
let vowels = "aeiouAEIOU"
let count =0;
for( let i = 0; i<=str1.length-1; i++){
    let letter = str1[i]
    console.log("i, -. letter ->", i, letter)
    if(vowels.includes(letter)){
        console.log("vowel")
        count++;
    }

}
return  count;
}

console.log(isVowel2("hi This LITON is an apple"));