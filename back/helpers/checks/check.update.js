const { check } = require('express-validator')
const validarCampos = require('../../middleware/validarCampos')
const validarJWT = require('../../middleware/validarJWT')

const POST_UPDATE = [
  validarJWT,
  check('nombre')
    .optional(true)
    .isLength({ min: 6 }).withMessage('nombre debe tener al menos 6 caracteres'),
  check('correo')
    .optional(true)
    .isEmail().withMessage('El correo no es un formato válido'),
  check('password')
    .optional(true)
    .isLength({ min: 6 }).withMessage('Debe tener al menos 6 dígitos'),
  validarCampos
]

module.exports = POST_UPDATE