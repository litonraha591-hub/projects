const getEmployeeDept =(employee)=>{
 const title = employee.job.title
 const department =employee.job.department
 return `{title:"${title}", department: "${department}"`
}

console.log( getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }))