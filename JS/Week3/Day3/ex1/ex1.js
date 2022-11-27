//ex1:Timer

//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will alert “Hello World”.
setTimeout(hi, 2000);

function hi() {
    alert("Hello world");
}

//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will add a new paragraph < p > Hello World</ > to the < div id = "container" >.
setTimeout(forP, 2000);
const a = document.getElementById("container");

function forP() {
    const b = document.createElement("p");
    b.textContent = "Hello world iam coming";

    a.appendChild(b);
    console.log(b);
}

//In your Javascript file, using setInterval, call a function every 2 seconds.
//The function will add a new paragraph < p > Hello World</ > to the < div id = "container" >.
//The interval will be cleared(ie.clearInterval), when the user will click on the button.

// const k = document.getElementById("clear");

// const t = k.addEventListener("click", pa3);

// let firstclick = true;
// let inter;
// function pa3() {

//     console.log(firstclick);
//     if (firstclick) {
//         firstclick = false;
//         inter = setInterval(function () {
//             const b = document.createElement("p");
//             b.textContent = "Hi bro";

//             a.appendChild(b);
//             console.log(b);
//         }, 2000);
//     } else {
//         console.log('else false clear');
//         clearInterval(inter);
//     }
// }

//Instead of clicking on the button, the interval will be cleared(ie.clearInterval) as soon as there will be 5 paragraphs inside the < div id = "container" >.

const ka = document.getElementById("container");
let interval = setInterval(pa3, 2000);
let num = 1;

function pa3() {
    if (num < 6) {

        const b = document.createElement("p");
        b.textContent = "2d version";
        ka.appendChild(b);

    } else {
        console.log('else false clear');
        clearInterval(interval);
    }
    num++;
}
