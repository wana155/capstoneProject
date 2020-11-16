var express = require("express");
var router = express.Router();

var ProductController = require("../controller/product.controller");

router.get("/allpro",ProductController.GetAllProductsFromDb);

//router.get("/mo",ProductController.GetEmployee);

module.exports = router;