// same as controllers/films.js

var express = require('express')
var mainRouter = new express.Router();
var ObstructionQuery = require('../db/obstructionQuery');
var query = new ObstructionQuery();


// var MongoClient = require("mongodb").MongoClient;
// // ObjectID = require('mongodb').ObjectID;
// MongoClient.connect("mongodb://localhost:27017/obstructions", function(error, database){
//     db = database;
// });

mainRouter.get('/', function(req, res){
    query.all(function(results){
    res.json(results);    
    });
});
// says return everything from db

// mainRouter.get('/', function(req, res){
//   res.json({data: obstacles});
// })

// mainRouter.get('/:id', function(req, res){
//   res.json({data: obstacles[req.params.id]});
// })



module.exports = mainRouter;