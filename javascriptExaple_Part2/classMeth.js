//class= (ECMAScript 2015, also known as ES6) provides more structured and cleaner way
//  to work with objects compared to traitional constractor function

//  Use the keyword class to create a class.
//  Always add a method named constructor():
// Syntax
//    class ClassName {
//constructor() { ... }}
/*
class Products {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }
  displayedProducts() {
    console.log(`name: ${this.name}`);
    console.log(`price: ${this.price}`);
  }
}
const Product1 = new Products('shirt', 19.99);
const Product2 = new Products('bag', 50.0);
const Product3 = new Products('belt', 17.99);

Product1.displayedProducts();
Product2.displayedProducts();
Product3.displayedProducts();
*/
/////////////////////////////////////////////////////////////////////////////

//Static = class methods are defined on the class itself.
//You cannot call a static method on an object, only on an object class.

/*class MathUtil {
  static PI = 3.14;
  static getParameter(radius) {
    return 2 * this.PI * radius;
  }
}
console.log(MathUtil.PI);
console.log(MathUtil.getParameter(10));
*/
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//Inheritance= allows a new class to inherit properties from
// an existing class(parent=>child)

//parent class:
/*
class Animal {
  alive = true;
  eat() {
    console.log(`this ${this.name} is eating`);
  }
  sleep() {
    console.log(`this ${this.name} is sleeping`);
  }
}

//Child class:
class Rabbit extends Animal {
  name = 'rabbit';
}
// Another child class:
class Fish extends Animal {
  name = 'fish';
}

const rabbit = new Rabbit();
const fish = new Fish();
console.log(rabbit.alive);
rabbit.eat();
console.log(fish.alive);
fish.sleep();
*/

//////////////////////////////////////////////////
/////////////////////////////////////////////////

//super = keyword used to call the constractor
//   or access the properties and methods of a parents(superClass)
//  this= this objects
//  super = the parents
/*
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//use super to extend properties from parent class(name,age)
class Rabitt extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimspeed) {
    super(name, age);

    this.swimspeed = swimspeed;
  }
}
/*class Hawk extends Animal {
  constructor(name, age, flyspeed) {
    super(name, age);
    this.flyspeed = flyspeed;
  }
}*/

//const rabbit = new Rabitt('rabbit', 1, 25);
//const fish = new Fish('fish', 2, 12);
//const Hawk = new Hawk('hawk', 3, 15);
//console.log(rabbit.name);
//console.log(fish.age);
