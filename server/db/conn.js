const mongoose = require("mongoose")

const db = "mongodb+srv://tusharshrivas65:0PWEdDGUAAvOrxTu@cluster0.vihfffm.mongodb.net/"

mongoose.connect(db)
.then(()=>{
    console.log('connection start');
}).catch((err)=>{
 console.log(err,"connection fail");
})