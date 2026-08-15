const sumAll=(numbers:number[]):number=> {
const sumOfAllNum = numbers.reduce((sum,elem)=>{
   return  elem+sum
},0)
return sumOfAllNum
}

let numbers: number[] =[ 1,2,3,4]
console.log(sumAll(numbers))