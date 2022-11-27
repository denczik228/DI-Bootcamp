//1. How to access the second element of the array 
const nums = [3, 7, 10]
nums[1];
console.log(nums[1])

//2. For the code below, what does arrNums.splice(2, 0) return?
//const arrNums = [1, 2, 3, 4, 5];
//it inserts nothing at index 2

//3. What is the result of the following code:
// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]
// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers)

//it should be one array with numbers like bestnumbers and secondBestN should be extracted inside

//4.What does the following code print to the console ?
// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs.spain = "Real Madrid";
// console.log(football.clubs.spain);

//it will be "Real Madrid" because we do a global reassignment

//5.What does the following code print to the console ?
// const myteam = "bestTeam";

// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);

//we will have 3 clubs - france, spain and myteam-- >

//6.Can we define the function as follows ? If yes, what is it called, and explain how to invoke it.
// const x = function (a, b) {
//     return a * b;
// }

    //yes, it called two parametres a and b, we can invoke it by const variable x -->

//7.Variables created without any keyword, are always global, even if they are created inside a function ? Yes or No and explain
// function x() {
//     a = 5;
// }

//no, because in our case we just reassign same global variable that we used before for example it was a = 7 and just in our block of function it will be reassign but outside it will be again a = 7 -- >

//Functions

//8.In JavaScript can we pass functions as arguments to other functions ? What does this code return ?
// function sayHello() {
//     return "Hello, ";
// }
// function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

//no we can't pass a function as an argument to others functions, if we wonna use some result from previous functions we need to past it to a function that we are using and from this moment we possibly can used a return from a new function -->
//in our case from first function we will have a word hello and from the second it will return an error because we trying to pass function like a parametr to a new function

//9.Transform this function into an arrow function
const t = (num1, num2) => num1 + num2;
console.log(t(3, 4));

//10.What does the following code print to the console ? Explain the process and concept behind it-- >
// function foo() {
//     function bar() {
//         return "Poppin' bottles";
//     }
//     return bar();
// }

// console.log(foo());

//this code will print to the consol "Poppin' bottles" - 1st of all function bar returns a text after that at function foo we used returned text from function bar and now when we called it we will have a message like poppin bottles-- >

//------------------DOM

//11.Which of the following events will you add in the addEventListener()method ? ☐ click ☐ onclick 
     //click event

//12.Does the addEventListener() method allow you to add many events to the same element ? -->
//yes it allows to add many events to one element

//13.DOM exercise
//i did a first part, and a second on half but wrong

const but = document.querySelector('button');

const near = (e) => {
    const t = e.target
    t.style.color = "red";
}

const parag = () => {
    const div = document.createElement("div");
    div.innerText = 'New Paragraph';
    document.body.append(div)

    div.addEventListener("mouseover", near)
}

but.addEventListener("click", parag);

//---------------------------Array Methods: forEach, map, filter, reduce, find, every, some-- >

//14.Do this exercise twice: first with a for loop, then with a for of loop.Console.log the sum of this array

const marks = [67, 60, 89, 90, 67, 42];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(sum)

let s = 0;
for (const num of marks) {
    s += num;
}
console.log(s)

//15.What is the value of passed in the following code ? -->
//false, every returns a boolean

//16.What does the following code log ?
//[50, 88] filter returns a new array with data depend on conditional-- >

//17.Use a javascript array method to square the value of every element in the array. -- >
const input = [1, 2, 3, 4, 5]
let res = []
input.forEach(element => {
    res.push(element * element)
})
console.log(res);

//-----------------------18
const secondInput = [1, -4, 12, 0, -3, 29, -150];
const fi = secondInput.filter((element) => element > 0).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(fi) //42

//-----------------------19
//i forgot about join
const sentense = 'George Raymond Richard Martin';
let namess = sentense.split('').filter((s) => !(s === s.toLowerCase())).join('')
console.log(namess)

//---------------------Object and Classes

