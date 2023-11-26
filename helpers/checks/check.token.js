const validarCampos = require('../../middleware/validarCampos')
const validarJWT = require('../../middleware/validarJWT')

const TOKEN = [
    validarJWT,
    validarCampos
]

module.exports = TOKEN