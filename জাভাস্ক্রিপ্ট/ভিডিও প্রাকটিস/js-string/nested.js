const college = {
    name: 'vnc',
    address:'baily road',
    events: ['21st Feb','Independence Day', 'Victory day'],
    students: 800,
    people: {
        count:200,
        principal: {
            name: 'sabura mam',
            yearsOfExperience: 25,
            degree: 'English'
        }
    }
}
// console.log(college.people.principal.degree);
console.log(college['people']['principal']['name'])
console.log(Object.entries(college));