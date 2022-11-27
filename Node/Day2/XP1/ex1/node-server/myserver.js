const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>this is my 1st resp</h1>');
    res.write('<h1>this is my 2st resp</h1>');
    res.write('<p>this is my 3st resp</p>');
    res.end();
}).listen(3000, () => {
    console.log('server 3000 was runned')
})