const express = require('express')
const app = express()
const urlencodedParser = express.urlencoded({ extended: false });

app.listen(3000, () => {
    console.log(`running on 3000`)
})

app.set('view engine', 'ejs')

app.get('/head', function (req, res) {
    let forEjs = listOf;
    res.render('head', {
        forEjs
    });
});

app.use('/', express.static('pub'))

let listOf = [];

app.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    listOf.push(req.body) 
    console.log(listOf);
})