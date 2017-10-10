// same as models/films.js

var Obstruction = require('./obstruction');

var Obstructions = function(){}

Obstructions.prototype.makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  }

Obstructions.prototype.all = function(callback){
    console.log(this)
    var self = this;
    this.makeRequest("http://localhost:3000/api/obstructions", function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      console.log(results);
      var obstructions = self.populateObstructions(results);
      console.log(obstructions);
      callback(obstructions);
    });
  }

Obstructions.prototype.populateObstructions = function(results){
  var obstructions = [];

    for(var result of results){
      var obstruction = new Obstruction(result);
      obstructions.push(obstruction);
    }
  return obstructions;
  }

// var Obstacle = require('./obstacle');

// var Items = function(){

//   var item1 = new Obstacle({
//     location: "Leith Walk/Albert Street",
//     lat: 55.962590,
//     lng: -3.178880,
//     type: "no dropped sidewalk",
//     grade: 1,
//     description: "sidewalk on corner of Leith Walk and Albert Street not dropped resulting in abrupt grade difference between road and pavement"
//   });

// }

module.exports = Obstructions;