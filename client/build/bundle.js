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

var app = function(){
  var main = document.querySelector('#main-view');
  var mainView = new MainView(main)

  mainView.render();
}


window.addEventListener('load', app);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// same as views/ui.js

var MapWrapper = __webpack_require__(2);
var InfoWindow = __webpack_require__(3);
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
    var zoom = 13;
    var map = new MapWrapper(mapTag, centre, zoom);

    var obstructions = new Obstructions();
    obstructions.all(function(result){

        for(obstruction of result){
            map.addMarker(obstruction)
            // pass in whole obstruction object
        }
    }.bind(this));

 




  }

module.exports = MainView;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// same as models/films.js

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

      console.log(results);
      var obstructions = self.populateObstructions(results);
      console.log(obstructions);
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

// var Obstacle = require('./obstacle');

// var Items = function(){

//   var item1 = new Obstacle({
//     location: "Leith Walk/Albert Street",
//     lat: 55.962590,
//     lng: -3.178880,
//     type: "no dropped sidewalk",
//     grade: 1,
//     description: "sidewalk on corner of Leith Walk and Albert Street not dropped resulting in abrupt grade difference between road and pavement"
//   });

// }

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