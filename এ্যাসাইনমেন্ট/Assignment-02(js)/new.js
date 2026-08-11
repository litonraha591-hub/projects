

//Problem-01: Match Winner

function matchWinner(teamAGoals, teamBGoals) {

if( (typeof teamAGoals)=== "number" && (typeof teamBGoals) === "number" ){

if(teamAGoals > teamBGoals){

return "Team A Won";

}

else if(teamAGoals < teamBGoals){

return "Team B Won"

}

else{

return "Draw"

}

}

else{

return "Invalid"

}

}

// console.log(matchWinner(2,2))
// console.log(matchWinner(2,null))

//Problem-02: Elevator Weight Safety Checker

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

// console.log(isElevatorSafe({"weight":60}))
// console.log(isElevatorSafe([90,100,95,120]))
// console.log(isElevatorSafe([90,100,120]))

//Problem-03: AI Token Cost Calculator

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

// console.log(calculateAiCost(-10));

//Problem-04: Top Rated Restaurant Finder

function topRatedRestaurant(restaurants) {

if( (typeof restaurants === "object") && (restaurants.length !== 0)){

let ratingValue = []

let ratingKey = []

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

let finalName = (brandName[ratingKeyNumber]);

return finalName.toUpperCase();

}

else{

return "Invalid"

}

}

// console.log(topRatedRestaurant([{"name":"Burger King","rating":3.9}]))
// console.log(topRatedRestaurant([{"name":"KFC","rating":4.2},{"name":"Pizza Hut","rating":4.6}]))


//Problem-05: Debugging Challenge - API Response Time Monitor

function averageResponseTime(times){

let newArr=[];

for(let i = 0;i< times.length; i++){

if(typeof times[i]=== "string")

{

newArr=[];

break;

}

else{

newArr.push(times[i])

}

}


if ((Array.isArray(times) === true) && (times.length !== 0) && (newArr.length !== 0)){

let total =0;

for(let i = 0; i<times.length; i++){

total +=times[i]

}

let averageTime = total/times.length;

return averageTime;

}

else{

return "Invalid"

}

}

console.log(averageResponseTime([250]))
console.log(averageResponseTime("logs"))