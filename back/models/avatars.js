const { Schema, model } = require('mongoose')

const AvatarSchema = Schema({
    descripcion: { type: String },
    url: { type: String }
})

AvatarSchema.methods.toJSON = function () {
    const { __v, _id: id, ...rest } = this.toObject()
    return { id, ...rest }
}

module.exports = model('Avatar', AvatarSchema)