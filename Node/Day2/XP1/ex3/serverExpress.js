const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>server of den</h1>');
    res.end()
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});