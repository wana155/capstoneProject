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

    
/*/CREATE A RECORD
    var user = new UserModel({ 
        _id: 4,
        fname:"Carlos",
        lname:"Gonzalez",
        email:"gonza@tcs.com",
        pasword:"400z",
        admin:"no",
        cart: [2,3,4]})

        user.save((err,result)=>console.log("HOO--> "+err)); */
}
    
module.exports = {GetAllUsersFromDb,updateCart};


