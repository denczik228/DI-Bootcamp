//Exercise 1: Conversion
// async function getObj() {
//     const results = await fetch("https://www.swapi.tech/api/starships/9/");
//     console.log(results)
//     const obj = await results.json(); //json method returns a promise
//     console.log(obj);
//     return obj//return a result so the asyn function has a result for the promise
// }
// getObj();

//Exercise 2: Analyze
//Analyse the code provided above before executing it - what will be the outcome?

//first of all we calling an async function and we displaying message "calling", after that with variable result doing promise of function resolveAft2Sec,
//in this function we doing a new promise function with resolve of message("resolved") that will be displayd after 2 sec
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
