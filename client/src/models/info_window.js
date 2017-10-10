// var InfoWindow = function(result, map){
//   this.infoWindow = new google.maps.InfoWindow({
//   content: "hi"
//   });
// }

// InfoWindow.prototype.clickEvent = function(result, map){
//   for(i = 0; i < map.markers.length; i++){
//     // var marker = new google.maps.LatLng(result[i].latitude, result[i].longtitude);

//     google.maps.event.addListener(map.markers[i], 'click', function(){
//       this.infoWindow.open(map, map.markers[i]);
//     }.bind(this))
//   }
// }

// module.exports = InfoWindow;