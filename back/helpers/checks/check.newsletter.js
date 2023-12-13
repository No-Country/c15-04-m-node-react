const { check } = require('express-validator')
const validarCampos = require('../../middleware/validarCampos')

const POST_NEWSLETTER = [
  check('nombre')
    .notEmpty().withMessage('el nombre no debe estar vacío')
    .isLength({ min: 6 }).withMessage('el nombre debe tener al menos 6 caracteres'),
  check('correo')
    .notEmpty().withMessage('Correo no debe estar vacío')
    .isEmail().withMessage('No es un correo válido el proporcionado'),
  validarCampos
]

module.exports = POST_NEWSLETTER