const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promise1 = returnPromise("Cheese burger", 2000);
const promise2 = returnPromise("Spicy Chicken", 1000);
const promise3 = returnPromise("Bacon... like ALL the bacon", 3000);
const promise4 = returnRejectedPromise("FAIL!", 5000);

const orders = [promise1, promise2, promise3, promise4];


Promise.all(orders)
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })