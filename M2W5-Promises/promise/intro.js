const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;

const promise = returnPromise("Return me!", 3000);

console.log(promise);

// setTimeout(()=> {
//   console.log(promise)
// }, 10000)

// promise
//   .then(data => {
//     console.log(data);
//     return {
//       data: "Hello",
//       arr: [1,2,3]
//     };
//   })
//   .then(data => {
//     console.log(data)
//   })

// const promise2 = promise.then(data => {
//   console.log(data);
// })

// const promise3 = promise2.then(data => {
//   console.log(data)
// })

