const { Router } = require('express')
const router = Router()
const { signUp } = require('../controller/controller.usuario')
const POST_SIGN_UP = require('../helpers/checks/check.login')

router.post('/sign-up', POST_SIGN_UP, signUp)

module.exports = router