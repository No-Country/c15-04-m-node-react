const { check } = require('express-validator')
const validarCampos = require('../../middleware/validarCampos')

const POST_NEWSLETTER = [
  check('correo')
    .notEmpty().withMessage('Correo no debe estar vacío')
    .isEmail().withMessage('No es un correo válido el proporcionado'),
  validarCampos
]

module.exports = POST_NEWSLETTER