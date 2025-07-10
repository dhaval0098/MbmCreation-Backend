const mongoose= require("mongoose")
const Schema = mongoose.Schema
const Userschema =  new Schema({
    
    username : String,

    password : String,
   
    
})
module.exports = mongoose.model("user",Userschema)