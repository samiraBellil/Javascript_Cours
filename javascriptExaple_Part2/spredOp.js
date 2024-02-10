//The JavaScript spread operator (...) expands an iterable (like an array or string) into more elements.
//This allows us to quickly copy all or parts of an existing array into another array:

/*let numbers = [1, 2, 3, 4, 5];
//let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
//console.log(maximum);
console.log(minimum);
*/
//we can seerate the elements of array
/*let username = 'Samira Bellil';
let letters = [...username];
console.log(letters);
*/
//
/*const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo, 7, 8];
console.log(numbersCombined);
*/
/////////////////////////////////////////
//The spread operator is often used to extract only what's needed from an array:
// rest parameters = (...rest) allow a function work with a variable
//                    number of arguments by building them into an array
//          spread= expands an array into seperate elments
//           rest= bundels seperate elements into an array

/*function openFridge(...foods) {
  console.log(foods);
}

const food1 = 'pizza';
const food2 = 'humberger';
const food3 = 'hotdog';
const food4 = 'sushi';

openFridge(food1, food2, food3, food4);*/

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log([one, two, ...rest]);
