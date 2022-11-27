const b = 5;

module.exports = b;


//part2

let http = require("http");

const server = http.createServer((req, res) => {
    const sum = require("./main.js")
    console.log('I am listening....');
    console.log(req.url, req.method);

    res.setHeader("Content-Type", "text/html");

    res.write('<p>My Module is: </p>');
    res.write(`${sum}`);
    res.write('<h1>Hi there at the frontend</h1>');

    res.end()
});

server.listen(3000, 'localhost', (error) => {
    error ? console.log(error) : console.log('listening port 3000');
});

//part3

const server2 = http.createServer((req, res) => {
    const d = require("./main.js");
    console.log('module');
    console.log(req.url, req.method);

    res.setHeader("Content-Type", "text/html");

    res.write('<p>The date and time are currently: </p>');
    res.write(`${d}`);

    res.end()
});

server2.listen(8000, 'localhost', (error) => {
    error ? console.log(error) : console.log('listening port 8000');
});