//20.objects are passed to a function by the reference, when we calling a function we should use a same name of object that we want to use like 
//a parametr, how we could noticed names of parametres are deffrent, but with the same variable like an object, 
//when we displayed parametr in the first time it was an object with color "blue" and price 10, after that we redefind our variable and color changed on red. 
//it was a global redefinition inside a function, all next our displaying of object will give us color red, if we used some const or let variables we 
//will have in the following displays a color "blue".

function changeTshirt(myshirt) {
    console.log("myshirt", myshirt);
    myshirt.color = "red"
    console.log("myshirt", myshirt); //this is the parameter
    console.log("tshirt", tshirt);   //this is the global variable
}

const tshirt = {
    color: "blue",
    price: 10
}

changeTshirt(tshirt)

//21.How would you change the code above, so that when you modify the key color from the parameter myshirt, it won't change the global variable tshirt ?

//we just need to create a new variable and reassign it to a new color, after that our global variable color blue shouldnt chahge  
//let col=myshirt.color
//col="red"

//22.Use object destructuring to retrieve the value of the keys france and spain

// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// const { clubs: { france:p }, clubs:{spain:sp}} = football;
// console.log(`france:${p}, spain: ${sp}`)

//23.Use object destructuring in the function to retrieve the value of the keys france and spain

function retrieveSports({ clubs: { france: p }, clubs: { spain: sp } } = football) {
    const sentence = `My favorite football teams are ${p} and ${sp}`;
    console.log(sentence);
 }

const football = {
    type: "sport",
    clubs: {
        france: "Paris Saint-Germain",
        spain: "Atlético Madrid",
    }
}

retrieveSports(football)

//24.What will be printed in the console

class Item {
    constructor(nameProduct, priceProduct) {
        this.name = nameProduct;
        this.price = priceProduct;
    }

    displayInfo() {
        console.log(this.name + " is for $ " + this.price)
    }
}

const cake = new Item("Chocolate Cake", 10);
cake.displayInfo();

//will be printed a new values that are refer to an object constructor from new Item, and The this keyword refers to different objects depending on 
//how it is used. In our case "this" is being invoked like values of two parametres. When we calling our function with a new parametrs we will have a 
//sentence based on these values of variable cake.

//----------------------Promises

//25. What will be the output and why ? What will be the state of the promise ?

Promise.resolve('Success!')
    .then(data => {
        return data.toUpperCase()
    })
    .then(data => {
        console.log(data)
    })

 //Promise.resolve(value) - Returns a promise fulfilled with the result value. we are handling our promised success to a first .than where it transform to uppercase letters and after to the next chains .then that comeback a promise with our value like a word

//26.What will be displayed by the following code, after 2 seconds?

const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("OK");
    }, 2000);
});

p.then().then(function (data) {
console.log(data);
});

//The promises of a chain are nested - the path is starting from the const p and going to a Promise and after deeper to the function, we seen it in line p.then().then function (data) - where data will be our resolve value OK that we return after 2 sec

//27.Consider the following async function and its output.What will be displayed to the console when calling the test() function? Explain the process
async function test() {
    let result = 'first!';
    console.log(result);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 3000);
    });
    console.log(promise.then().then(function (resolve) {
        console.log(resolve);
    }));
    result = await promise;
    console.log(result);
}

test();

// like result will be displayed value "done" of promise because of await operator, when we definded in a first time result variable it will be "first", 
//next step will be creation of promise that equal to const varibale. It will have a pendding status for 3 sec and a returned value "done" like resolved of promise, 
//after that we redefinded our "result" variable to await promise,and like i said the await operator is used to wait for a promise and get its fulfillment value  

//28.Use async await, and fetch a fact on cats and display it. Use this third party API : https://catfact.ninja/fact

//1.In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
//2.In the JS file, create 2 functions: one to fetch data from API, the other one to display it on the page using the DOM
//3.Make sure to use try and catch

let brand = document.getElementById('for promises');
brand.addEventListener("click", newDiv)

function newDiv() {
    let div = document.createElement('div');
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(facts => new Promise((resolve, reject) => {
            div.innerText = facts.fact;
            resolve(document.body.append(div));
        
        }))
    .catch (error => alert(error.message));
}




    
    


