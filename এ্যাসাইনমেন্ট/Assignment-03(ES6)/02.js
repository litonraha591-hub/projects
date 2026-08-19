function filterActiveUsers(users) {
    const convertArray = [...users]
   const checkUsers= convertArray.filter(user=>user.isActive==true) 
  if((Array.isArray(checkUsers)=== true)&& (checkUsers.length != 0)){

    return checkUsers
  } else{
     return "Invalid"
}

}



