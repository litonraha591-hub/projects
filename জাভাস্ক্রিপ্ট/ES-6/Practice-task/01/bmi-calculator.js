const calculateBMI =(weight,height)=>
   
{
if((height <=0 || weight <=0)||(typeof height ==="string" || typeof weight ==="string")){
return "Invalid"
}
else{
let BMI = weight/(height*height);
let BMItoNumber = Number(BMI.toFixed(2))
return BMItoNumber
}

}
console.log(calculateBMI(70,1.75))
console.log(calculateBMI(0,1.75))
console.log(calculateBMI(20,-1.75))
console.log(calculateBMI(50,1.6))
console.log(calculateBMI("50",1.6))