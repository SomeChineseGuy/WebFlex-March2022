"use strict";

/* Question 01

Convert an array of arrays into an object.

This is the inverse of the previous question.

Arrays will only have two elements: [key, value]

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples:

- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
*/


const arrayToObject = function(arr) {
  // make a new obj
  // make 2 variables key and value as null
  // loop over arr
  // we know the zero element is key and the second is the value
  // set key as value and place in obj

  // let obj = {};
  // let key = null;
  // let value = null;
  // for(let i = 0; i < arr.length; i++) {
  //   key = arr[i][0];
  //   value = arr[i][1];
  //   obj[key] = value;
  // }

  // for (const j of arr) {
  //   obj[j[0]] = j[1]
  // }

  // for (const [key, value] of arr) {
  //   obj[key] = value
  // }

  return Object.fromEntries(arr)
  
}


// Don't change below:
module.exports = { arrayToObject };
