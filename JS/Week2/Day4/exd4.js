//Ex 1
//Part I: function with no parameters

//1.Create a function called infoAboutMe() that takes no parameter.
//2.The function should console.log a sentence about you(ie.your name, age, hobbies ect…).
//3.Call the function.

function infoAboutMe() {
    console.log("Den, 30, extre sport, travelling and coding ")
}
infoAboutMe()

//Part II : function with three parameters

//1.Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//2.The function should console.log a sentence about the person(ie. “You name is …, you are..years old, your favorite color is …”)
//3.Call the function twice with the following arguments:

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} year old, your favorite color is ${personFavoriteColor} `)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
//----------------------------------

//ex2:tips

function calculateTip() {
    let amountOfBill = Number(window.prompt("What is the amount of Bill?", ""));
    console.log(amountOfBill);
    if (amountOfBill < 50) {
        totalTip = amountOfBill * 0.2;
        console.log(totalTip);
    } else if (amountOfBill >= 50 && amountOfBill < 200) {
        totalTip = amountOfBill * 0.15;
        console.log(totalTip);
    } else {
        totalTip = amountOfBill * 0.1;
        console.log(totalTip);
    }
    const finalBill = amountOfBill + totalTip;
    console.log(`Final bill will ${finalBill}`);
}
calculateTip()
//----------------------------

//Exercise 3 : Find The Numbers Divisible By 23
let arr = [];

function isDivisible() {
    for (let number = 0; number < 500; number++) {

        if (number !== 0 && number % 23 === 0) {
            arr.push(number);
            console.log(arr);
        }
    }
    let result = arr.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
    console.log(result);
}
isDivisible()
///bonus with parametr

let bonus = [];
let bon = [];
function isD(divisor) {
    for (let num = 0; num < 500; num++) {

        if (num !== 0 && num % divisor === 0 && divisor !== 3) {
            bonus.push(num);
            console.log(bonus);
        } else if (num !== 0 && num % divisor === 0 && divisor == 3) {
            bon.push(num);
            console.log(bon);
        }
    }
    let res = bon.reduce(function (summ, elemm) {
        return summ + elemm;
    }, 0);
    console.log(res);
}
isD(3);
isD(45);

//Exercise 4: Shopping List

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

const shoppingList = ["banana", "orange", "apple"];
console.log(shoppingList);

function myBill() {
    bill = {}
    shoppingList.forEach(function (item) {
        if (stock[item] === 0) return
        if (!(item in bill)) bill[item] = 0
        bill[item] += prices[item]
        stock[item] -= 1
    })
    console.log(bill);
    console.log(stock);
}
myBill();

//Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {

    let quarters = amountOfChange[0] * 0.25;
    let dimes = amountOfChange[1] * 0.10;
    let nickels = amountOfChange[2] * 0.05;
    let pennies = amountOfChange[3] * 0.01;

    let e = quarters + dimes + nickels + pennies;

    return itemPrice < e;
}
changeEnough(4.25, [25, 20, 5, 0]);
changeEnough(14.11, [2, 100, 0, 0]);
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));

//Exercise 6 : Vacations Costs

function hotelCost() {
    const costPerNight = 140;
    let numberOfNight = NaN;

    while (isNaN(numberOfNight) || numberOfNight === '' || numberOfNight == 0) {
        numberOfNight = prompt("The number of nights that you would like to stay in our hotel", 1);
    }
    return costPerNight * numberOfNight;
}
console.log(hotelCost());

function planeRideCost() {

    const des = {
        "London": 183,
        "Paris": 220,
        "others": 300,
    }
    let dest = "";
    while (dest == String || dest === '') {
        dest = prompt("What is your destination?", "London");
    }

    let prc = des[dest];
    if (isNaN(prc)) prc = des["others"];
    return prc;
}
console.log(planeRideCost());

function rentalCarCost() {
    const carPayment = 40;
    let numOfRent = NaN;

    while (isNaN(numOfRent) || numOfRent === '' || numOfRent == 0) {
        numOfRent = prompt("The number of days that you would like to rent the car", 1);
    }
    if (numOfRent > 10) {
        return carPayment * numOfRent - carPayment * numOfRent * 0.05;
    } else {
        return carPayment * numOfRent;
    }
}
console.log(rentalCarCost())

function totalVacationCost() {
    let hC = hotelCost();
    let pRC = planeRideCost();
    let rCC = rentalCarCost();
    console.log(`The price of the hotel is $${hC}, planned ticket cost is $${pRC}, cost of renting a car is $${rCC}`);
    return hC + pRC + rCC;
}
console.log(totalVacationCost());

