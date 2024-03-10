//A NodeList= object is a list (collection) of nodes extracted from a document
//A NodeList= object is almost the same as an HTMLCollection object
//Most browsers return a NodeList object for the method querySelectorAll()

let buttons = document.getElementsByClassName('myButton');
//add html and css properties
buttons.forEach((button) => {
  button.style.backgroundColor = 'purple';
  button.textContent = 'Hii !!';
});
