const commitment = 'I will work hard and will never give up';
// reverse of this = '.pu evig reven ....'

const parts = commitment.split('');
const reversedParts = parts.reverse();

const reversedCommitment = reversedParts.join('');
// console.log(parts);
// console.log(reversedParts);
// console.log(reversedCommitment);

let reverseCom = '';

for(const letter of commitment){
    reverseCom = letter + reverseCom;
    console.log(letter,reverseCom);
}
console.log(reverseCom);