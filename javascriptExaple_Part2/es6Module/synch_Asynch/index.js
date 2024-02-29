//synchronous= Executes line by line consecutively in a sequential manner
// code that waits for a operation to complete

// asynchronous= Allows multiple operations to be performed concurrently without waiting
//  doens't block the execution flow and allows the program to continue
// (I/O) operations, network requests, fetchings data
// handling with : callbacks, promises, asyn/await

//synchronous:
/*
console.log('task1');
console.log('task2');
console.log('task3');
*/
//asynchronous:
function func1(callback) {
  //asynchronous function:setTimeout
  setTimeout(() => {
    console.log('task1');
    callback();
  }, 3000);
}
function func2() {
  console.log('task2');
  console.log('task3');
  console.log('task4');
}
func1(func2);
