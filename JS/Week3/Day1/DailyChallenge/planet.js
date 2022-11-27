const planets = [
    {
        name: "earth",
        color: "blue",
        moons: 1,
    },
    {
        name: "neptune",
        color: "red",
        moons: 2,
    },
    {
        name: "jupiter",
        color: "yellow",
        moons: 3,
    }];

// //for i
// for (let i = 0; i < planets.length; i++){
//     console.log(`the #${i + 1} planet is ${planets[i]}`);
// }

// //without for
// for (const planet of planets) {
//     console.log(`the planet is ${planet}`);
// }

function addPlanet() {
    const sectionElement = document.querySelector("section");
    for (const item of planets) {
        const divPlanet = document.createElement("div");
        divPlanet.classList.add("planet");
        divPlanet
        sectionElement.appendChild(divPlanet);
        //create a moons
        const numberMoons = item.moons;
        //loop dep on the nb of moons
    }
}
addPlanet();