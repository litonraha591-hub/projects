function chekTemperature(temp){
    if(temp >= 35 ){
        return "Hot"
    }
    else if (temp <= 15){
        return "Cold"
    }
    else{
        return "Normal"
    }
   
}
console.log(chekTemperature(35));