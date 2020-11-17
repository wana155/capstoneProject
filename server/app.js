//Load all Modules
var express =require('express');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var port =9090; 

// Database: URL Details
var url = "mongodb://localhost:27017/shopping";
// Database: Connection with avoid warning properties
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true} );
mongoose.connection;

// Express: Create reference of express
var app = express();

// Middlware setup
app.use(bodyParser.json()); //convert to jason format
app.use(bodyParser.urlencoded({extended:true}));// Enambles post(), put(), and delete body data
app.use(cors());  //Enamble CORS Features

// import router
var Product = require('./router/product.router.js');
// import router
var User = require('./router/user.router.js');
// use a middleware
app.use("/products",Product);
app.use("/users",User);

app.listen(port,()=>{console.log("Server is running in port: "+port);})
//