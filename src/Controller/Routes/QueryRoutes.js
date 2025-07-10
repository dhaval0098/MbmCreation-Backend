const routes =  require("express").Router()
const querycontroller =  require("../QueryController")

routes.post("/addquery",querycontroller.addquery)
routes.get("/getqueries",querycontroller.getqueries)
routes.delete("/deletequery/:id",querycontroller.deletequery)

module.exports = routes