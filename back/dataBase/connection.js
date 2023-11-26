const mongoose = require('mongoose')
require('colors')

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log('DATABASE CONNECTED'.green)
    } catch(e) {
        throw new Error('ERROR!!'.red, e)
    }
}

module.exports = connection