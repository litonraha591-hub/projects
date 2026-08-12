const promoteEmployee=(employee, newTitle)=>
{
// console.log(employee,newTitle)
const {name} = employee
// const {title}= newTitle

return `name: "${name}", title: "${newTitle}"`


}

console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"))