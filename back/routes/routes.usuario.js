const { Router } = require('express')
const getAvatars = require('../controller/controller.avatar')
const router = Router()

const {
    auth,
    eliminar,
    emailVerification,
    logIn,
    signUp,
    update,
    userData
} = require('../controller/controller.usuario')
const {
    carbonOffsetCalculator,
    electricityCalculator,
    gasCalculator,
    transportCalculator
} = require('../controller/controller.carbonfp')
const {
    ECFP_VALIDATION,
    POST_DELETE,
    POST_LOGIN,
    POST_SIGN_UP,
    POST_UPDATE
} = require('../helpers/checks')

router.get('/auth', auth)
router.get('/actualizar', getAvatars)
router.put('/actualizar', POST_UPDATE, update)
router.post('/calculadora/electricidad', electricityCalculator)
router.post('/calculadora/gas', gasCalculator)
router.post('/calculadora/offset', carbonOffsetCalculator)
router.post('/calculadora/transporte', transportCalculator)
router.get('/data', userData)
router.delete('/eliminar', POST_DELETE, eliminar)
router.post('/login', POST_LOGIN, logIn)
router.get('/sign-up', getAvatars)
router.post('/sign-up', POST_SIGN_UP, signUp)
router.get('/verificar/:tokenEmail', emailVerification)

module.exports = router