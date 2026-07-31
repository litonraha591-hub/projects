function isElevatorSafe(weights) {
  let total = 0;

  if(Array.isArray(weights) === true){
    for(let i = 0; i< weights.length; i++){

    total += weights[i];
  }
  if(total <= 400){
  return true;
   }

  else if(total > 400){
  return false;
  }
  
}

  
  else {
    return "Invalid"
  }

 }
 



