import { connect } from 'mongoose'
import 'colors'

const conection = async () => {
    try {
        await connect(process.env.MONGODB)
        console.log('DATABASE CONNECTED'.green)
    } catch (e) {
        throw new Error('ERROR!!'.red, e)
    }
}

export default conection