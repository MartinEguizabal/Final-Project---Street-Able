MainView = require('../views/main_view.js')

var MapWrapper = function(container, coords, zoom) {
  // var container = document.getElementById('map-container');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function(obstruction){
  var marker = new google.maps.Marker({
    position: {lat: obstruction.latitude, lng: obstruction.longtitude},
    map: this.googleMap
  });
  this.markers.push(obstruction);

  var content = '<div id="iw container">' +
                  '<div class="iw title>' +
                    '<h3>Obstruction details:</h3>' +
                    '<div class="iw content">' +
                      '<p>Location: '+ obstruction.location + '</p>' +
                      '<p>Type: ' + obstruction.type + '</p>' +
                      '<p>Grade: ' + obstruction.grade + '</p>' +
                      '<p>Description: ' + obstruction.description + '</p>' +
                    '</div>' +
                  '</div>' +
                '</div>'

  var infoWindow = new google.maps.InfoWindow({
  content: content})

  google.maps.event.addListener(marker, 'click', function(){
    infoWindow.open(this.googleMap, marker);
    console.log(marker)
    });
  }

MapWrapper.prototype.addUserMarkerObj = function(local, latitude, longtitude, type, value, desc){
  // var marker = new google.maps.Marker({
  //   position: coords,
  //   map: this.googleMap
  // });
  this.markers.push({location: local, lat: latitude, lng: longtitude, type: type, value: value, description: desc});
  MainView.render()
}

// MapWrapper.prototype.addClickEvent = function(callback){
//   google.maps.event.addListener(this.googleMap, 'click', function(event){
//     var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
//     this.addUserMarkerObj(position);
//   }.bind(this));
//   };


MapWrapper.prototype.clickEvent = function(callback){
  google.maps.event.addListener(this.googleMap, 'click', function(event){

    var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    // this.addUserMarkerObj(position);
    callback(position);
  }.bind(this));
  };

module.exports = MapWrapper;

// click on map > fill in form with lat/lng > click submit button > causes addition of object to markers array