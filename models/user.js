import { Schema, model } from 'mongoose'

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'You need to enter a username']
    },
    email: {
        type: String,
        required: [true, 'You need to enter a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password required']
    },
    estate: { type: Boolean, default: true },

    img: { type: String }

})

export default model('User', UserSchema)