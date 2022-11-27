//Exercise 1 : Find The Sum

const s = (a, b) => `The sum of a and b will be: ${a + b}`;
s(4, 5);
console.log(s(4, 5));
//---------------------------------

//Exercise 2 : Kg And Grams
//The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined

//declaration
function conver() {
    let kg = 5;
    return kg * 1000;
}
conver();
console.log(`declaration of function: ${conver()}`)
//expression
const weight = (kilo) => `convertaison kilos to grams: ${kilo * 1000}`;
weight(3);
console.log(`expression function: ${weight(3)}`);
//-------------------------------

//Exercise 3 : Fortune Teller

(function (numberofchildren, partnersname, geographiclocation, jobtitle) {
    console.log(`You will be a ${jobtitle} in ${geographiclocation}, and married to ${partnersname} with ${numberofchildren} kids`)
})(3, "Sara", "Canada", "web-developer");
//------------------------

//Exercise 4 : Welcome

(function (name) {
    const div = document.createElement("div");
    div.innerText = name;
    const navbar = document.querySelector(".navbar");
    navbar.appendChild(div);
    const img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd64LO0LAdmTcbobCic-aQu7G51ACrlq7GA&usqp=CAU/50";
    navbar.appendChild(img);
})("John");

//Exercise 5 : Juice Bar

//ver1
function makeJuice(size) {
    if (size === "small" || size === "medium" || size === "large") {
        function addIngredients(a, b, c) {
            console.log(`The client wants a ${size} juice, containing ${a}, ${b}, ${c}`);
        }
        addIngredients("apple", "icecream", "pineapple");
    }
    else {
        console.log(`choose a normal size of drink`);
    }
}
makeJuice("large");
//with array

function mJuice(size) {
    let ingredients = [];

    function addIngredients(a, b, c) {
        ingredients.push(a, b, c);
    }
    addIngredients("apple", "icecream", "pineapple");
    addIngredients("orange", "icecubes", "strawberry");

    console.log(ingredients);

    function displayJuice(ingredients) {
        const part1 = `The client wants a ${size} juice, containing: `
        let part2 = "";
        ingredients.forEach(element => {
            part2 += element + ","});
        const sent = part1 + part2;
        console.log(sent);
    }
    displayJuice(ingredients);
    displayJuice(ingredients);
}
mJuice("large");


