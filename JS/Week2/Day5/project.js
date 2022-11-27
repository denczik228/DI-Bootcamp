

function playTheGame() {
    let ok = confirm('if you would like to play the game?');
    if (ok) {
        let num = Number(prompt("enter a number between 0 and 10"));
        if (isNaN(num) || num === '') {
            alert("Sorry Not a number, Goodbye");
        } else if (num > 10 || num < 0) {
            alert("Sorry its not a good number, Goodbye");
        } else if (num >= 0 && num <= 10) {
            let computerNumber = Math.floor(Math.random() * 11);
            console.log("ComputerNumber: ", computerNumber);
            compareNumbers(num, computerNumber);
        }
    } else {
        console.log('No problem, Bye');
    }
}
// console.log(forNum());
//Second Part-------------------

function compareNumbers(v1, v2) {

    let i = 0;

    while (i < 3) {
        if (v1 === v2) {
            console.log("test")
            alert("WINNER");
            return;
        } else if ((v1 > v2) && (i != 2)) {
            alert("v1 is bigger than v2");
            v1 = Number(prompt("Your number is bigger then the computers, guess again"));
        } else if ((v1 < v2) && (i != 2)) {
            alert("v1 is smaller than v2");
            v1 = Number(prompt("Your number is smaller then the computers, guess again"));
        }
        i++;
        console.log("Попытка номер: ", i);
    }
    if (i == 3) {
        alert("enough!");
    }

}