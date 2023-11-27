const jwt = require('jsonwebtoken')
require('colors')

const genToken = (uid = '') => {
    return new Promise((res, rej) => {
        const payload = { uid }
        jwt.sign(payload, process.env.TOKEN_USER, { expiresIn: '30m' }, 
        (err, result) => {
            if(err)  {
                console.log('ERROR AL GENERAR TOKEN!'.red, err)
                rej('No se pudo generar el token')
            } else res(result)
        })
    })
}

module.exports = genToken