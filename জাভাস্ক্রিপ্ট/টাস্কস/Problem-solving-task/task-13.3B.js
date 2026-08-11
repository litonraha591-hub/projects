function getOddNumbers(n){
    // console.log(n)
    let arr = ""
    let odds = [];
    for(let i = 1; i<n; i++){
       if (i % 2 !== 0){
        odds.push(i)
       }
    
    }
  
  
    return odds;
}
console.log(getOddNumbers(10));