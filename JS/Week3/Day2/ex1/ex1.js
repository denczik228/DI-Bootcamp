//Exercise 1 : Change The Article

//Using a DOM property, retrieve the h1 and console.log it.
const hH = document.querySelector("h1");
console.log(hH);

//Using DOM methods, remove the last paragraph in the <article> tag
const e = document.querySelectorAll("p");
// const d = e.lastChild;
// console.log(d);
// e.removeChild(d);
for (let i = 0; i < e.length; i++) {
    if (i == e.length - 1) {
        e[i].remove()
    }
}

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on
const fH = document.querySelector("h2");
console.log(fH);

fH.addEventListener("click", changeToRed);

function changeToRed() {
    fH.style.background = "red";
}

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const forH3 = document.querySelector("h3");

forH3.addEventListener("click", hide);
function hide() {
    forH3.style.display = "none";
}

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const forP = document.querySelector("button");
const bp = document.querySelectorAll("p");

forP.addEventListener("click", boldP);

function boldP() {
    for (let j = 0; j < bp.length; j++) {
        bp[j].style.fontWeight = "bold";
    }
}
