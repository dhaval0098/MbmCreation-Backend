const routes =  require("express").Router()
const workcontroller = require("../WorkController")

// routes.post("/addwork",workcontroller.additemwithfile)
routes.get("/getitems",workcontroller.allitems)
routes.post("/upload", workcontroller.additemwithfile);
routes.delete('/work/:id', workcontroller.deleteWorkById);
routes.get('/worker/:id', workcontroller.getWorkById);




module.exports = routes