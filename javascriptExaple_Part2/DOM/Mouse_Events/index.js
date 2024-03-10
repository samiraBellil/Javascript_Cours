//EventListener = listen for specific event to create interactive web pages
//              events: click, mouseover,mouseout
//         .addEventListener(event, callback or arrow function );

const myBox = document.getElementById('myBox');

function changeColor(event) {
  event.target.style.backgroundColor = 'pink';
  event.target.textContent = 'ooh!  😍';
  // console.log(event);
}
myBox.addEventListener('click', changeColor);

function changeMouseover(event) {
  event.target.style.backgroundColor = 'purple';
  event.target.textContent = 'Dont Do This! 😯';
  // console.log(event);
}
myBox.addEventListener('mouseover', changeMouseover);

function changeMouseout(event) {
  event.target.style.backgroundColor = 'lightgreen';
  event.target.textContent = 'Click me! 😀';
  // console.log(event);
}
myBox.addEventListener('mouseout', changeMouseout);
