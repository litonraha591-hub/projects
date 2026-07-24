let book = {
    title: "The Hobbit",
    author: "Tolkien",
    pages: 310
}
// for(const key in book){
 
//     console.log(book[key]);
// }
for(const key in book){
    console.log(key + '=' + book[key])
}

delete book.pages;
console.log(book)