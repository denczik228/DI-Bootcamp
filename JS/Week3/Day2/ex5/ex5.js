//Exercise 5 : Event Listeners

// Add many events listeners to one element on your webpage.Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the
// font size… and more.
const h1 = document.querySelector("h1");
h1.addEventListener("click", first);
h1.addEventListener("mouseover", second);
h1.addEventListener("mouseout", third);
h1.addEventListener("dbclick", four);

function first() {
    h1.style.color = "white";
}
function second() {
    h1.style.background = "red";
}
function third() {
    h1.style.fontSize = "12px";
}
function four() {
    h1.style.position = "sticky";
}
