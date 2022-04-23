const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;

const promise = returnPromise("Return me!", 1000);

promise.then(data => {
  console.log(data)
  returnPromise("second", 1000)
    .then(data => {
      console.log(data)
      returnPromise("Third")
        .then(data => {
          console.log(data)
        })
    })
})

