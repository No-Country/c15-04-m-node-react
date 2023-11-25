const { Router } = require('express')
const { signUp, logIn } = require('../controller/controller.usuario')
const { POST_LOGIN, POST_SIGN_UP } = require('../helpers/checks')
const router = Router()

router.post('/sign-up', POST_SIGN_UP, signUp)
router.post('/login', POST_LOGIN, logIn)

module.exports = router