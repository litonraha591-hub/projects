
function averageResponseTime(times){

let newArr=[];  
  for(let i = 0;i< times.length; i++){
    if(typeof times[i]=== "string")
    {
      newArr=[];
      break;
    }
  else{
  newArr.push(times[i])
  } 
  }
  
 if ((Array.isArray(times) === true) && (times.length !== 0) && (newArr.length !== 0)){ 
let total =0;
for(let i = 0; i<times.length; i++){
  total +=times[i]
}
let averageTime = total/times.length;
 return averageTime;

  }
  else{
    return "Invalid"
  }
}


// console.log(averageResponseTime("hi"));
// console.log(averageResponseTime([1,"5",10]));
// console.log(averageResponseTime([120, 200, 150, 130]));
// console.log(averageResponseTime([]));
// console.log(averageResponseTime([100,100]));
// console.log(averageResponseTime([10,10,10]));
