/*-----------Example---------*/
//Step1: Create the element h1
const newH1 = document.createElement('h1');
//Step2: Add Attributes/Properties
newH1.textContent = 'i like pizza!';
newH1.id = 'myH1';
newH1.style.color = 'purple';
newH1.style.textAlign = 'center';
//Step3: Append Element To DOM to be last child
document.body.append(newH1);
//Append Element To DOM to be last child
//document.body.prepend(newH1);
//document.getElementById('box1').append(newH1);
//document.getElementById('box1').prepend(newH1);
//const box2 = document.getElementById('box2');
//document.body.insertBefore(newH1, box2);
//const boxes = document.querySelectorAll('.box');
//Methode 2:
//document.body.insertBefore(newH1, boxes[1]);

//Remove Html Element
document.body.removeChild(newH1);
