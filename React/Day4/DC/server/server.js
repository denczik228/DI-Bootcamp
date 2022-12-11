const express = require('express')
const app = express()
const cors = require("cors")
const port = 3001

//use cors to allow cross origin resource sharing
app.use(
    cors()
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/hello', (req, res) => {
    res.json('Hello From Express')
})

app.post("/api/word", (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3001, () => {
    console.log(`server started on port ${port}`)
})