//Exercise 1 : List Of People
const people = ["Greg", "Mary", "Devon", "James"];

//Write code to remove “Greg” from the people array.
people.splice(0, 1);
people.length;
console.log(people, people.length, people.indexOf());

//Write code to replace “James” to “Jason”.
people.splice([2], 1, "Jason"); //works with arrays like replace
console.log(people);

//Write code to add your name to the end of the people array.
people.push("Den");
console.log(people);

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
people.indexOf("Mary");
console.log(people.indexOf("Mary"));

//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
people.slice(1);
console.log(people.slice(1));

//Write code that gives the index of “Foo”. Why does it return -1 ?
people.indexOf("Foo");
console.log(people.indexOf("Foo"));
//because the method of indexOf searches the array for the given value("Foo") and returns its index. If no item is found, it returns -1

//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array ?
let last = people.length - 1;
console.log(last);
//for example if lenght = 3 index will be 2, therefore relation index = lenght - 1


//Part II - Loops
//Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
//Hint: take a look at the break statement in the lesson.
for (let j of people) {
    if (j === "Jason") {
        break;
    }
    console.log(j);
}
//--------------------------------------------

//Exercise 2 : Your Favorite Colors

//1.Create an array called colors where the value is a list of your five favorite colors.
const colors = ["red", "blue", "white", "yellow", "green"];

//2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for (let k of colors) {
    console.log(`My #1 choice is ${colors[0]}, My #2 choice is ${colors[1]}, My #3 choice is ${colors[2]}, My #4 choice is ${colors[3]}, My #5 choice is ${colors[4]}`);
}

//3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint: create an array of suffixes to do the Bonus

for (let c of colors) {
    console.log(`My ${colors.indexOf(colors[0]) + 1}st choice is ${colors[0]}, My ${colors.indexOf(colors[1]) + 1}d choice is ${colors[1]}, My ${colors.indexOf(colors[2]) + 1}d choice is ${colors[2]}, My ${colors.indexOf(colors[3]) + 1}th choice is ${colors[3]}, My ${colors.indexOf(colors[4]) + 1}th choice is ${colors[4]}`);
}
//---------------------------------------------

//Exercise 3 : Repeat The Question
// 1.Prompt the user for a number.
// Hint: Check the data type you receive from the prompt(ie.Use the typeof method)

//""- empty fields or Nan - not a numerical variables
let person = prompt("Please enter your number", "");
if (typeof person === "" || isNaN(person)) {
    alert(`just numbers ${person}`);
}
console.log(person);

//2.While the number is smaller than 10 continue asking the user for a new number.
//Tip: Which while loop is more relevant for this situation ?

let userInput;

do {
    userInput = prompt(`Write your numbers`, ``);

    if (userInput == +userInput && userInput.trim()) {
        console.log(userInput);
    } else if (userInput !== null) {
        alert('its not a number');
    }
} while (userInput < 10) {
    alert(`${userInput} >10`);
}
//--------------------------------------

//Exercise 4 : Building Management
//1.Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

// 2.Console.log the number of floors in the building.
console.log(building["numberOfFloors"]);

//3. Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
//4. Console.log the name of the second tenant and the number of rooms he has in his apartment. 
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan);
//5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.If it is, than increase Dan’s rent to 1200.
let dIncr = 1200;
let sum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if (sum > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = dIncr;
    console.log(building.numberOfRoomsAndRent.dan);
}
//--------------------------------------

//Exercise 5 : Family

const Family = {
    firstName: "Den",
    lastName: "Bernikov",
    age: "30"
}

//Using a for in loop, console.log the keys of the object
//Using a for in loop, console.log the values of the object
let text = "";
let sen = "";
for (let data in Family) {
    //console.log(data);
    text += ` ${data} `;
    //console.log(Family[data]);
    sen += ` ${Family[data]}`;
}
console.log(text);
console.log(sen);

//--------------------------------
//Exercise 6 : Rudolf
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let sentence = "";
for (let user in details) {
    //console.log(user);
    //1 st loop key my =>
    //console.log(details[user]);
    //2 d loop of user variable name=> 
    sentence = sentence + ` ${user} ${details[user]}`;
}
console.log(sentence);
//--------------------------------

//Exercise 7: Secret group
//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
//Console.log the name of their secret society.The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

//sort all names by alphabetical order
names.sort()
console.log(names);

let secretSoc = "";
for (let user of names) {
    const firstLetter = user[0];
    secretSoc = secretSoc + firstLetter;
}
console.log(secretSoc);