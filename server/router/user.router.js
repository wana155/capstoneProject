var express = require("express");
var routeru = express.Router();

var UserController = require("../controller/user.controller");

routeru.get("/alluse",UserController.GetAllUsersFromDb);

routeru.post("/updatecart",UserController.updateCart);

module.exports = routeru;