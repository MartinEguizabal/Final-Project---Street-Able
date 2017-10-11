var MapWrapper = function(container, coords, zoom) {
  // var container = document.getElementById('map-container');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  // console.log('map')
};

MapWrapper.prototype.addMarker = function(obstruction){
  // pass in whole obstruction above
  var marker = new google.maps.Marker({
    position: {lat: obstruction.latitude, lng: obstruction.longtitude},
    // above, drill down to coords of the obstruction object
    map: this.googleMap
  });
  this.markers.push(obstruction);
  // add the whole object to marker array

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
                // ULTIMATELY we have obstruction object available to display above

  var infoWindow = new google.maps.InfoWindow({
  content: content})

  google.maps.event.addListener(marker, 'click', function(){
    // add listener to the lat long of the obstruction object
    infoWindow.open(this.googleMap, marker);
    console.log(marker)
    });
  }

// MapWrapper.prototype.addClickEvent = function(){
//   google.maps.event.addListener(this.googleMap, 'click', function(event){
//     var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
//     this.addMarker(position);
//   }.bind(this));
//   };

module.exports = MapWrapper;