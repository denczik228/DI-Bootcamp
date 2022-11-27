const click = document.querySelector("button");
click.addEventListener("click", getData);

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

function getData(e) {
    e.preventDefault();

    //Creation of random number for execution of persons
    const max = 82;
    let random = Math.floor((Math.random() * max) + 1);
    
    //function that updating info when button was clicked
    updating();

    // 2. Configure it: GET-request for the URL 

    xhr.open('GET', `https://swapi.dev/api/people/${random}`);

    xhr.responseType = 'json';
    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function () {
        if (xhr.status != 200) { // analyze HTTP status of the response
            emptyFields();
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found

        } else {
            infoOfPersons(xhr.response)

        }
    }
    xhr.onerror = function () {
        emptyFields();
        alert("Request failed")
    }
}

//Dom
let na = document.getElementById("name");
let he = document.getElementById("height");
let ge = document.getElementById("gender");
let birth_year = document.getElementById("birth-year");

function infoOfPersons(resp) {

    let url = new URL(resp.homeworld);
    url.protocol = 'https:'
    xhr.open('GET', url.href);

    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Error in the data receiving search of HomeLand');
        }
        else {
            updateHW(xhr.response)
        }
    }

    xhr.onerror = function () {
        console.log('Error in function HL');
    };

    na.innerText = `Name: ${resp.name}`;
    he.innerText = `Height: ${resp.height}`;
    ge.innerText = `Gender: ${resp.gender}`;
    birth_year.innerText = `Birth Year: ${resp.birth_year}`;

    console.log(resp.name);
    console.log(resp.height);
    console.log(resp.gender);
    console.log(resp.birth_year);
}

let homeWorld = document.getElementById('home-world');

function updateHW(hw) {
    homeWorld.innerText = `Home World: ${hw.name}`;
    console.log(`${hw.name}`);
}

function updating() {
    na.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i> <p>Checking of...</p>';
    he.innerText = '';
    ge.innerText = '';
    birth_year.innerText = '';
    homeWorld.innerText = '';
}

function emptyFields() {
    na.innerText = 'Person unavaliable!Search next';
    he.innerText = '';
    ge.innerText = '';
    birth_year.innerText = '';
    homeWorld.innerText = '';
}
