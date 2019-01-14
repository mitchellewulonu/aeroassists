var express = require('express');

var path = require('path');

var bodyParser =require('body-parser');

var index = require('./routes/index');
var search = require('./routes/search');

//var port= 3000;

var app = express();


//body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', search);


app.listen(process.env.PORT || 8080, function(){
	
	var port = server.address().port;
    console.log("App now running on port", port);
});

