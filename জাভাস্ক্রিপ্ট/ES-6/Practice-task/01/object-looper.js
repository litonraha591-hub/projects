function printObjectDetails(obj,loopType){

if((loopType!="forin")&&(loopType!="forOfEntries")&&(loopType!="entriesDestructure")){
    return "Invalid";
}
else if(loopType==="forin"){
    let newArr=[]
    for(let key in obj){
      newArr.push(`${key} : ${obj[key]}`)
      
    }
    return(newArr)
}
else if(loopType==="forOfEntries"){
    const newObj=Object.entries(obj)
    let newArr=[]
    // console.log(newObj)
for(let [key, value] of newObj){
   newArr.push(`${key}: ${value}`)
 }
 return newArr
}
else if(loopType==="entriesDestructure"){
  const newObj = Object.entries(obj).map(([key, value])=> {
    return `${key}:${value}`;
  })
  return newObj;
}
}

// console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"))
// console.log(printObjectDetails({fruit:"Mango",price:50}, "forOfEntries"))
console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"))
console.log(printObjectDetails({}, "loopThrough"))