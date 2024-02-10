//strings= allo you to anipulate and work with text(strings)

//let username = 'SamiraBellil';
//The length() property returns the length of a string:
/*let length = username.length;
console.log(`the length of a username is , ${length}`);*/

//The charAt() method returns the character at a specified index (position) in a string:
/*let char = username.charAt(0);
console.log(`the character in the position 0 is ${char}`);*/

//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).
/*let text = 'Apple, Banana, Kiwi';
let part = text.slice(7, 13);
console.log(part);*/

//Converting to Upper and Lower Case:
//          A string is converted to upper case with toUpperCase():
/*let text1 = 'Hello World!';
let text2 = text1.toUpperCase();
console.log(text2);*/

//A string is converted to lower case with toLowerCase():
/*let text1 = 'Hello World';
let text2 = text1.toLocaleLowerCase();
console.log(text2);*/

//concat() joins two or more strings:
/*let text1 = 'HELLO';
let text2 = 'WORLD!';
let text3 = text1.concat('', text2);
console.log(text3);*/

//The trim() method removes whitespace from both sides of a string:

/*let text1 = '      Hello World!      ';
let text2 = text1.trim();
console.log(text2);*/

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
/*let text1 = '     Hello World!     ';
let text2 = text1.trimStart();
console.log(text2);*/
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
/*let text1 = '     Hello World!     ';
let text2 = text1.trimEnd();
console.log(text2);*/

//The padStart() method pads a string from the start.
/*let text = '5';
let padded = text.padStart(4, '0');
console.log(padded);*/

//The padEnd() method pads a string from the end.
/*let text = '5';
let padded = text.padEnd(4, '0');
console.log(padded);*/

//repeat() returns a new string with a number of copies of a string:
// let text= string.repeat(count)

/*let text = 'Hello world!';
let result = text.repeat(2);
console.log(result);*/

//The replace() method replaces a specified value with another value in a string:
/*let text = 'Please visit Microsoft!';
let newtext = text.replace('Microsoft', 'W3Schools');
console.log(newtext, typeof newtext);*/

//In 2021, JavaScript introduced the string method replaceAll():
