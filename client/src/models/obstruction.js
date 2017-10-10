var Obstruction = function(result){
  this.location = result.location;
  this.latitude = result.lat;
  this.longtitude = result.lng;
  this.type = result.type;
  this.grade = result.grade;
  this.description = result.description;
}

module.exports = Obstruction;