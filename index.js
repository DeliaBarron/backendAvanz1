import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './api/models/User.js'

//brings env variables
dotenv.config()

//connect to mongoose
mongoose.connect(
    process.env.DB_URI, async () => {
        console.log('conexion satisfactoria a DB')
        //CRUD
        const user= await User.create({
            name:'Juan',
            address: 'direccion prueba',
            birthday:new Date(),
            contacts:['Pedro', 'Juan'],
            email:'correo@prueba.com',
            lastname:'Rodriguez',
            password:'123',
            phone:'12345678',
            role:'Client',
        })
        console.log(user)
        // User.find({
        //     name:'Juan'
        // })
        
        // User.updateMany({
        //     name:'Juan'
        // },
        // {
        //     name:'Pedro'
        // })
        // User.deleteOne({
        //     name:'Juan'
        // })
        
})

