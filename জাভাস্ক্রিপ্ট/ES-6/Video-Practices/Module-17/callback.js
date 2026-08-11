function registerStudent(cb){
    // console.log("User is registering. Need more data");
    cb();
}

function userBasicInfo(){
    let student ={
        name: "Liton",
        age: 30,
        roll: 29

    }
    console.log(student);
}

function pastAcademyInfo(){
    let academicInfo = {
        ssc: "5.00",
        hsc: "5.00"
    }
    // console.log(academicInfo)
}

// console.log(registerStudent(userBasicInfo))
// console.log(registerStudent(pastAcademyInfo))
function calculator(a,b,cb){
    let sum = a+b;
   cb(sum)
}
function displayResult(result){
    console.log(result)
}
calculator(4,5,displayResult);
calculator(10,5,displayResult);