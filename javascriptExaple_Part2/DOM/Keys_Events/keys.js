//addEventListener() method: listen for a specific events tocraete interactive
//  web pages events :keydown, keyup
//  element.addEventListener(event, callback);

const myBox = document.getElementById('myBox');

document.addEventListener('onkeydown', () => {
  myBox.textContent = '&#128530;';
  myBox.style.backgroundColor = 'lightpurple';
});
document.addEventListener('keydown', () => {
  myBox.textContent = '😍';
  myBox.style.backgroundColor = 'lightpink';
});
