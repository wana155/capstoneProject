var express = require("express");
var routeru = express.Router();

var UserController = require("../controller/user.controller");
const UserModel = require("../model/user.module");

routeru.get("/alluse",UserController.GetAllUsersFromDb);

routeru.post("/updatecart",UserController.updateCart);
routeru.post("/add",UserController.addUser);
routeru.post("/updateAcc",UserController.updateAccount);
routeru.post("/del",UserController.deleteAccount);

module.exports = routeru;