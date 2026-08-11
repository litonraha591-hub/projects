// let arr = [30,20,10,50,70]

function filterByCondition(arr){
let value = 10;
let filterByArr =[];
for(i=0; i<arr.length; i++){
    // console.log(arr[i])
if(arr[i]>value){
  filterByArr.push(arr[i])
}

}
return filterByArr;
}
console.log(filterByCondition([30,20,10,50,70,75,39,1530]));