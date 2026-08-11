

  function checkSmallest(number){


let smallest = number[0];
for(let i =0; i<number.length;i++){
   
    let currentElement = number[i];
   if( currentElement< smallest) {
       smallest = currentElement;
    }
}

  return smallest;

  }
  console.log(checkSmallest([23,56,15,67,89,19,13.90,255,3,7,99,1]));

console.log("-----------")

  
function largestNumber(number){
      let largest =number[0];
  for(let i = 0; i<number.length; i++){
    let currentNumber = number[i];
    // console.log(number[i])
    if(currentNumber>largest){
        largest = currentNumber;
    }
   
  }
   return largest;
}
console.log(largestNumber([23,56,15,67,89,19,13,90,3,255,7,99,1,101]))