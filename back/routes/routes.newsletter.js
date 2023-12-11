const { Router } = require('express')
const newsletterPost = require('../controller/controller.newsletter')
const { POST_NEWSLETTER } = require('../helpers/checks')
const router = Router()

router.post('/', POST_NEWSLETTER, newsletterPost)

module.exports = router