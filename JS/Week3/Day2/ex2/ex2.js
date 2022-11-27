//Retrieve the form and console.log it.
console.log(document.forms[0]);

//Retrieve the inputs by their id and console.log them.

console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));
console.log(document.getElementById("submit"));

//Retrieve the inputs by their name attribute and console.log them.

console.log(document.getElementsByName("fname"));
console.log(document.getElementsByName("submit"));
console.log(document.getElementsByName("lname"));

//When the user submits the form (ie. submit event listener)
//use event.preventDefault(), why ?
//get the values of the input tags,
//make sure that they are not empty,
//create an li per input value,
//then append them to a the < ul class="usersAnswer" ></ >, below the form.

const s = document.querySelector("form");
console.log(s);
s.addEventListener("submit", retData);

function retData(event) {
    event.preventDefault();
    console.log(event);
    let a = document.getElementById("fname").value;
    console.log(a);
    let b = document.getElementById("lname").value;
    console.log(a, b);
    if (a !== "" && b !== "") {
        const l1 = document.createElement("li");
        l1.textContent = `first name of the user ${a}`;
        const l2 = document.createElement("li");
        l2.textContent = `last name of the user ${b}`;

        l1.append(document.getElementsByClassName("usersAnswer"));
        l2.append(document.getElementsByClassName("usersAnswer"));
        console.log(l1, l2);
    } else {
        alert("put the all information")
    }
}
