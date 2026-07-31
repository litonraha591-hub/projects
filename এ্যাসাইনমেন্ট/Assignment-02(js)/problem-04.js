function topRatedRestaurant(restaurants) {

 if( (typeof restaurants === "object") && (restaurants.length !== 0)){


let ratingValue = []
let ratingKey  = []
let brandName =[]
for(let [key,value ] of Object.entries(restaurants)){
    ratingValue.push(value.rating);
    ratingKey.push(key);
    brandName.push(value.name);
    
}
let largestRating = ratingValue[0];
let largestRatingLength=0;
for(let i = 0;i < ratingValue.length; i++){
    if(ratingValue[i]> largestRating){
        largestRating = ratingValue[i]
        largestRatingLength=ratingValue.length
        
    }
else{
    largestRatingLength = ratingValue.length-1;
}
}

let ratingKeyNumber;

ratingKey.length = largestRatingLength;
if(ratingKey.length >0)
{
    ratingKeyNumber = ratingKey.length-1
}
else{
    ratingKeyNumber = ratingKey.length
}

let  finalName = (brandName[ratingKeyNumber]);
return finalName.toUpperCase();


 }
 else{
     return "Invalid"
}
 }






// console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));
// console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]))
// console.log(topRatedRestaurant([]))
// console.log(topRatedRestaurant("Restaurnats"))
// console.log(topRatedRestaurant(12345))




