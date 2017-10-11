var MainView = require('./views/main_view.js');
var IntroWindow = require('./views/intro_window.js')

var app = function(){
  var main = document.querySelector('#main-view');
  
  var introWindow = new IntroWindow();
  introWindow.render()

  var mainView = new MainView(main);
  mainView.render();
}


window.addEventListener('load', app);