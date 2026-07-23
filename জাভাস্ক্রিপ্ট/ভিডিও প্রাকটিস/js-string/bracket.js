// const person = {
//     name : 'tobarek Ali',
//     profession : 'Student',
//     age : 21,
//     isSingle : true,
//     'home address' : 'Newkhali',
     
// }
// console.log(person['profession']);


const words = ['js', 'js', 'react', 'js', 'css']
const counts = {};
for (const word of words){
    counts[word] = (counts[word]|| 0)+1;
}
console.log(counts);
console.log(counts['js']);