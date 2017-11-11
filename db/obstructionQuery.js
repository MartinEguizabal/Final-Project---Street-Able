var MongoClient = require('mongodb').MongoClient;

var ObstructionQuery = function(){
  this.url = 'mongodb://localhost:27017/Edinburgh';
};

ObstructionQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('obstructions');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }
};

module.exports = ObstructionQuery;