//Random password generator

//Math.random():returns a random number between 0 (inclusive),  and 1 (exclusive):
//              always returns a number lower than 1
// Math.random() used with Math.floor() can be used to return random integers.
//  (We are talking about numbers with no decimals here)
// Returns a random integer from 0 to 9:
// Math.floor(Math.random() * 10);

// Returns a random integer from 1 to 10:
// Math.floor(Math.random() * 10) + 1;

/*function generatorPassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowecaserChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberchars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=';
  let allowedChars = '';
  let password = '';
  allowedChars += includeLowercase ? lowecaserChars : '';
  allowedChars += includeUppercase ? includeUppercase : '';
  allowedChars += includeNumbers ? numberchars : '';
  allowedChars += symbolChars ? symbolChars : '';
  if (length <= 0) {
    return 'the length must be at least 1';
  }

  for (let i = 0; i <= length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatorPassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);
console.log(`generator Password: ${password}`);
*/
