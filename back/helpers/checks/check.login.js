const { check } = require('express-validator')
const validarCampos = require('../../middleware/validarCampos')

const POST_LOGIN = [
    check('correo')
    .notEmpty().withMessage('Correo no debe estar vacío')
    .isEmail().withMessage('No es un correo válido el proporcionado'),
    check('password', 'No se ha proporcionado la contraseña').notEmpty(),
    validarCampos
]

module.exports = POST_LOGIN