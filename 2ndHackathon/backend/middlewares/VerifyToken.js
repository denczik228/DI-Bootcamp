import jwt from 'jsonwebtoken'
import { db } from "../db.js"

export const VerifyToken = (req, res, next) => {
    const access_token = req.cookies.accesstoken || req.headers['x-access-token']

    if (!access_token) {
        return res.status(401).json({ mas: 'permition denied' })
    }
    jwt.verify(access_token, 'jwtkey', async (err, decode) => {
        if (err) return res.status(403).json({ msg: 'verify token failed' })
        const email = decode.email
        try {
            const user = await db('users').select('username', 'email', 'password').where({ email: decode.email })
            if (user.length == 0) {
                return res.status(403).json({ msg: 'verify user failed' })
            }
            next()
        } catch (e) {
            res.status(403).json({ msg: 'verify user failed' })
        }
    })
}