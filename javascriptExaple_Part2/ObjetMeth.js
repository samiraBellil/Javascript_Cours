//Objects= are variables too. But objects can contain many values.
// can represent real world objects (people, products,places)
// objet= {key:value,
//               function()}
/*
const person = {
  firstName: 'Samira',
  lastName: 'Bellil',
  age: 30,
  isEmployed: true,
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
*/
// JavaScript variables are containers for data values.
//This code assigns a simple value (Fiat) to a variable named car:
//The values are written as name:value pairs (name and value separated by a colon).
//The values are written as name:value pairs (name and value separated by a colon).
// objectName.propertyName to acsee to property value

/*
const car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
console.log(car.type);
console.log(car.model);
console.log(car.color);
*/

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//this() :In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:
//      person.name = this.name
// NB(): this keyword not work with arrow function

/*
const person = {
  name: 'Samira',
  favFodd: 'pizza',
  sayhello: function () {
    console.log(`hi im ${this.name}`);
  },
  eat: function () {
    console.log(`my favorite food is ${this.favFodd}`);
  },
};
person.sayhello();
person.eat();
*/
//////////////////////////////////////////////////
/////////////////////////////////////////////////
