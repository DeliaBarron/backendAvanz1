import mongoose from 'mongoose'
import dotenv from 'dotenv'

//traer env variables
dotenv.config()

//conectar con mongoose
mongoose.connect(
    process.env.DB_URI, () => {
        console.log('conexion satisfactoria a DB')
    })