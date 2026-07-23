const nestedArray = [[10,20],[30,40],[50,60]];
const flatArray = [];
for (let i = 0; i< nestedArray.length; i++){
    for(let j = 0; j< nestedArray[i].length; j++){
        flatArray.push(nestedArray[i][j]);
    }
}
console.log(flatArray);