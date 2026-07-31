function calculateAiCost(tokensUsed) {

 if((typeof tokensUsed === "number")&&(tokensUsed >= 0)){
    let price = 0;
    if(tokensUsed > 500){
        price = price+ Math.floor((tokensUsed-500)/100)*5;
      return price;
    }
    else{
      return 0;
    }
 }
 else{
    return "Invalid";
 }
}

