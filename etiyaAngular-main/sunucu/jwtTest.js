const jwt = require('jsonwebtoken');

const payload = { "adi": "levent" }

const token = jwt.sign(payload, 'secretKey', {expiresIn: 2000})

// verilen milisaniye sonra çalışacak kodu tanımlıyoruz
setTimeout(() => {
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            console.log(err.name)
            console.log(err.message)
            console.log(err.expiredAt)
        } else {
            console.log(decoded.adi)
        }
    })
 }
, 1000) // 1000ms = 1 saniye


