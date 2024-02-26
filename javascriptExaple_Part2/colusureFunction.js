// Closure = a function defined inside of another function,
// the inner function has access to the variables
// and scope of the outer function
/*
function outer() {
  let message = 'hello';
  function inner() {
    console.log(message);
  }
  inner();
}
outer();
*/
/*
function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`count increased to ${count}`);
  }
  return { increment };
}
const counter = createCounter();
counter.increment;
*/
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

//The setTimeout() method calls a function after a number of milliseconds.
//1 second = 1000 milliseconds.
//The setTimeout() is executed only once.
// myTimeout = setTimeout(function, milliseconds);
/*
function sayHello() {
  window.alert('Hello !');
}
setTimeout(sayHello, 3000);
*/
//Use the clearTimeout() method to prevent the function from starting.
//The clearTimeout() method clears a timer set with the setTimeout() method.
//To clear a timeout, use the id returned from setTimeout():
// myTimeout = setTimeout(function, milliseconds);
//Then you can to stop the execution by calling clearTimeout():
// clearTimeout(myTimeout);
/*
const myTimeout = setTimeout(myGreeting, 3000);
function myGreeting() {
  window.alert('Hello samira!');
}
function myStopFunction() {
  clearTimeout(myTimeout);
}
*/
