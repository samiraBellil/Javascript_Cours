//elements selectors= Methods used to target and manipulate HTML elemnts
// they aloow you to select one or multiple Html elements
//    from the DOM(Document Object Model)
//The getElementById Method:
// The most common way to access an HTML element is to use the id of the element
/*
const myHeading = document.getElementById('myHeading');
myHeading.style.backgroundColor = 'yellow';
myHeading.style.textAlign = 'center';
console.log(myHeading);
*/
//Finding HTML Elements by Class Name: Hml collection
//to find all HTML elements with the same class name: use getElementsByClassName()
/*
const fruits = document.getElementsByClassName('fruit');
console.log(fruits);
fruits[0].style.backgroundColor = 'yellow';
*/

//Finding HTML Elements by Tag Name:
/*
let para = document.getElementsByTagName('p');
para[0].style.backgroundColor = 'red';
*/
// HTML DOM Document querySelector()
//The querySelector() method returns the first element that matches a CSS selector
/*
const element = document.querySelector('.fruit');
element.style.backgroundColor = 'red';
*/
//To return all matches (not only the first), use the querySelectorAll() instead
const elements = document.querySelectorAll('p');
elements[0].style.backgroundColor = 'blue';
