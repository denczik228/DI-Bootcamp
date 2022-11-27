//Exercise 1 : Giphy API

const button = document.querySelector("button");
button.addEventListener("click", getData)
button.addEventListener("click", getDatam)

//1 creat an obj
const giphy = new XMLHttpRequest();

//2-3 init for req and sending it
function getData() {
    giphy.open("get", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    giphy.responseType = "json";
    giphy.send();
}

//4 responce methods
giphy.onload = function () {
    if (giphy.status === 200) {
        console.log("good")
        giphy.response
        console.log(giphy.response.data);
    } else {
        console.log("err")
    }
}

//Exercise 2 : Giphy API

//1 creat an obj
const gip = new XMLHttpRequest();

//2-3 init for req and sending it
function getDatam() {
    gip.open("get", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    gip.responseType = "json";
    gip.send();
}

//4 responce methods
gip.onload = function () {
    if (gip.status === 200) {
        console.log("good")
        const words = gip.response.data;
        console.log(words);
    } else {
        console.log("err")
    }
}

