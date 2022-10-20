import mongoose from "mongoose"

const userSchema = new mongoose.Schema({//o solo Schema si importamos {Schema} de mongoose
    name:String,
    lastname:String,
    birthday:Date,
    address:String,
    role:String,
    phone:String,
    contacts:[String],
    email:String,
    password:String
})
export default mongoose.model('User', userSchema)

