let name = "JavaScript";
// console.log(name)
 let nameSplit = name.split("");
//  let nameJoined = nameSplit.join('');
//  console.log(nameJoined)

// console.log(nameSplit);
// let nameReversed = nameSplit.reverse();
// console.log(nameReversed)
// let nameJoined = nameSplit.join('');
// console.log(nameJoined)
// for( name of nameReversed){
//     //  console.log(name);
// }
//  console.log(name)
// let reversed = ""
// for( let i = 0; i<= nameReversed.length; i++){
//     reversed = reversed + nameReversed[i];
// }  
// console.log(reversed);
console.log(nameSplit)
console.log(nameSplit.length)
let reversed = "";
for(let i = nameSplit.length-1; i>=0; i--){
    reversed = reversed + nameSplit[i];
}
console.log(reversed)