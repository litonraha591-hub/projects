function manageInventoryObject(obj, action){
    let[command, propName]= action.split(":")
    let newObj= {...obj}
    // console.log(command)
    // console.log(newObj);
    // if(command === "delete"){
    //     delete newObj[propName];
    // }
    // return newObj

if((typeof obj !== "object") || (Array.isArray(obj) === true)&&((action != "keys") ||(action != "entries")|| (action != "values")|| (command != "delete")|| (action != "seal")|| (action != "freeze")) )
{
    return "Invalid"
}
else if(action === "keys"){
    return Object.keys(obj)
}
else if(action === "values"){
    return Object.values(obj)
}
else if(action === "entries"){
    return Object.entries(obj)
}
else if(command==="delete"){
     delete newObj[propName]
     return newObj
}
else if(action === "seal"){
     return Object.seal(obj)
    //  obj.a=10;
    //  console.log(obj)
}
else if(action ==="freeze"){
    return Object.freeze(obj)
//     obj.d=10;
//     console.log(obj)
}
else{
    return "Invalid"
}
 }
console.log(manageInventoryObject({a:1,b:2,c:3}, "values"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "shringk"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:b"));
