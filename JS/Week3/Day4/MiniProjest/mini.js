//parametrs of section slidebar:

let color_col = 3;
let color_row = 8;
let color_count = color_col * color_row;

//actions of mouse manipulating for events
let color = null;
let mousedown = false;
let main_divs = [];

//function for randomColors with return of color
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let j = 0; j < 6; j++){
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

//loop for assigning colors to a quantity.creation of divs
let d = document.getElementById("colorBar");

for (let i = 0; i < color_count; i++) {
    let di = document.createElement("div");
    di.style.backgroundColor = randomColor();
    d.appendChild(di); 
    //recives from dives colors
    di.addEventListener('click', function (event) {
    color = event.target.style.backgroundColor;
    });
}

//parametrs of main grid area
let main_col = 60;
let main_rows = 50;
let main_count = main_col * main_rows;

let main = document.getElementById("main");

//creation of grid thanks divs
for (let j = 0; j < main_count; j++) {
    let div = document.createElement("div");

    //in grid area checking if button of mouse was pressed and color not a 0; for one fillup click 
    div.addEventListener('mousedown', function (event) {
        if (color != null) {
        event.target.style.backgroundColor = color;
        }
    })
    //if button was pressed we start drawing
    div.addEventListener('mouseover', function (event) {
        if (color != null && mousedown) {
            event.target.style.backgroundColor = color;
        }
    })
    main_divs.push(div)
    main.appendChild(div)
}

let body = document.getElementsByTagName('body')[0];
let button = document.querySelector('#Clear');

body.addEventListener('mousedown', function (event) {
    mousedown = true
})

body.addEventListener('mouseup', function (event) {
    mousedown = false
})

button.addEventListener('click', function (event) {
    for (j of main_divs) {
        j.style.backgroundColor = "white"
    }
})

