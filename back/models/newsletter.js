const { Schema, model } = require('mongoose')

const newsLetterSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Debe ingresar un nombre de usuario']
  },
  correo: {
    type: String,
    required: [true, 'Debe Ingresar un correo electrónico'],
    unique: true
  }
})

newsLetterSchema.methods.toJSON = function () {
  const { __v, _id: id, ...rest } = this.toObject()
  return { id, ...rest }
}

module.exports = model('Newsletter', newsLetterSchema)
