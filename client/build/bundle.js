/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var MainView = __webpack_require__(1);
var IntroWindow = __webpack_require__(2)

var app = function(){
  var main = document.querySelector('#main-view');
  
  var introWindow = new IntroWindow();
  introWindow.render()

  var mainView = new MainView(main);
  mainView.render();
}


window.addEventListener('load', app);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var MapWrapper = __webpack_require__(3);
var Obstructions = __webpack_require__(4)

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
        var newObstruction = {location: locationInput.value, lat: latBox.value, lng: lngBox.value, type: typeInput.value, grade: gradeInput.value, description: descInput.value};
    })

    formSection.appendChild(locationInput);
    formSection.appendChild(latBox);
    formSection.appendChild(lngBox);
    formSection.appendChild(typeInput);
    formSection.appendChild(gradeInput);
    formSection.appendChild(descInput);
    formSection.appendChild(submitButton);
    this.mainElement.appendChild(formSection);

    // var obstructions = new Obstructions();
    // obstructions.add(newObstruction, function(data){
    // console.log(data)
    // })
  }

module.exports = MainView;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var IntroWindow = function(){}

IntroWindow.prototype.render = function(){
  var windowBox = document.getElementById('intro-window')

  var windowContent = document.createElement('article')
  windowContent.id = 'intro-content';

  var introTitle = document.createElement('h2');
  introTitle.innerText = "Welcome to Street Able!"

  var introDescription = document.createElement('p');
  introDescription.id = 'intro-descript';
  introDescription.innerText = "Street Able is an app that uses Google maps to plot partial and/or complete obstructions to wheelchair users on Edinburgh pavements."

  var introUserInfo = document.createElement('p');
  introUserInfo.id = 'intro-user-info';
  introUserInfo.innerText = "To use the app navigate to the map area you are travelling to view any obstructions identified by markers. You can click on a marker to view the details of the obstruction. Details of the obstruction include location, type, grade and description."

  var introGradeInfo = document.createElement('ul');
  introGradeInfo.id = 'intro-grade-info';
  introGradeInfo.innerText = "Grade descriptions:"

  var gradeI = document.createElement('li')
  gradeI.id = 'gradeI'
  gradeI.innerText = "Grade 1: Likely to require some strenuous effort for manual wheelchair users."

  var gradeII = document.createElement('li')
  gradeII.id = 'gradeII'
  gradeII.innerText = "Grade 2: Likely to require aid from another person for manual wheelchair users."

  var gradeIII = document.createElement('li')
  gradeIII.id = 'gradeIII'
  gradeIII.innerText = "Grade 3: Impassible to manual and motorised wheelchair users"

  var closeButton = document.createElement('button');
  closeButton.id = 'close-button';
  closeButton.innerText = "Ok"

  closeButton.onclick = function(){
    windowBox.style.display = "none"
  }

  introGradeInfo.appendChild(gradeI);
  introGradeInfo.appendChild(gradeII);
  introGradeInfo.appendChild(gradeIII);

  windowContent.appendChild(introTitle);
  windowContent.appendChild(introDescription);
  windowContent.appendChild(introUserInfo);
  windowContent.appendChild(introGradeInfo);
  windowContent.appendChild(closeButton);
  windowBox.appendChild(windowContent);
}

module.exports = IntroWindow;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

MainView = __webpack_require__(1)

var MapWrapper = function(container, coords, zoom) {
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
    callback(position)
  }.bind(this));
  };

module.exports = MapWrapper;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Obstruction = __webpack_require__(5);

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var Obstruction = function(result){
  this.location = result.location;
  this.latitude = result.lat;
  this.longtitude = result.lng;
  this.type = result.type;
  this.grade = result.grade;
  this.description = result.description;
}

module.exports = Obstruction;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map