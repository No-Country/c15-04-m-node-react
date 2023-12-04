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

    edad: { type: Number },

    electricidad: {type: String },

    gas: { type: String },

    transporte: { type: String },

    estado: { type: Boolean, default: true },

    img: { type: String }

})

UsuarioSchema.methods.toJSON = function () {
    const { __v, _id: id, password, ...usuario } = this.toObject()
    return { id, ...usuario }
}

module.exports = model('Usuario', UsuarioSchema)