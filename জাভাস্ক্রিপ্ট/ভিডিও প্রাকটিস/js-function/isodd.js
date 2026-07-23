function odd(number){
    if(number%2 === 1){
        return true;
    }
    else{
        return false;
    }
}
const result = odd(20);
console.log('is odd', result);