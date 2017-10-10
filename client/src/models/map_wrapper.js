var MapWrapper = function(container, coords, zoom) {
  // var container = document.getElementById('map-container');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  // console.log('map')
};

MapWrapper.prototype.addMarker = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);

  var infoWindow = new google.maps.InfoWindow({
  content: "hi this is so cool"})

  google.maps.event.addListener(marker, 'click', function(){
    infoWindow.open(this.googleMap, marker);
    console.log("click")
    });
  }

// MapWrapper.prototype.addClickEvent = function(){
//   google.maps.event.addListener(this.googleMap, 'click', function(event){
//     var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
//     this.addMarker(position);
//   }.bind(this));
//   };

module.exports = MapWrapper;