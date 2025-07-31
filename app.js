require("dotenv").config();
var express =  require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())


const mongoose = require("mongoose")


const UserRoutes = require ("./src/Controller/Routes/UserRoutes") 
app.use(UserRoutes)
const WorkRoutes = require("./src/Controller/Routes/WorkRoutes")
app.use(WorkRoutes)
const Queryroutes = require("./src/Controller/Routes/QueryRoutes")
app.use(Queryroutes)
const AdminRoutes = require("./src/Controller/Routes/AdminRoutes")
app.use(AdminRoutes)

mongoose.connect("mongodb+srv://dhaval0908:VtG4zppcfCxNoa6e@cluster0.ytik0gz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{   // to connect mongodb
    console.log("mongodb is connected")
})





var PORT = process.env.PORT || 6009    // to create port number and server
app.listen(PORT,()=>{    // to start the server
    console.log("port number is",PORT)
})
