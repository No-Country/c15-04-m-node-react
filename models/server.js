import express, { json } from 'express'
import cors from 'cors'
import conection from '../dataBase/config.js'
import message from '../helpers/message.js'


class Server {

    #PORT = process.env.PORT

    constructor() {
        this.app = express()
        this.dataBase()
        this.middlewares()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(json())
    }
    async dataBase() {
        await conection()
    }

    listen() {
        this.app.listen(this.#PORT, message(this.#PORT))
    }
}


export default Server