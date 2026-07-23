const numbers = [1, 2, 3, 4, 5, 6, 7];

// const slice = numbers.slice(2,6)
// console.log(slice);

const parts = numbers.splice(2,2, 99,100,200);
console.log(parts);
console.log(numbers);