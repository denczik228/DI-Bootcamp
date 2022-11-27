//Write a JavaScript program that recreates the pattern below.

const star = "*";
let pattern = "";

//first method
//for (let i = 1; i <= 6; i++){
//pattern = pattern + star;
//console.log(pattern);
//}

//second method
for (let i = 1; i <= 6; i++) {
    pattern = star.repeat(i);
    console.log(pattern);
}

//nested loops

const colors = ["blue", "lightred", "yellow"];

for (let j = 0; j < colors.length; j++){
    console.log(colors[j])// color
    //need to loop right the string
    for (let l = 0; l <
        colors[l].length; l++){
        console.log(colors[j][l]);
    }
}

