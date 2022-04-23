const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const randomDelay = () => Math.floor(Math.random() * 5000);

const promise1 = returnPromise("Cheese burger", randomDelay());
const promise2 = returnPromise("Spicy Chicken", randomDelay());
const promise3 = returnPromise("Bacon... like ALL the bacon", randomDelay());
const promise4 = returnRejectedPromise("FAIL!", randomDelay());

const promiseArr = [promise1, promise2, promise3, promise4];

Promise.race(promiseArr)
  .then(data => {
    console.log(data)
  })
  .catch(err=> {
    console.log(err)
  })
