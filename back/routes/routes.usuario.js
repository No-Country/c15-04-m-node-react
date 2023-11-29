const { Router } = require('express')
const { 
    signUp,
    logIn,
    update, 
    eliminar
} = require('../controller/controller.usuario')
const { getElectricityCFP } = require('../controller/controller.carbonfp')
const { POST_LOGIN, POST_SIGN_UP, TOKEN, ECFP_VALIDATION } = require('../helpers/checks')
const router = Router()

router.post('/sign-up', POST_SIGN_UP, signUp)
router.post('/login', POST_LOGIN, logIn)
router.put('/actualizar', TOKEN, update)
router.delete('/eliminar', TOKEN, eliminar)
router.post('/test', ECFP_VALIDATION, getElectricityCFP)

module.exports = router