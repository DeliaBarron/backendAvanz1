import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './api/models/User.js'
import Book from './api/models/Book.js'

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
        
//TODO:
/*  create book model
create to book model
        find from book
        update book by id
        delete by id

*/
//CRUD
        //CREATE
const book = await Book.create({
    title:'Book Title',
    editorial:'Book Editorial',
    edition:1,
    pageNumber:230,
    isbn:'A-123-45b',
    id:1
})
console.log(book)

        //FIND
const find= await Book.find()
console.log(find)


const updateByIdResult= await Book.findByIdAndUpdate(
    '6350b31cef0515a26b988e70',
    {
        title:'Updated Title'
    }
)
    console.log(updateByIdResult)

})

