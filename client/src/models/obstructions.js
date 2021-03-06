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
      var obstructions = self.populateObstructions(results);
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

Obstructions.prototype.addObstruction = function(){
  
}

module.exports = Obstructions;