//An array is a special variable, which can hold more than one value:
//     const array_name = [item1, item2, ...];

/*let fruits = ['apple', 'orange', 'banana'];
console.log(fruits);*/

//The length property returns the length (size) of an array:
/*const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let size = fruits.length;
console.log(size);*/

//The JavaScript method toString() converts an array to a string of (comma separated) array values.
/*const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let result = fruits.toString;
console.log(result, fruits);*/

//The at() method returns an indexed element from an array. the same as []
/*const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
//let fruit = fruits.at(3);
let fruit = fruits[3];
console.log(fruit);*/

//The join() method also joins all array elements into a string.
/*let prenons = ['habib', 'jean', 'peirre', 'mohamed', 'ahmed'];
let chaine = prenons.join('/');
console.log(chaine, prenons);*/

//The pop() method removes the last element from an array:
/*let prenons = ['habib', 'jean', 'peirre', 'mohamed', 'ahmed'];
let result = prenons.pop();
console.log(result, prenons);*/

/*The push() method adds a new element to an array (at the end):
let prenons = ['habib', 'jean', 'peirre', 'mohamed', 'ahmed'];
let result = prenons.push('samira');
console.log(result, prenons);*/

/*The shift() method removes the first array element and "shifts" all other elements to a lower index.
let prenons = ['habib', 'jean', 'peirre', 'mohamed', 'ahmed'];
let result = prenons.shift();
console.log(result, prenons);*/

//The unshift() method adds a new element to an array (at the beginning)
/*let prenons = ['habib', 'jean', 'peirre', 'mohamed', 'ahmed'];
let result = prenons.unshift('samira');
console.log(result, prenons);*/

//The concat() method creates a new array by merging (concatenating) existing arrays:
//The concat() method does not change the existing arrays. It always returns a new array.
/*const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const result = myGirls.concat(myBoys);
console.log(result);*/

//The copyWithin() method copies array elements to another position in an array:
//Copy to index 2, all elements from index 0:
/*const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.copyWithin(2, 0);
console.log(fruits);*/

//The flat() method creates a new array with sub-array elements concatenated to a specified depth
//une seule table
/*const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newarray = myArr.flat();
console.log(newarray);
*/

//The splice() method can be used to add new items to an array
/*const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 0, 'Lemon', 'kiwi');
console.log(fruits);*/

//The slice() method slices out a piece of an array into a new array:
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
/*const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const citrus = fruits.slice(1);
console.log(citrus);*/

//
