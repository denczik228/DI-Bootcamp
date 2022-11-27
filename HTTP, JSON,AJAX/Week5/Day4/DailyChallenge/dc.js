//1st Challenge

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values);
}).catch(error => console.log(error, "rejecting"));

//The Promise.all() method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

//2nd Challenge
const form = document.querySelector("form");
form.addEventListener("submit", getSub);

async function getSub(e) {
    e.preventDefault();

    async function getCities() {

        const lat1 = document.getElementById("latcity1").valae;
        const lat2 = document.getElementById("latcity2").value;
        const long1 = document.getElementById("longtitude1").value;
        const long2 = document.getElementById("longtitude2").value;

        const resF = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${long1}`);
        console.log(resF);
        const resS = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${long2}`);
        console.log(resS);
        if (resF.status !== 200 && resS.status !== 200) {
            throw new Error("wrong location")
        } else {
            const co = await resF.json();
            console.log(co); //json method returns a promise
            const ce = await resS.json();
            console.log(ce);
            const sunRf = co.results.sunrise;
            console.log(sunRf);
            const sunRs = ce.results.sunrise;
            console.log(sunRs);
            return [sunRf, sunRs]; //return a result so the asyn function has a result for the promise
        }
    }
    Promise.all([getCities()]).then(values => { console.log(values) });
}


