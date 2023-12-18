const jwt = require('jsonwebtoken')
require('colors')

const emailJWT = (id = '', correo = '') => {
  return new Promise((res, rej) => {
    jwt.sign({ id, correo }, process.env.TOKEN_EMAIL, { expiresIn: '2d' },
      (err, result) => {
        if (err) {
          console.log('ERROR AL GENERAR TOKEN!'.red, err)
          rej('Error al generar el token!', err.message)
        } else res(result)
      })
  })
}

module.exports = emailJWT