var express = require('express');
var bodyParser = require('body-parser')
var Promos = require('../models/promotions');
var Verify = require('./verify');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
	
	.get(Verify.verifyOrdinaryUser, function(req, res, next) {
		Promos.find({} , function(err, promos) {
			if (err) throw (err);
			else {
				res.json(promos);
			}
		});
	})

	.post( Verify.verifyAdmin, function(req, res, next) {
		Promos.create(req.body, function(err, promo) {
			if (err) throw (err)
			else {
				res.writeHead(200, {'Content-Type': "text/plain"});
				res.end("Added promo with id:" + promo._id);
			}
		});
				
	})

	.delete( Verify.verifyAdmin, function(req, res, next) {
		Promos.remove({}, function(err, data) {
			if (err) throw err;
			else {
				res.json(data);
			}
		}); 
	});

promoRouter.route('/:promoId') 

	.get(Verify.verifyOrdinaryUser, function(req, res, next) {
		Promos.findById(req.params.promoId, function(err, promo) {
			if (err) throw err;
			else {
				res.json(promo);
			}
		});

	})

	.put(Verify.verifyAdmin, function(req, res, next) {
		Promos.findByIdAndUpdate(
			req.params.promoId, 
			{$set: req.body}, 
			{new: true}, 
			function(err, promo) {
				if(err) throw err;
				else {
					res.writeHead(200, {"Content-Type" : "text/plain"});
					res.end("Updated promo with id:" + promo._id);
				}
		});		
	})

	.delete( Verify.verifyAdmin, function(req, res, next) {
		Promos.findByIdAndRemove(
			req.params.promoId, 
			{}, 
			function(err, data) {
				if (err) throw err;
				else {
					res.json(data);
				}
		});		
	});

module.exports = promoRouter;