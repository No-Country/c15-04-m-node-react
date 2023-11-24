const { request, response } = require('express')
const bycript = require('bcryptjs')
const Usuario = require('../models/usuario')


const signUp = async (req = request, res = response) => {
    try {
        const { nombre, correo, password, ...rest } = req.body
        const salt = bycript.genSaltSync()
        const usuario = new Usuario({ nombre, correo, password, ...rest })
        usuario.password = bycript.hashSync(password, salt)
        await usuario.save()
        res.status(201).json({
            message: `Gracias por Inscribirte ${nombre}`
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({
            message: 'Hubo un error inesperado al grabar los datos',
            error: e.message
        })
    }
}

module.exports = {
    signUp
}
