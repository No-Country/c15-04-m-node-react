const { check } = require('express-validator')
const validarCampos = require('../../middleware/validarCampos')

const ECFP_VALIDATION = [
    check('kwh')
        .notEmpty().withMessage('Este es un campo requerido.')
        .isNumeric().withMessage('Este campo admite solamente números.')
        .custom(val => {
        	if (Number(val) < 0) {
      			throw new Error('Este campo no admite cantidades negativas.');
    		}
    		return true;
        }),
    check('pais')
        .notEmpty().withMessage('Este es un campo requerido.'),
    validarCampos
]

module.exports = ECFP_VALIDATION