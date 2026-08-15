const mergedData = (arr1:number[],arr2:number[]):number[]=>{
return [...arr1,...arr2]
}

let arr1:number[]= [1,2,3]
let arr2:number[]=[4,5,6]
console.log(mergedData(arr1,arr2))

