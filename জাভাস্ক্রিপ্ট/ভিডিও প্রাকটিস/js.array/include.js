// const numbers = [12, 98, 77, 6, 23];

// const hasItem = numbers.includes(60)
// console.log(hasItem);

// const players = [`Messi`, `Ronaldo`, `Neymar`, `Haland`];
// if(players.includes(`messi`)){
//     console.log(`messi is here`)
// }
// else{
//     console.log(`No messi is not playing`)
// }

const realM = [`Messi`, `Ronaldo`, `Neymar`, `Haland`];
const barM = [`Abul`, `babul`, `kabul`, `jabul`];

const newTeam = realM.concat(barM);
console.log(newTeam);
const numbers = [1, 2, 3, 4, 5]
const joined = numbers.join(`,`)
console.log(joined)
const position = numbers.indexOf(5);
console.log(`position of 5`, position);
console.log(Array.isArray(numbers));
const cutArray = realM.slice(1,3);
console.log(cutArray);