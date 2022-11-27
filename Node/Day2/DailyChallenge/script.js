const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('running on 8000')
});

const myhobby = [
    { id: 1, name: "travelling" },
    { id: 2, name: "downhill" },
    { id: 3, name: "to learn new languages" }
]

app.get('/aboutMe/:hobby', (req, res) => {
    // console.log(req.params)
    const { hobby } = req.params;
    const hob = myhobby.find(item => {
        return item.id == hobby
    })
    if (!hobby) {
        return res.status(404).json({ msg: 'hobby not found' })
    }
    res.json(hob);
})

app.use('/pic', express.static(__dirname + '/public'));

//last part
const bodyParser = require("body-parser")

app.use('/form', express.static(__dirname + '/pub'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/formData', (req, res) => {
    console.log(req.body)
    res.send('Here your email and mes: ' + req.body.email + ' ' + req.body.message)
}).listen(3000, () => console.log('Form app listening on port 3000!'));





