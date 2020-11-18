var UserModel = require("../model/user.module"); // import
const { use } = require("../router/user.router");

//create call back functions for the app.get() fucntion
var GetAllUsersFromDb = (req,res)=>{
    UserModel.find({},(err,data)=>{
        if (err){throw err;}
        else{res.json(data);}
    })
}


var updateCart = (req,res)=>{

    UserModel.updateOne({_id:req.body._id},{$set:{cart:req.body.cart}},(err)=>console.log("HERE-> "+err));
}
var updateAccount = (req,res)=>{

    UserModel.updateOne({_id:req.body._id},{$set:{fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        pasword:req.body.pasword,
        admin:req.body.admin,
        cart: req.body.cart}},(err)=>{
            if (err) throw err;
            res.json({"msg":"User record stored successfully"});
        });
}

var addUser = (req,res)=>{

    //console.log("?HE OTHER SIDE: "+req.body.id+req.body.fname+req.body.lname+req.body.email+req.body.pasword+req.body.admin+req.body.cart);
//CREATE A RECORD
    var user = new UserModel({ 
        _id: req.body._id,
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        pasword:req.body.pasword,
        admin:req.body.admin,
        cart: req.body.cart})

        user.save((err,result)=>{
            if (err) throw err;
            res.json({"msg":"User record stored successfully"});
        }); 
}
    
module.exports = {GetAllUsersFromDb,updateCart,addUser,updateAccount};


