//You should display:x is the biggest number

let x = 5;
let y = 2;
if (x > y) {
    console.log("x bigger than y");
}
else if (x = y) {
    console.log("x eqeal to y")
}

else {
    console.log("y the bigger than x")
}
//-------------
//exercise 2 chichuahua
let newDog = "Chihuahua";

newDog.length = "Chihuahua";
console.log(newDog.length);

console.log(newDog.toUpperCase(), newDog.toLowerCase());

if (newDog = "Chihuahua") {
    console.log(`I love Chihuahuas, its my favorite dog breed`);
} else {
    console.log(`I dont care, I prefer cats`)
}
//-------------
//Exercise 3: Even Or Odd
let numberUser = prompt("Please write your number x =");
if (numberUser % 2 == 0) {
    alert(`x is an even number`);
} else {
    alert(`x is an odd number`);
}
//---------
//Exercise 4:group chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//If there is no users (the users array is empty), console.log “no one is online”.
if (users.length == 0) {
    console.log(`no one is here`);
}
//If there is 1 user, console.log “<name_user> is online”.
else if (users.length == 1) {
    console.log(`${users[0]} is online now`);
}
//If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
else if (users.length == 2) {
    console.log(`${users[0]},${users[1]}  are 2 users online`);
}
//If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
else if (users.length > 2) {
    console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`);
}
