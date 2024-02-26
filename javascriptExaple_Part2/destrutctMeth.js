//destructuring = extract values from arrays and objects
//           then assign them to a variables i, a convenient way
//   []= to perform array destructuring
//   {} = to perform object destructuring

//example 1:swap the value on two variables
/*
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);
*/

// example 2: swap 2 elements on an array
/*const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);
*/

// example 3: assign array elements(items) to variables
/*
const colors = ['red', 'green', 'blue', 'black', 'white'];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/

//example 4: extract variables from object
/*
const person1 = {
  firstName: 'samira',
  lastName: 'bellil',
  age: 25,
  job: 'developer',
};
const person2 = {
  firstName: 'aptrik',
  lastName: 'star',
  age: 26,
};
/*
const { firstName, lastName, age, job } = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/
//const { firstName, lastName, age, job = 'employed' } = person2;
//console.log(job);

//example 5: destracted in function parameters
/*
function displayPerson({ firstName, lastName, age, job = 'unemployed' }) {
  console.log(`"name":${firstName} ${lastName}`);
  console.log(`"age:"${age}`);
  console.log(`"job":${job}`);
}

const person1 = {
  firstName: 'samira',
  lastName: 'bellil',
  age: 25,
  job: 'developer',
};
const person2 = {
  firstName: 'aptrik',
  lastName: 'star',
  age: 26,
};
displayPerson(person2);
*/
