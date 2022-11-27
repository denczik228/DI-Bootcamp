//Exercise 1 : HTML Form

// let submit = () => {
//     let values = "";
//     values += "Name = " + document.getElementById("name").value + "\n";
//     values += "Comment = " + document.getElementById("comments").value + "\n";
//     alert(values);
// };

//Data is visible to everyone in the URL
//----file:///Users.../HTTP,%20JSON,AJAX/Week5/Day1/XP/index.html?name=sdsd&comments=sdsds

//Exercise 2 : HTML Form #2

//with post Data is not displayed in the URL.The data sent to the server with POST is stored in the request body of the HTTP request.

//Exercise 3 : JSON Mario

const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}

let conver = JSON.stringify(marioGame);
console.log(conver);//Nested objects are supported and converted automatically by Json;

let converpretty = JSON.stringify(marioGame, null, 2);
console.log(converpretty);


