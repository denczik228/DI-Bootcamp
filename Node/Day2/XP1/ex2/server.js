const http = require('http');

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((req, res) => {
    //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/user') {
        // 1. inform the client that we send JSON response in the header with the appropriate content type.
        res.setHeader("Content-Type", "application/json");
        //2. 
        res.writeHead(200);
        res.end(JSON.stringify({ user }));
    } else {
        res.end("Another page");
    }
}).listen(8080, () => {
    console.log('server was runned')
});