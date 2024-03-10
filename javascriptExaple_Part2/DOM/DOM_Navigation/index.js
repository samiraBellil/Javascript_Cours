//DOM Navigation = With the HTML DOM, you can navigate the node tree using node relationships
// With the HTML DOM, all nodes in the node tree can be accessed by JavaScript
//.firstElementchild
//.lastElementChild
//.nextElemntSibling
//.previousElementSibling
//.parentElement
//.children
/*--------------firstElementchild--------
const fruit = document.getElementById('fruits');
const firstchild = fruit.firstElementChild;
firstchild.style.backgroundColor = 'orange';*/
/*--------------lastElementChild--------
const vegtebles = document.getElementById('vegtebles');
const lastchild = vegtebles.lastElementChild;
lastchild.style.backgroundColor = 'purple';
*/
/*--------------nextElementSibling--------
const element = document.getElementById('cake');
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = 'green';
*/
/*--------------previousElementSibling--------
const element = document.getElementById('orange');
const fruits = element.previousElementSibling;
fruits.style.backgroundColor = 'pink';
*/

/*--------------parentElement--------
const elemnt = document.getElementById('apple');
const parent = elemnt.parentElement;
parent.style.backgroundColor = 'blue';
*/

/*--------------children--------*/
const elemnt = document.getElementById('desserts');
const desserts = elemnt.children;
desserts[1].style.backgroundColor = 'yellow';
console.log(desserts);
