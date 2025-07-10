const mongoose =  require("mongoose")
const Schema = mongoose.Schema
const workschema = new Schema({
    work : {
        type : String
    },  
    imageURL: {
        type: [String], // Array of Cloudinary URLs
        required: true,
      },
})
module.exports = mongoose.model("work",workschema)
