var express = require('express');
var router =express.Router();

var mongojs = require('mongojs');

var db= mongojs('mongodb://admin:89Alexandra@ds251894.mlab.com:51894/aeroassists', ['fulldb']);

router.get('/search',function(req,res,next){
	db.fulldb.find(function(err, search){

		if (err) {
			res.send(err);
		}

		res.json(search);

	});

});

module.exports=router;