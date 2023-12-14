const ECFP_VALIDATION = require('./check.calculator_fields')
const POST_DELETE = require('./check.delete')
const POST_LOGIN = require('./check.login')
const POST_NEWSLETTER = require('./check.newsletter')
const POST_SIGN_UP = require('./check.sign-up')
const POST_UPDATE = require('./check.update')

module.exports = {
    ECFP_VALIDATION,
    POST_DELETE,
    POST_LOGIN,
    POST_NEWSLETTER,
    POST_SIGN_UP,
    POST_UPDATE
}