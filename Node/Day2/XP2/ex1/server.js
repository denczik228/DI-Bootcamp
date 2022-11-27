const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.send(user);
}).listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use('/', express.static(__dirname + '/public'))