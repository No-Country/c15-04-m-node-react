const { Router } = require('express')
const router = Router()
const { signUp } = require('../controller/controller.usuario')
const POST_LOGIN = require('../helpers/checks/check.login')

router.post('/sign-up', POST_LOGIN, signUp)

module.exports = router