let a = document.getElementById("animate");

//elements parameters
let pos = 0;
const boxWide = 10;
const maxAreaWide = 350;
//interval

function myMove() {
    let inT = setInterval(forBox, 1);
    function forBox() {
        if (pos == maxAreaWide) {
            console.log(inT);
            clearInterval(inT)
        } else {
            pos++
            a.style.left = pos + "px";
        }
    }
}