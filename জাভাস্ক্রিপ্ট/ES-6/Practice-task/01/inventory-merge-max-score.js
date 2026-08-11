function mergeInventory(arr1,arr2){
    if((Array.isArray(arr1) || Array.isArray(arr2)) === false  ){
        return "Invalid"
    }
    else{
        return [...arr1,...arr2];
    }
}
function highestScore(arr1){
    if(Array.isArray(arr1) === false){
        return "Invalid"
    }
    else{
        let newArr = Math.max(...arr1);
    return newArr;
    }
}
console.log(mergeInventory([1,2], [3,4]))
console.log(highestScore([1,2,30,4,100]))
console.log(highestScore("3,7,2"))