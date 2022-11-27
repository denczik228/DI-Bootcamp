const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
//---------------------------------
let usernames = [];
gameInfo.forEach(person => usernames.push(person.username + "!"));
console.log(usernames);
//----------------------------------
let winners = [];
gameInfo.forEach(element => {
    if (element.score > 5) {
        winners.push(element.username);
    }
});
console.log(winners);
//----------------------------------
let total = 0;
gameInfo.forEach(sum => {
    total += sum.score;
});
console.log(total);