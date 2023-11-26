const { request, response } = require('express')
const jwt = require('jsonwebtoken')
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
        const token = await genToken(usuario.id)

        res.status(201).json({
            message: `Gracias por Inscribirte ${nombre}`,
            usuario,
            token
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Hubo un error inesperado al grabar los datos',
            error: e.message
        })
    }
}

const logIn = async (req = request, res = response) => {
    try {
        const { correo, password } = req.body
        const usuario = await Usuario.findOne({ correo, estado: true })
        if (!usuario) return res.status(404).json({
            message: 'No existe este usuario'
        })

        const noCrypt = bycript.compareSync(password, usuario.password)
        if (!noCrypt) return res.status(400).json({
            message: 'Contraseña incorrecta'
        })

        const token = await genToken(usuario.id)
        res.status(200).json({
            message: `Gracias por volver ${usuario.nombre}`,
            usuario,
            token
        })
    } catch (e) {
        console.log('Error! no se pudo hacer Log-in'.red, e)
        res.status(400).json({
            message: 'No fué posible hacer Log-in',
            error: e.message
        })
    }
}


const update = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const { correo, nombre, estado, ...rest } = req.body
        const data = rest
        const { uid: _id } = jwt.verify(Authorization, process.env.TOKEN_USER)
        const usuario = await Usuario.findByIdAndUpdate(_id, data, { new: true })
        res.status(200).json({
            message: `Hemos actualizado tus datos ${usuario.nombre} correctamente`,
            usuario
        })
    } catch (e) {
        console.log('Error! no se pudieron actualizar los datos'.red, e)
        res.status(500).json({
            message: 'No se pudo actualizar el usuario',
            error: e.message
        })
    }

}

const eliminar = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const { uid: _id } = jwt.verify(Authorization, process.env.TOKEN_USER)
        const usuario = await Usuario.findByIdAndUpdate(_id, { estado: false })
        res.status(200).json({
            message: `Gracias por haber estado con nosotros ${usuario.nombre}, tus datos se han eliminado correctamente`
        })
    } catch (e) {
        console.log('Error! no se pudo eliminar el perfil'.red, e)
        res.status(500).json({
            message: 'No fué posible eliminar el perfil',
            error: e.message
        })
    }
}


module.exports = {
    signUp,
    logIn,
    update,
    eliminar
}
