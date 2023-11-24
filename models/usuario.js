const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe ingresar un nombre de usuario']
    },
    correo: {
        type: String,
        required: [true, 'Debe ingresar un correo de usuario por favor'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña es obligatoria']
    },
    estado: { type: Boolean, default: true },

    img: { type: String }

})

module.exports = model('Usuario', UsuarioSchema)