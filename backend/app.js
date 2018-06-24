var express=require('express');
var app=express();
var frequencyController=require('./frequencyController');

// Allow COR to this application.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// Redirecting the "/frequency" request to frequencyController.
app.use("/frequency",frequencyController);

module.exports=app;
