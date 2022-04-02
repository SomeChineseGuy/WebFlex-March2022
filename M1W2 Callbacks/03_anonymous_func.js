// const sayHello = function(name) {
//   console.log(`hello ${name}`)
// }

// let num = "Stan";

// sayHello(num);
// sayHello("Kevin");

// "Nick"

const runFunc = function(anotherFunction, val) {
  console.log(anotherFunction(val));
}

runFunc(function(name) {
  console.log(`hello: ${name}`);
}, "Kevin");

// runFunc("Ryan");
// runFunc();

// "Ryan"("Andy")