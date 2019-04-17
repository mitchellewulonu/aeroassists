/*var express = require('express');

//var path = require('path');

var bodyParser =require('body-parser');

var index = require('./routes/index');
var search = require('./routes/search');

//var port= 3000;

var app = express();


// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));



//body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/', index);
app.use('/api', search);


var server = app.listen(process.env.PORT || 8080, function(){
	
	var port = server.address().port;
    console.log("App now running on port " + port);
});

module.exports = router;*/


var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var COLLECTION = "fulldb";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://admin:89Alexandra@ds251894.mlab.com:51894/aeroassists", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port " + port);
  });
});





app.get("/api/search", function(req, res) {
  db.collection(COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get information.");
    } else {
      res.status(200);
      res.send(docs);
      //.json(docs);
      console.log('data retrieval finished');

    }
  });
});


