var mongoose = require("mongoose");
mongoose.pluralize(null); // avoid post fix for collection 
var UserSchema = mongoose.Schema;
var UserSchemaRef = new UserSchema({
        _id: Number,
        fname:String,
        lname:String,
        email:String,
        pasword:String,
        admin:String,
        cart: Array
});
var UserModel = mongoose.model("users",UserSchemaRef);
module.exports = UserModel;
