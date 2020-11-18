var express = require("express");
var router = express.Router();

var ProductController = require("../controller/product.controller");

router.get("/allpro",ProductController.GetAllProductsFromDb);


router.post("/add",ProductController.addProduct);
router.post("/update",ProductController.updateProduct);
router.post("/del",ProductController.deleteProduct);

//router.get("/mo",ProductController.GetEmployee);

module.exports = router;