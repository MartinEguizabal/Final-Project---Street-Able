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