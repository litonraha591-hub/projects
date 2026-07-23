const numbers = [12, 87, 14, 51, 36, 46];

const evens = [];
for( const num of numbers){
    // console.log(num)
    if(num %2 === 0){
        // console.log('even', num);
        evens.push(num);
    }
}

function getEvenNumbers (array){
    const evens = [];
    for( const num of array ){
        if(num %2 === 0){
            evens.push(num);
        }
    }
    return evens;
}

const result = getEvenNumbers(numbers);
console.log('result', result);