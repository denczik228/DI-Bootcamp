const button = document.getElementById("lib-button");
button.addEventListener("click", appInf);

function appInf(event) {
    event.preventDefault();
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;
    let verb = document.getElementById("verb").value;
    let place = document.getElementById("place").value;

    if (noun == "" || adjective == "" || person == "" || verb == "" || place == "") return
    console.log("fill out");
    story(noun, adjective, person, verb, place);
}

function story(noun, adjective, person, verb, place) {
    const forstory = document.getElementById("story");
    forstory.innerHTML = `There lived an emperor - ${noun} who fancied wearing ${adjective} new clothes every day in his ${place}. He ${verb} his outfit many times a day and paid utmost attention to his grooming while neglecting his duties as ${person}`
}