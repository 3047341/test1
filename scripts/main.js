var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/KerryBlue.jpg') {
      myImage.setAttribute ('src','images/KerryBlue2.jpg');
    } else {
      myImage.setAttribute ('src','images/KerryBlue.jpg');
    }
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Kerry Blues are cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Kerry Blues are cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}