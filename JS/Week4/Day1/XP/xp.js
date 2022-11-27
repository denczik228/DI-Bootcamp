//Exercise 1: Scopes

// #1
// function funcOne() {
//     const a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console: a will be retrieve to 3 becouse a its a global variable in this scope
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? - we will have a type error becouse we cant change a value of const variable

//#2
//  const a = 0;
//  function funcTwo() {
//      a = 5;
//  }

//  function funcThree() {
//     alert(`inside the funcThree function ${a}`);
//  }

// console.log(funcThree(), funcTwo(), funcThree())
// #2.1 - run in the console:
// funcThree() - it will be display our alert with a=0;
// funcTwo()- it will be undifiend becouse we dont return enything;
// funcThree()- we will have alert with a=5 becouse in funcTwo we redeclared our variable a;

// #2.2 What will happen if the variable is declared 
// with const instead of let ?

//funcThree - a will be =0 becouse of value of const;
//funcTwo - it will be error of type becouse we cant redeclaring const


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// //3.1 - run in the console:
// funcFour()
// funcFive()
//it will show a window alert with sentence including value of window.a - "hello",

//#4
// let a = 1;
// function funcSix() {
//     const a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
//funcSix() //- answer will be sentence with included value - "text" because variable a we have in a scope of function;

// #4.2 What will happen if the variable is declared 
// with const instead of let ? //- the same becouse we in the scope of function

//#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console - if condition is true we will have alert that included a like 5 because varibale inside our block of condition, and if condition is false we will have a alert with sentence that include our global variable a=2;
// #5.2 What will happen if the variable is declared 
// with const instead of let ?// nothing change the same sentences that before we got

//Exercise 2: Ternary Operator

// function winBattle() {
//     return true;
// }

const arrowF = () => true;

const experiencepoints = () => true ? experiencepoints === 10 : experiencepoints === 1;
console.log(experiencepoints(5));

//Exercise 3 : Is It A String ?

const isString = (a) => typeof (a) === "string" ? true : false;
console.log(isString(`hi`));
console.log(isString([1, 2, 4, 0]));

//Exercise 4 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach(function (element, index) {
    console.log(`${index + 1}# choise is ${element}`);
});

const check = colors.some((element) => element === "Violet" ? console.log("Yeah") : console.log("No..."));

//Exercise 5 : Colors #2

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["th", "st", "nd", "rd"], x;

for (let i = 1; i <= color.length; i++) {
    if (i < 4) { x = i }
    else { x = 0 }
    console.log(`${i}${ordinal[x]} choice is ${color[i - 1]}`)
}

//Exercise 6: Bank Details

let bankAmount;
const amountVat = 0.17;
let sum1 = 0;
let sum = 0;
const details = [200, -100, 146, 167, -2900];

for (i = 0; i < details.length; i++) {
    if (details[i] < 0) {
        sum1 += details[i];
        console.log(sum1);

    } else {
        sum += details[i];
        console.log(sum);
    }
    bankAmount = sum1 + sum;
    console.log(bankAmount);
    bankAmount = bankAmount - bankAmount * amountVat;
}
console.log(bankAmount);