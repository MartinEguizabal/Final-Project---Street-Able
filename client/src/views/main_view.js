// same as views/ui.js

var MapWrapper = require('../models/map_wrapper.js');
var InfoWindow = require('../models/info_window.js');
var Obstructions = require('../models/obstructions.js')

var MainView = function(mainElement){
  this.mainElement = mainElement;
}

MainView.prototype.render = function(){

    var mapSection = document.createElement("section");
    mapSection.id = "map-section";
    var mapTag = document.createElement("div");
    mapTag.id = "map-container";
    mapTag.innerText = "map";
    mapSection.appendChild(mapTag);

    this.mainElement.appendChild(mapSection);

    var centre = {lat: 55.953251, lng: -3.188267};
    var zoom = 13;
    var map = new MapWrapper(mapTag, centre, zoom);

    var obstructions = new Obstructions();
    obstructions.all(function(result){

        for(obstruction of result){
            map.addMarker({lat: obstruction.latitude, lng: obstruction.longtitude})
        }
    }.bind(this));

 




  }

module.exports = MainView;