var ProductModel = require("../model/product.model"); // import

//create call back functions for the app.get() fucntion
var GetAllProductsFromDb = (req,res)=>{
    ProductModel.find({},(err,data)=>{
        if (err){throw err;}
        else{res.json(data);}
    })
}

var updateProduct = (req,res)=>{

    ProductModel.updateOne({_id:req.body._id},{$set:{title:req.body.title,
        price:req.body.price,
        size:req.body.size,
        description:req.body.description,
        rating:req.body.rating,
        images: req.body.images}},(err)=>{
            if (err) throw err;
            res.json({"msg":"Product record stored successfully"});
        });
}
var deleteProduct = (req,res)=>{
    
    ProductModel.deleteOne({_id:req.body._id},(err,result)=>{
        if (err) throw err;
            res.json({"msg":"Product record deleted successfully"});
    })
}

var addProduct = (req,res)=>{

    //console.log("?HE OTHER SIDE: "+req.body.id+req.body.fname+req.body.lname+req.body.email+req.body.pasword+req.body.admin+req.body.cart);
//CREATE A RECORD
    var product = new ProductModel({ 
        _id: req.body._id,
        title:req.body.title,
        price:req.body.price,
        size:req.body.size,
        description:req.body.description,
        rating:req.body.rating,
        images: req.body.images})

        product.save((err,result)=>{
            if (err) throw err;
            res.json({"msg":"productrecord stored successfully"});
        }); 
}

module.exports = {GetAllProductsFromDb,addProduct,deleteProduct,updateProduct};


