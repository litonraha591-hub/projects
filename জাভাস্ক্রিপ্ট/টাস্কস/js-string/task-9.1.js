let contact ={
    name: "Alex Johnson",
    email: "ALEX@EMAIL.COM",
    phone: "555-1234"
}
contact.email= contact.email.toLowerCase();
// console.log(contact);

for(const key in contact){
    console.log(key + ":" + contact[key])
}

contact.favouriteWords = ['Liton', 'Kumar', 'Raha']
console.log(contact)
contact.name = contact.name.split('');
contact.name = contact.name.reverse();
contact.name = contact.name.join('');
console.log(contact.name)
if(contact.email.includes('@email.com')){
    console.log('You entered a valid email')
}

  else{
    console.log('You don`t entered a valid eamil')
  }
