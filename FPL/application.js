const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://nehaPatil:neha1905@cluster0.qsl6cn6.mongodb.net/?retryWrites=true&w=majority", function(err){
    if(err)
    {
        console.log("Not connected to the db: "+ err);
    }else{
        console.log("DB connected");
    }
});

//app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(4200, function(){
    console.log("Server listening on port 4200");
});