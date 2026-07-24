let car = {
    brand: "Toyota",
    model: "Corolla",
    year:2022
};
console.log(car.brand);
console.log(car['model']);
car['color'] = 'blue';
car.year = 2023;
console.log(car)