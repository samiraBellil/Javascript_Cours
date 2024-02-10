//constroctor= special method to define the properties and methods of objects
// The way to create an "object type", is to use an object constructor function.

// It is considered good practice to name constructor functions() with an upper-case first letter.
// In the example above, function Car() is an object constructor function
//we can use the constroctor to create many object using the same properties and function()
/*
function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`im dirive ${this.model}`);
  };
}
*/
//Objects of the same type are created by calling the constructor function with the new keyword:
//const car1 = new Car('Ford', 'Mustang', 2024, 'red');
//const car2 = new Car('Chevrolet', 'Camaro', 2024, 'blue');
/*
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
*/
//car1.drive();
//car2.drive();
