let scores = {
    math: 90,
    science: 85,
    art: 95
}
let sum = 0;
for( const key in scores){
    // console.log(key + ': ' + scores[key])
    // console.log(scores[key])
    sum = sum+scores[key]
}
console.log(sum)