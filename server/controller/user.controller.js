var UserModel = require("../model/user.module"); // import

//create call back functions for the app.get() fucntion
var GetAllUsersFromDb = (req,res)=>{
    UserModel.find({},(err,data)=>{
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

module.exports = {GetAllUsersFromDb};


