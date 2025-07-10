const routes = require("express").Router()
const UserModel = require("../model/UserModel")
const usercontroller = require("../UserController")



routes.post("/adduser",usercontroller.adduser)
routes.post("/login",usercontroller.Login)




module.exports = routes