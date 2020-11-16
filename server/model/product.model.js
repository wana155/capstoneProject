var mongoose = require("mongoose");
mongoose.pluralize(null); // avoid post fix for collection 
var ProductSchema = mongoose.Schema;
var ProductSchemaRef = new ProductSchema({
        _id: Number,
        title:String,
        price:Number,
        size:String,
        description:String,
        rating: Number,
        images:Number
});
var ProductModel = mongoose.model("products",ProductSchemaRef);
module.exports = ProductModel;
