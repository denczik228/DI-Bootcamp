let favoriteFood = "hamburbers";
let favoriteMeal = "chciken with fries";
console.log(`I eat ${favoriteFood} maybe ${favoriteMeal} like every day`);

//----------------------------

//exercise 2 - part 1

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = 1;
console.log(myWatchedSeriesLength);

let myWatchedSeriesSentence = "money heist";

console.log(`I watched ${myWatchedSeriesLength} series :${myWatchedSeriesSentence}`);
//---------------------
//part 2
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

myWatchedSeries.push("Brassic");
console.log(myWatchedSeries);

myWatchedSeries.unshift("young Sheldon");
console.log(myWatchedSeries);

myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

console.log(myWatchedSeries[1][3]);
console.log(myWatchedSeries);
//-----------------
//exercise 3
let celsiusTemperature = 17;
console.log(`Convertation of °C in to the °F: ${celsiusTemperature / 5 * 9 + 32}`);

//exercise 4
let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: It will output 55, because a and b are numbers
// Actual: 55;

a = 2;

console.log(a + b) //second expression
// Prediction: replacing 2 instead a=34, solve 23
// Actual:23

console.log(c);
// Prediction: value is undefined, type is undefined
// Actual:undefined

console.log(3 + 4 + ' 5');
//Prediction: the addition of numbers 3 and 4 and adding text 5 to them
// Actual:7 5
//-----------------------

//exercise 5
typeof (15)
// Prediction:number
// Actual: number written without decimals

typeof (5.5)
// Prediction:number
// Actual:written with decimals

typeof (NaN)
// Prediction:a value representing Not-A-Number
// Actual: number/A boolean(true if the value is Number.NaN, otherwise false)

typeof ("hello")
// Prediction:text
// Actual:string

typeof (true)
// Prediction: conditional operator that comparing
// Actual:a boolean

typeof (1 != 2)
// Prediction: comparing numbers that not equal
// Actual: a boolean

"hamburger" + "s"
// Prediction:addition of two words
// Actual:string

"hamburgers" - "s"
// Prediction: "-" mathematics operator that allow to converte all values to numbers 
// Actual:number

"1" + "3"
// Prediction:text definition 13
// Actual:string

"1" - "3"
// Prediction: mathematical operator, so it allows to subtract the result
// Actual:number

"johnny" + 5
// Prediction:all of values converts to text
// Actual:string

"johnny" - 5
// Prediction:name will be convert to number and perceived like a number
// Actual:number

99 * "hello"
// Prediction: multiple operator allow to convert sentence to numbers
// Actual:number

1 != 1
// Prediction: comparing not equal
// Actual:boolean

1 == "1"
// Prediction: comparing equal to value that is true in this condition
// Actual:boolean

1 === "1"
// Prediction: comparing equal value and equal type in this comparing situation its not equal by type
// Actual:boolean

//---------------------------
//exercise 6
console.log(5 + "34");
// Prediction: values converts to text that will be write together
// Actual:534

console.log(5 - "4");
// Prediction:becouse of "-" 4 will be convert to number and perceived like a number
// Actual:1

console.log(10 % 5);
// Prediction: Modulus - divide 10 on 5 get 2.0 take .0 * on divider(5) 
// Actual:0

console.log(5 % 10);
// Prediction:Modulus - divide 5 on 10 get 0.5 take .5 * on divider(10)
// Actual:5

console.log("Java" + "Script");
// Prediction:text
// Actual:JavaScript

console.log(" " + " ");
// Prediction:empty text
// Actual:nothing

console.log(" " + 0);
// Prediction:addition of nothing like text and number 0
// Actual:0

console.log(true + true);
// Prediction:condition true has a value 1 the addition of it gives multipluying
// Actual:2

console.log(true + false);
// Prediction:addition of two values 1 and 0
// Actual:1

console.log(false + true);
// Prediction: addition of two values 1 and 0
// Actual:1

console.log(false - true);
// Prediction:subtraction of two conditions they values
// Actual:-1

console.log(!true);
// Prediction:condition of comparing that not a true
// Actual:false

console.log(3 - 4);
// Prediction:subtraction of two numbers
// Actual:-1

console.log("Bob" - "bill");
// Prediction: subtraction of two numbers becouse of math operator -
// Actual:NaN 