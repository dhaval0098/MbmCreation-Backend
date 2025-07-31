const routes = require("express").Router()
const Admincontroller = require("../AdminController")

routes.post("/loginuu",Admincontroller.logina)
routes.post("/signuppp",Admincontroller.admin)


module.exports = routes
