const { response } = require('express')
const Avatar = require('../models/avatars')
require('colors')

const getAvatars = async ( _, res = response) => {
    try {
        const avatars = await Avatar.find({})
        res.status(200).json({ avatars })
    } catch(e) {
        console.log('ERROR!'.red, e.message)
        res.status(500).json({
            message: 'No fué posible mostrar los avatars',
            error: e.message
        })
    }
}

module.exports = getAvatars