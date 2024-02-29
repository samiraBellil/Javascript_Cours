//es6 Module= introduced as part of ECMAScript 2015 update
/// an external files that contain reusable code
//that can be imported into other javascript files
// whrite reusable code for amny differnt apps
//  can contain variables ,classes, functions,....and more

///////use "import " kye word to import constant, function...0 from another file js

// using distructuring object{import constant, function...}

import { PI, getcircle, getarea, getvolume } from './mathUtile.js';
console.log(PI);
const circle = getcircle(10);
console.log(`${circle}cm`);
