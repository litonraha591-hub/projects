let monitor = {
    color: "Black",
    size: "17",
    brand: "Samgsung"
}
// console.log(monitor.color);
// for( key in monitor ){
//     console.log(key, " : ", monitor[key])
// }

let objKeys = Object.keys(monitor);
// console.log(objKeys);
for (let i = 0; i<objKeys.length; i++){
    let key = objKeys[i]
    console.log(key, ":", monitor[key])

}