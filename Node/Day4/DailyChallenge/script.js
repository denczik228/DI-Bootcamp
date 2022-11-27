const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT || 8080, () => {
    console.log(`running on ${process.env.PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

const bcrypt = require('bcrypt');

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    let users = [];
    try {
        const f = fs.readFileSync('./users');
        users = JSON.parse(f.toString())
    } catch (e) { }

    if (!ifUserExistByUserName(users, req.body.username)) {
        return res.json({ username: `${req.body.username}`, msg: `does not exist` })
    }

    const userData = users.find(user => {
        return user.username == username;
    })

    console.log(userData);
    const match = bcrypt.compareSync(req.body.password, userData.password);

    if (!match) {
        return res.json({ msg: "wrong password" })
    }
    console.log(req.body)

    res.json({ msg: 'login succesfull' })
})

app.post('/register', (req, res) => {
    //res.json({ password: hash });
    let users = [];
    try {
        const f = fs.readFileSync('./users');
        users = JSON.parse(f.toString())
    } catch (e) { }

    if (isUserExist(users, req.body.email)) {
        return res.json({ msg: 'email exist' })
    }

    const salt = bcrypt.genSaltSync();
    console.log(salt);
    const hash = bcrypt.hashSync(req.body.password, salt);

    req.body.password = hash;
    users.push(req.body);

    fs.writeFile('./users', JSON.stringify(users), err => {
        if (err) {
            console.log(err);
        }
    })

    res.json({ user: `${req.body.username}`, msg: 'youve successfully registered' })
    console.log(users);
    //res.json(users);
})

const isUserExist = (arr, email) => {
    const filterUsers = arr.filter(user => {
        return user.email == email;
    })
    return (filterUsers.length > 0) ? true : false;
}

const ifUserExistByUserName = (arr, username) => {
    const filterUsers = arr.filter(user => {
        return user.username == username;
    })
    return (filterUsers.length > 0) ? true : false;
}

