const { Router } = require('express')
const { 
    signUp,
    logIn,
    update, 
    eliminar
} = require('../controller/controller.usuario')
const { POST_LOGIN, POST_SIGN_UP, TOKEN } = require('../helpers/checks')
const getAvatars = require('../controller/controller.avatar')
const router = Router()

router.get('/sign-up', getAvatars)
router.post('/sign-up', POST_SIGN_UP, signUp)
router.post('/login', POST_LOGIN, logIn)
router.put('/actualizar', TOKEN, update)
router.delete('/eliminar', TOKEN, eliminar)

module.exports = router