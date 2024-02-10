// for loop = repeat some code a limeted amount of time
//      The for statement =  creates a loop with 3 optional expressions:
//          for (expression 1; expression 2; expression 3) {
//          code block to be executed}
/*for (let i = 0; i < 10; i++) {
  console.log(i);
}*/

//Example — Guess the number game
//Generate a random number between 1 and 100.
/*const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);
*/
/*function guessNumber() {
  // generating a random integer from 1 to 10
  const random = Math.floor(Math.random() * 10) + 1;

  // take input from the user
  let number = parseInt(prompt('Guess a number from 1 to 10: '));

  // take the input until the guess is correct
  while (number !== random) {
    number = parseInt(prompt('Guess a number from 1 to 10: '));
  }

  // check if the guess is correct
  if (number == random) {
    console.log('You guessed the correct number.');
  }
}

// call the function
guessNumber();*/
