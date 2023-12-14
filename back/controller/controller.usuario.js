const { request, response } = require('express')
const jwt = require('jsonwebtoken')
const bycript = require('bcryptjs')
const { Usuario } = require('../models')
const sessionJWT = require('../helpers/jwt/session.JWT')
const emailJWT = require('../helpers/jwt/email.JWT')
const transport = require('../helpers/emissions/calculator/transport')
const carbonFP = require('../helpers/carbon_footprint/carbonFP')
const sendingMail = require('../helpers/nodemailer/nodemailer')

const signUp = async (req = request, res = response) => {
    const { nombre, correo, password, ...rest } = req.body
    let id = ''
    try {
        const salt = bycript.genSaltSync()
        let usuario
        const noNew = await Usuario.findOne({ correo, estado: false })
        if (noNew) {
            const update = {
                nombre,
                password: bycript.hashSync(password, salt),
                validated: false,
                ...rest,
            }
            usuario = await Usuario.findByIdAndUpdate(noNew.id, update, { new: true })
        } else {
            usuario = new Usuario(
                {
                    nombre,
                    correo,
                    password,
                    ...rest
                }
            )
            usuario.password = bycript.hashSync(password, salt)
            await usuario.save()
        }
        id = usuario._id
        const token = await emailJWT(id)
        const mail = await sendingMail(correo, nombre, 'welcome', token)

        if (mail) return res.status(201).json({
            message: `Gracias por Inscribirte ${nombre}. Debes verificar tu correo como último paso, revisa tu bandeja de entrada por favor.`,
            usuario,
        })
        else {
            await Usuario.findByIdAndDelete(id)
            return res.status(500).json({
                message: `Lo siento ${nombre}, hubo un problema al enviar el correo intentalo más tarde`,
                error: mail
            })
        }

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Hubo un error inesperado al grabar los datos',
            error: e.message,
        })
    }
}

const emailVerification = async (req = request, res = response) => {
    try {
        const { tokenEmail } = req.params
        const { id } = jwt.verify(tokenEmail, process.env.TOKEN_EMAIL)
        const data = { estado: true, validated: true }
        const usuario = await Usuario.findByIdAndUpdate(id, data, { new: true })
        const token = await sessionJWT(id)

        if (usuario.validated === true) return res.status(200).json({
            message: `${usuario.nombre} tu correo ha sido validado correctamente!`,
            usuario,
            token
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Hubo un error inesperado al validar tu correo',
            error: e.message,
        })
    }

}

const logIn = async (req = request, res = response) => {
    try {
        const { correo, password } = req.body
        const usuario = await Usuario.findOne({ correo, estado: true })
        if (!usuario) {
            return res.status(404).json({
                message: 'No existe este usuario',
            })
        }

        const noCrypt = bycript.compareSync(password, usuario.password)
        if (!noCrypt) {
            return res.status(400).json({
                message: 'Contraseña incorrecta',
            })
        }
        const token = await sessionJWT(usuario.id)
        res.status(200).json({
            message: `Gracias por volver ${usuario.nombre}`,
            usuario,
            token,
        })
    } catch (e) {
        console.log('Error! no se pudo hacer Log-in'.red, e)
        res.status(400).json({
            message: 'No fué posible hacer Log-in',
            error: e.message,
        })
    }
}

const update = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]
        const { estado, ...rest } = req.body
        const { id } = jwt.verify(token, process.env.TOKEN_USER)

        /*  if ('gas' in rest) rest.gas = carbonFP.getGas(rest.gas)
         if ('transporte' in rest) rest.transporte = transport(rest.transporte)
 
         if ('electricidad' in rest) {
             rest.electricidad = carbonFP.getElectricity(rest.electricidad)
         } */
        if ('password' in rest) {
            const salt = bycript.genSaltSync()
            rest.password = bycript.hashSync(rest.password, salt)
        }

        if ('correo' in rest) {
            const correo = rest.correo
            const [activo, noActivo, current] = await Promise.all([
                await Usuario.findOne({ correo, estado: true }),
                await Usuario.findOne({ correo, estado: false }),
                await Usuario.findOne({ id, correo })
            ])
            if (current) return res.status(400).json({
                message: 'Este es tu actual correo'
            })

            if (activo) return res.status(400).json({
                message: 'Este correo ya le pertenece a otra persona, intenta con uno distinto'
            })
            if (noActivo) {
                const [, usuario] = await Promise.all([
                    await Usuario.findByIdAndUpdate(noActivo._id, { correo: `changed${correo}` }),
                    await Usuario.findByIdAndUpdate(id, rest, { new: true })
                ])
                return res.status(200).json({
                    message: `Hemos actualizado tus datos ${usuario.nombre} correctamente`,
                    usuario,
                })
            }
        }
        const usuario = await Usuario.findByIdAndUpdate(id, rest, { new: true })
        res.status(200).json({
            message: `Hemos actualizado tus datos ${usuario.nombre} correctamente`,
            usuario,
        })
    } catch (e) {
        console.log('Error! no se pudieron actualizar los datos'.red, e)
        res.status(500).json({
            message: 'No se pudo actualizar el usuario',
            error: e.message,
        })
    }
}

const eliminar = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]
        const { id } = jwt.verify(token, process.env.TOKEN_USER)
        const usuario = await Usuario.findByIdAndUpdate(id, { estado: false })
        res.status(200).json({
            message: `Gracias por haber estado con nosotros ${usuario.nombre}, tus datos se han eliminado correctamente`,
        })
    } catch (e) {
        console.log('Error! no se pudo eliminar el perfil'.red, e)
        res.status(500).json({
            message: 'No fué posible eliminar el perfil',
            error: e.message,
        })
    }
}

const userData = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]

        if (!token) return res.status(401).json({
            message: "Error: trying a request with an empty token"
        })

        const { id } = jwt.verify(token, process.env.TOKEN_USER)
        const usuario = await Usuario.findOne({ _id: id, estado: true })

        res.status(200).json({
            message: 'request successful',
            usuario
        })
    } catch (e) {
        res.status(500).json({
            message: 'request failed',
            error: e.message,
        })
    }
}

const auth = async (req = request, res = response) => {
    try {
        const Authorization = req.header('Authorization')
        const token = Authorization.split('Bearer ')[1]

        const tokenDecoded = jwt.verify(token, process.env.TOKEN_USER)
        const usuario = await Usuario.findOne({ _id: tokenDecoded.id, estado: true })

        if (!usuario) return res.status(404).json({
            message: 'No existe este usuario'
        })

        res.status(200).json({
            message: 'El token está valido',
            isTokenValid: true,
            usuario: usuario.nombre,
            img: usuario.img
        })

    } catch (e) {
        const err = "Cannot read properties of undefined (reading 'split')"
        const noValid = ['jwt expired', 'invalid token', 'invalid signature', 'jwt malformed']
        console.log('ERROR!, HUBO UN PROBLEMA'.red, e.message)

        if (e.message === err) return res.status(400).json({
            message: "No existe Token",
            isTokenValid: false
        })
        if (noValid.includes(e.message)) return res.status(401).json({
            message: e.message,
            isTokenValid: false
        })

        res.status(500).json({
            message: e.message
        })
    }
}


module.exports = {
    auth,
    eliminar,
    emailVerification,
    logIn,
    signUp,
    update,
    userData
}
