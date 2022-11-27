function makeAllCaps(words) {
    const prom = new Promise((resolve, reject) => {
        if (words.every((element) => typeof (element) === `string`)) {
            const arr = words.map(el => el.toUpperCase());
            resolve(arr);
        } else {
            reject("only the string elements");
        }
    })
    return prom
}

function sortWords(words) {
    const itlen = new Promise((resolve, reject) => {
        if (words.length > 4) {
            words.sort();
            resolve(words)
        } else {
            reject(`less then 4 items in the list`)
        }
    })
    return itlen
}


makeAllCaps(["mango", "banana", "pear"])
    .then((result) => console.log(result));

makeAllCaps(["mango", "banana", "pear", "lime", "strowberry"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result));



