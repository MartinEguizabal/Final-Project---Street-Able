var express = require('express')
var mainRouter = new express.Router();
var ObstructionQuery = require('../db/obstructionQuery');
var query = new ObstructionQuery();

mainRouter.get('/', function(req, res){
    query.all(function(results){
    res.json(results);    
    });
});
// says return everything from db

module.exports = mainRouter;