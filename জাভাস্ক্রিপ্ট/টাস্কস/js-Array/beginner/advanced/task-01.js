const numbers = [10, 20, 30, 40,20,10, 50]
const unique =[];
for(let i =0; i< numbers.length; i++){
    let duplicate = false;

    for(let j = 0; j< unique.length; j++){
        if(numbers[i] === unique[j]){
            duplicate = true;
        }
    }
    if(duplicate === false){
       unique.push(numbers[i]);
    }
}
console.log(unique);