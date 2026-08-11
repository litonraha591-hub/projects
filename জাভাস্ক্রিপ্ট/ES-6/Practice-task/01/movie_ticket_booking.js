function bookTicket(movie, seats = 1, pricePerSeat = 300){
    let total = 0;
    // console.log(typeof movie)
if(typeof movie === "number" || (seats <! 0) || (pricePerSeat <! 0) ){
return "Invalid"
}
else{
    total = total+(seats*pricePerSeat);
  return `${movie}: ${seats} seat(s), Total ৳ ${total}`
}

}
// console.log(bookTicket("Dune"))
// console.log(bookTicket("Dune", 3))
// console.log(bookTicket("Dune", 2, 450))
console.log(bookTicket(123, 1, 450))
console.log(bookTicket(123, 1, -450))