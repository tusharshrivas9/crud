const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        require:true
    },
    email:{
        type : String,
        require:true,
        unique:true
    },
    phone:{
        type : Number,
        require:true
    },
    age:{
        type : Number,
        require:true
    },
    password:{
        type : String,
        require:true
    }
})

const users = mongoose.model("users",userSchema)

module.exports = users