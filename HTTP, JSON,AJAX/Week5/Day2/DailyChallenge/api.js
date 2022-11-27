const button = document.querySelector("button");
button.addEventListener("click", getData)

//1 creat an obj
const api = new XMLHttpRequest();

//2-3 init for req and sending it



function getData() {

    let inp = document.querySelector("input").value;
    console.log(inp);
    const fstp = `https://api.giphy.com/v1/gifs/random/tag=`;
    const scdp = `&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    let sen = `${fstp + inp + scdp}`;
    console.log(sen);

    api.open("get", `${fstp + inp + scdp}`);
    api.responseType = "json";
    api.send();
}

//4 responce methods
api.onload = function () {
    if (api.status === 200) {
        console.log("go");
        api.response.data.images.original.url
        const div = document.getElementById("jsonstring");
        div.append(api.response.data.images.original.url);
        console.log(api.response.data.images.original.url);

        const del = document.createElement("button");
        del.innerText = 'delete';
        div.append(del);
        del.addEventListener("click", () => {
            del.parentNode.remove();
        });
        const res = document.createElement("button");
        res.innerText = `reset`;
        const form = document.querySelector("form");
        const input = document.querySelector("input").value;
        form.append(res);
        res.addEventListener("click", () => {
            input = "";
        });

    } else {
        console.log("err")
    }
}