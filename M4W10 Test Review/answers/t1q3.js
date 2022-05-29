/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // go over the question with you
  // think of my edge case
  // I'm going make starting variables
  // maxOcc = 0
  // numWithMaxOcc = null
  // occurance obj = {}
  // loop over arr 
  // check if it exisit in my obj
  // {6: 1} {6:2}
  // if it does increase the number by one otherwise set number to 1
  // I'm going to check if the current item in my loop, in the obj is larger then my maxOcc 
  // if it is I'm going to set my numWithMaxOcc to the current key in he obj

  let maxOcc = 0;
  let numWithMaxOcc = null;
  let occurance = {}
  for(let item of arr) {
    if(item in occurance) {
      occurance[item] ++
    } else {
      occurance[item] = 1
    }
    if(occurance[item] > maxOcc) {
      maxOcc = occurance[item]
      numWithMaxOcc = item
    }
  }
  return numWithMaxOcc;
};



// Don't change below:

module.exports = { mode };
