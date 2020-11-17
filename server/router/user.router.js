var express = require("express");
var routeru = express.Router();

var UserController = require("../controller/user.controller");

routeru.get("/alluse",UserController.GetAllUsersFromDb);

//router.get("/mo",ProductController.GetEmployee);

module.exports = routeru;