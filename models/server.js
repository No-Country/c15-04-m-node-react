const express = require('express')
const cors = require('cors')
const connection = require('../dataBase/connection')
const message = require('../helpers/message')


class Server {

    #PORT = process.env.PORT

    constructor() {
        this.app = express()
        this.dataBase()
        this.middlewares()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }
    async dataBase () {
        await connection()
    }

    listen() {
        this.app.listen(this.#PORT, message(this.#PORT))
    }
}


module.exports = Server