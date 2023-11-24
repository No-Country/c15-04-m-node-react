const { check } = require('express-validator')
const validarCampos = require('../../middleware/validarCampos')

const POST_LOGIN = [
    check('nombre')
        .notEmpty().withMessage('Nombre de usuario es requerido')
        .isLength({ min: 6 }).withMessage('nombre debe tener al menos 6 caracteres'),
    check('correo')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('correo', 'El correo no es un formato válido'),
    check('password')
        .notEmpty().withMessage('Contraseña es obligatoria')
        .isLength({ min: 6 }).withMessage('Debe tener al menos 6 dígitos'),
    validarCampos
]

module.exports = POST_LOGIN