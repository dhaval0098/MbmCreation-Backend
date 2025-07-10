const mongoose =  require("mongoose")
const Schema  =  mongoose.Schema
const Queryschema = new Schema({
name:{
type : String
},
phone:{
    type : Number
},
message :{
    type : String
}
})
module.exports= mongoose.model("query",Queryschema)