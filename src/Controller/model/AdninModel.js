const mongoose =  require("mongoose")
 const Schema =  mongoose.Schema
 const AdminSchema =  new Schema({
    firstname : String,
   
    phone : Number,
    email: {
      type : String,
      unique : true
    },
    password:String

 })

 module.exports = mongoose.model("admin",AdminSchema)