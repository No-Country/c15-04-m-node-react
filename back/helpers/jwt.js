const jwt = require('jsonwebtoken')
require('colors')

const genToken = (id = '') => {
    return new Promise((res, rej) => {
        jwt.sign( { id }, process.env.TOKEN_USER, { expiresIn: '30m' }, 
        (err, result) => {
            if(err)  {
                console.log('ERROR AL GENERAR TOKEN!'.red, err)
                rej('Error al generar el token!', err.message)
            } else res(result)
        })
    })
}

module.exports = genToken