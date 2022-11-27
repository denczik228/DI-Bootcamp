//Exercise 1: Analyzing

//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);//["bread", "carrot", "potato", "chicken", "apple", "orange"]

//---2-----
const country = "USA";
console.log([...country]);//["U", "S", "A"] 

//------Bonus------
let newArray = [...[, ,]];
console.log(newArray);//[undefined, undefined]
//------------------------

//Exercise 2: Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

const welcomeStudents = users.map(element => `hello ` + element.firstName);
console.log(welcomeStudents);

const fullStack = users.filter(element => element.role === 'Full Stack Resident');
console.log(fullStack);

const chain = users.filter(element => element.role === 'Full Stack Resident').map(element => element.lastName);
console.log(chain);

//Exercise 3 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const red = epic.reduce((element, accumulator) => {
    const sen = element+accumulator;
    //console.log(sen);
    return sen;
}, ``)
console.log(red);

//Exercise 4 : Employees #2

const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];

const passed = students.filter(element => element.isPassed > 0);
console.log(passed);

//bonus
const bonus = students.filter(element => element.isPassed>0).forEach(element =>console.log(`Congratulation ${element.name }, you passed the course in ${element.course}`));



