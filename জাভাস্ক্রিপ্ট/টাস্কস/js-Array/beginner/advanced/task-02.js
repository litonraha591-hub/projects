const values = [10, `apple`, 20, `banana`, 30, `orange`, 40];
const numbers =[]
const strings = []

for (let i = 0; i < values.length; i++){
    if(typeof values[i] == "number"){
        numbers.push(values[i]);
    }
    else{
        strings.push(values[i]);
    }

}
console.log("Numbers:", numbers);
console.log("Strings", strings);
