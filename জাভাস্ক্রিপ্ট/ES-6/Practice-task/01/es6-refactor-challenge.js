var calculateTotal = function(items) {
var total = 0;
for (var i = 0; i < items.length; i++) {
total = total + items[i].price;
}
return 'Total: ' + total + ' Taka';
};
console.log(calculateTotal([{price:100},{price:250}] ))
console.log(calculateTotal([{price:80}] ))