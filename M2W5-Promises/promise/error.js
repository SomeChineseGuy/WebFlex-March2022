const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;


const promise = returnPromise("Return me!", 1000);
console.log(promise);

promise
  .then(data => {
    console.log(data);
    return "Second"
  })
  .then(data => {
    console.log(data);
    return returnRejectedPromise("Fail! = (")
  })
  .then(data => {
    console.log(data);
    return "Fourth"
  })
  .then(data=> {
    console.log(data)
    return "no!"
  })
  .catch(err => {
    console.log(err)
  })