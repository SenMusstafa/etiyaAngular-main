const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretKey"; // ortam değişkenlerinden almak daha iyi 

//database password bilgisi ortam değişkenlerinden geliyor
const dbPassword = process.env.dbPassword

const dbUrl = `mongodb+srv://egitimuser:${dbPassword}@egitimcluster.nbs9npq.mongodb.net/sinif?retryWrites=true&w=majority`;

const Personel = require('../models/personel')

mongoose.connect(dbUrl).then(
    (val) => {
        console.log('Connected to MongoDB')
    }
)

router.get('/', (req, res) => {
    res.send('Hello from API')
})

router.get('/personel', verifyToken, (req, res) => {
    Personel.find({}).then(personeller =>
        res.send(personeller)
    ).catch(err => {
        console.log(err)
        res.status(500).send("Hata oluştu")
    });
})

router.post('/giris', (req, res) => {
    const reqBody = req.body;
    const password = req.body.password;

    Personel.findOne({ email: reqBody.email })
        .then((p) => {
            if (p != undefined) {
                // email doğru. Personel bulundu
                if (p.password === password) {
                    // password doğru.
                    res.send({ token: tokenUret(p) });
                } else {
                    // email doğru, password yanlış
                    res.status(404).send();
                }
            } else {
                res.status(404).send();
            }
        })
        .catch((err) => {
            console.log(err) 
            res.status(500).send("Hata oluştu")
        })
})
function tokenUret(p) {
    const payload = { "sub": "login", "aud": p.email }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "10 minute" })
    return token;
}
router.post('/register', (req, res) => {
    const reqBody = req.body;
    let personel = new Personel({ email: reqBody.email, password: reqBody.password });
    personel.save().then(
        (p) => {
            console.log(p);
            res.status(200).send(p)
        }
    ).catch(
        (err) => {
            console.error(err)
            res.status(500).send("Hata oluştu")
        }
    )
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Giriş yapılmamış")
    }
    // authorization header'ı gönderilmiş.
    let token = req.headers.authorization.split(' ')[1]
    if (token == null) {
        return res.status(401).send("Giriş yapılmamış")
    }
    let payload = jwt.verify(token, SECRET_KEY)
    if (!payload) {
        return res.status(401).send("Giriş yapılmamış")
    }
    req.email = payload.aud;
    next()
}
module.exports = router;