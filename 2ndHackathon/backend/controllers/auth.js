import { db } from "../db.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'

export const register = async (req, res) => {
    //check exist user
    console.log('register=>', req.body)
    db('users').select('username', 'email', 'password')
        .where({ username: req.body.username, email: req.body.email })
        .then((data) => {
            if (data.length === 0) {
                //Hashing a password and creating a user
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                req.body.password = hash;
                console.log('register 2=>', req.body)
                db('users')
                    .insert(req.body)
                    .returning('*')
                    .then((data) => {
                        return res.status(200).json({ data: data, msg: 'Successfully registered' })
                    });
            }
            else {
                res.json({ msg: 'already exist' })
            }
        })
        .catch(err => {
            if (err) return res.json(err)
        })
}

export const login = async (req, res) => {
    console.log('login=>', req.body)
    db("users")
        .select('username', 'password')
        .where({ username: req.body.username })
        .then((data) => {
            console.log(data);
            if (data.length === 0) {
                return res.status(404).json({ msg: `User not found!` });
            }

            const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
            console.log(isPasswordCorrect);
            if (!isPasswordCorrect) {
                return res.status(400).json({ msg: "Wrong username or password!" })
            }
            console.log('hi')
            const { password, ...other } = data[0];

            const token = jwt.sign({ id: data[0].id }, 'jwtkey');
            res.cookie('accesstoken', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 })
            console.log(token);
            res.status(200).json({ token: token })

        })
        .catch(err => {
            if (err) {
                return res.json({ msg: 'Cant access' });
            }
        })
}

//logout part with deleting token after session
export const logout = (req, res) => {
    const access_token = req.cookies.access_token;
    if (!access_token) return res.status(204).json({ msg: 'token was cleared' });
    res.clearCookie('accesstoken');
    res.status(200).json({ msg: 'has been cleared' });
}

//creation a second auth for safe data of users

export const token = (req, res) => {
    const access_token = req.cookies.access_token || req.headers['x-access-token'];

    const decode = jwt_decode(access_token)
    console.log(decode.id, decode.email)

    const token = jwt.sign({ id: decode.id, email: decode.email }, 'jwtkey');

    res.cookie('accesstoken', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 1000
    });

    res.status(200).json({ token: access_token })
}
