const { request, response } = require('express')
const bycript = require('bcryptjs')
const Usuario = require('../models/usuario')
const genToken = require('../helpers/jwt')


const signUp = async (req = request, res = response) => {
    try {
        const { nombre, correo, password, ...rest } = req.body
        const salt = bycript.genSaltSync()
        const usuario = new Usuario({ nombre, correo, password, ...rest })
        usuario.password = bycript.hashSync(password, salt)
        await usuario.save()
        const token = await genToken(usuario._id)

        res.status(201).json({
            message: `Gracias por Inscribirte ${nombre}`,
            token
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({
            message: 'Hubo un error inesperado al grabar los datos',
            error: e.message
        })
    }
}

const logIn = async(req = request, res = response) => {

    const { correo, password } = req.body
    const usuario = await Usuario.findOne({ correo, estado: true })
    if(!usuario) return res.status(404).json({
        message: 'No existe este usuario'
    })

    const noCrypt = bycript.compareSync(password, usuario.password)
    if(!noCrypt) return res.status(400).json({
        message: 'Contraseña incorrecta'
    })

    const token = await genToken(usuario._id)
    res.status(200).json({
        message: `Gracias por volver ${usuario.nombre}`,
        token
    })
}

module.exports = {
    signUp,
    logIn
}
