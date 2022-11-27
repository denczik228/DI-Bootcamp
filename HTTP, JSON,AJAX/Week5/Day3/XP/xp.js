//Exercise 1 : Comparison

function compareToTen(num) {
    const prom = new Promise((resolve, reject) => {
        if (num <= 10 && num >= 0) {
            resolve(num)
        }
        else {
            reject(num)
        }
    })
        .then(result => console.log("we good", result));
    prom.catch(error => console.log("num should be less 10", error));
}
compareToTen(11)

//Exercise 2 : Promises

Promise.resolve("Success").then(function (value) {
    setTimeout(() => { console.log(value) }, 4000)  // "Success"
}, function (value) { console.log("Ooops something went wrong") });

//Exercise 3 : Resolve & Reject

Promise.resolve(3).then(function (value) { console.log(value) });
Promise.reject("Boo!").catch(function (value) { console.log(value) });