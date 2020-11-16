var ProductModel = require("../model/product.model"); // import

//create call back functions for the app.get() fucntion
var GetAllProductsFromDb = (req,res)=>{
    ProductModel.find({},(err,data)=>{
        if (err){throw err;}
        else{res.json(data);}
    })
}


/*var GetEmployee = (req,res)=>{
    ProductModel.find({},(err,data)=>{
        if (err){throw err;}
        else{res.send("HELLO!")}
    })
}*/

module.exports = {GetAllProductsFromDb};


