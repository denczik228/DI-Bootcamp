//Exercise 2 : Users And Style

//Add a “light blue” background color and some padding to the < div >.
document.body.firstElementChild.style.backgroundColor = "#ADD8E6";
document.body.firstElementChild.style.padding = "10px";

//Do not display the <li> that contains the text node “John”.
let jh = document.body.children[1].firstElementChild;
console.log(jh);
jh.style.display = "none";

//Add a border to the <li> that contains the text node “Pete”.
let bP = document.body.children[1].lastElementChild;
bP.style.border = "dotted";

//Change the font size of the whole body.
document.body.style.fontSize = "14px";

//If the background color of the div is “light blue”, alert “Hello x and y”
const col = "#ADD8E6";
if (document.body.firstElementChild.style.backgroundColor === col) {
    const text = document.createTextNode(`Hello ${jh} and ${bP}`);
    alert(`$(text)`);
}