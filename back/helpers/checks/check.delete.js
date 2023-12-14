const validarCampos = require('../../middleware/validarCampos')
const validarJWT = require('../../middleware/validarJWT')

const POST_DELETE = [
    validarJWT,
    validarCampos
]

module.exports = POST_DELETE