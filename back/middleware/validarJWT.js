require('colors')
const jwt = require('jsonwebtoken')
const { request, response } = require('express')
const Usuario = require('../models/usuario')

const validarJWT = async (req = request, res = response, next) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]
        if (!token) return res.status(401).json({
            message: "No existe token"
        })
        const { id } = jwt.verify(token, process.env.TOKEN_USER)
        const usuario = await Usuario.findOne({ _id: id, estado: true })
        if (!usuario) return res.status(400).json({
            message: 'No existe este usuario'
        })

        next()
    } catch (e) {
        console.log('ERROR AL VERIFICAR EL TOKEN!'.red, e)
        res.status(401).json({
            message: 'Hubo un error en la verificación del token',
            error: e.message
        })
    }
}

module.exports = validarJWT