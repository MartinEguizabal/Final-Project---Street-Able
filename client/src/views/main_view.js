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
    var zoom = 14;
    var map = new MapWrapper(mapTag, centre, zoom);

    var obstructions = new Obstructions();
    obstructions.all(function(result){

        for(obstruction of result){
            map.addMarker(obstruction)
            // pass in whole obstruction object
        }
    }.bind(this));

    var formSection = document.createElement('section');
    formSection.innerText = "To warn other users of an obstrution add it to the map: "
    formSection.id = 'form-section';

    var locationInput = document.createElement('input');
    locationInput.id = 'location-input';
    locationInput.setAttribute('type', 'text');
    locationInput.placeholder = "obstruction location"

    var latBox = document.createElement('input');
    latBox.readOnly = true;
    latBox.id = 'lat-box';
    latBox.setAttribute('type', 'number');

    var latBoxPosition = (position) => {latBox.value = position.lat}
    map.clickEvent(latBoxPosition);

    var lngBox = document.createElement('input');
    lngBox.readOnly = true;
    lngBox.id = 'lng-box';
    lngBox.setAttribute('type', 'number');

    var lngBoxPosition = (position) => {lngBox.value = position.lng}
    map.clickEvent(lngBoxPosition);

    var typeInput = document.createElement('input');
    typeInput.id = 'type-input';
    typeInput.setAttribute('type', 'text');
    typeInput.placeholder = "type of obstruction";

    var gradeInput = document.createElement('input');
    gradeInput.id = 'grade-input';
    gradeInput.setAttribute('type', 'text');
    gradeInput.placeholder = "grade of obstruction";

    var descInput = document.createElement('input');
    descInput.id = 'desc-input';
    descInput.setAttribute('type', 'text');
    descInput.placeholder = "description of obstruction"

    var submitButton = document.createElement('button');
    submitButton.innerText = "Submit"
    submitButton.addEventListener('click', function(){
        map.addUserMarkerObj(locationInput.value, latBox.value, lngBox.value, typeInput.value, gradeInput.value, descInput.value)
    })

    console.log(locationInput.value)

    formSection.appendChild(locationInput);
    formSection.appendChild(latBox);
    formSection.appendChild(lngBox);
    formSection.appendChild(typeInput);
    formSection.appendChild(gradeInput);
    formSection.appendChild(descInput);
    formSection.appendChild(submitButton);
    this.mainElement.appendChild(formSection);

  }

module.exports = MainView;