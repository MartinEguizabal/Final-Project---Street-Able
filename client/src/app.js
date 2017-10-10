var MainView = require('./views/main_view');

var app = function(){
  var main = document.querySelector('#main-view');
  var mainView = new MainView(main)

  mainView.render();
}


window.addEventListener('load', app);