// for(let i = 0; 1<=100; i++){

//     if(i > 5){
//         break;
//     }
//     console.log(i);

// }

let count = 0;
while (count < 10){
    if(count > 4){
        console.log(`going to break `);

        break;
    }
    console.log(`value of count`, count);
    count++;
}
console.log(`life masti after breakup`);