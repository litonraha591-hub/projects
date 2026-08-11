//syntax Error Here loop increment or decrement are not used. 

function countUpTo(n){
    let count = 0;
    for (let i =1; i<=n; i++){
        count = count+1;
    }
    return count;

}
console.log(countUpTo(5));
console.log(countUpTo(9));